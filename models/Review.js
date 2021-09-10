const mongoose = require('mongoose')
  
  const reviewSchema = new mongoose.Schema({
      img:{type:String},
      userId:{type:mongoose.Types.ObjectId, ref: 'user'},
      date:{type:Number},
      title: {type:String},
      description:{type:String}
  })
  
  const Review = mongoose.model('review', reviewSchema)
  
module.exports = Review