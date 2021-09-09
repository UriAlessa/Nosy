const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Review = require("../models/Review");

const usersAccountControllers = {
  signUp: async (req, res) => {
    const { username, password, email, avatar, facebook, google } = req.body;
    const pw = bcrypt.hashSync(password);
    try {
      if (await User.findOne({ email: email })) {
        throw new Error("You're already signed up with that Google Account");
      }
      const newUser = new User({
        username,
        password: pw,
        email,
        avatar,
        google: google || false,
        facebook: facebook || false,
      });
      await newUser.save();
      const token = jwt.sign({ ...newUser }, process.env.SECRETORKEY);
      res.json({
        success: true,
        user: {
          username,
          avatar,
        },
        token,
      });
    } catch (error) {
      error.message.includes("Google")
        ? res.json({ error: [{ message: error.message }] })
        : res.json({ success: false, error: error.message });
    }
  },
  logIn: async (req, res) => {
    const { username, password, facebook, google } = req.body;
    try {
      let user = await User.findOne({ username: username });
      if (!user) throw new Error("Username doesn't exists");
      if ((user.google && !google) || (user.facebook && !facebook)) {
        throw new Error("You must log in with Google");
      }
      let match = user && bcrypt.compareSync(password, user.password);
      if (!user || !match) throw new Error("Password does not match");
      const token = jwt.sign({ ...user }, process.env.SECRETORKEY);
      res.json({
        success: true,
        user: {
          username,
          avatar: user.avatar,
        },
        token,
      });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  logOut: async (req, res) => {
    const { _id } = req.user;
    try {
      await User.findOneAndUpdate(
        { _id },
        {
          $set: {
            "playing_now.status": false,
            "playing_now.game_id": null,
            "playing_now.multi_player": true,
          },
        }
      );
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false });
    }
  },
  addFriend: async (req, res) => {
    try {
      let user = await User.findOne({ username: req.body.username });
      if (user) {
        await User.findOneAndUpdate(
          { username: req.body.username },
          { $push: { friend_requests: { user: req.user._id, creator: false } } }
        );
        await User.findOneAndUpdate(
          { username: req.user.username },
          { $push: { friend_requests: { user: user._id, creator: true } } }
        );
      } else {
        throw new Error("User not found");
      }
      res.json({ success: true });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },
  acceptFriendRequest: async (req, res) => {
    const { username, accept } = req.body;
    try {
      let user = await User.findOne({ username });
      if (accept) {
        await User.findOneAndUpdate(
          { username: req.body.username },
          { $pull: { friend_requests: { user: req.user._id } } }
        );
      }
      await User.findOneAndUpdate(
        { username: req.user.username },
        { $pull: { friend_requests: { user: user._id } } }
      );
      res.json({ success: accept });
    } catch (error) {
      res.json({ success: false, error: error.message });
    }
  },

  verifyToken: async (req, res) => {
    res.json({
      success: true,
      user: {
        username: req.user.username,
        avatar: req.user.avatar,
      },
    });
  },

  newReview: async (req, res)=>{
    console.log(req.user)
    console.log(req.body)
    let date= Date.now()
    console.log(date)
    try{
      const reviewToPost = await new Review({
        img: req.body.img,
        userId: req.user._id,
        date,
        title: req.body.title,
        description: req.body.description
      })
      console.log(reviewToPost)
      await reviewToPost.save()
      res.json({success:true, response: reviewToPost})
    }catch(err){
      res.json({success:false, response:"DB trouble"})
    }
  },


  getReviews: async (req, res)=>{
    let expired = 2592000000;
    let dateNow= Date.now()
    try{
      let reviews = await Review.find().populate({
        path: "userId", model:"user", select:"username avatar"
      })
      res.json({success: true, response: reviews.filter(review =>  dateNow - review.date < expired)
      })

    }catch(error){
      res.json({succes:false, response: error.message})
    }
  }


};






module.exports = usersAccountControllers;
