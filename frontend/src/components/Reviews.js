import styles from "../styles/reviews.module.css";
import ReviewSlide from "../components/ReviewSlide";
import RankingCard from "../components/RankingCard";
import ReviewAddComment from './ReviewAddNewOne'
import toast from "react-hot-toast";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import usersActions from "../redux/actions/usersActions";


const Reviews = (props) => {

  const [allReviews, setAllReviews] = useState([]);

  useEffect(()=>{
      getReviews()
    
  },[])

  const getReviews = async()=>{
    setAllReviews(await props.getReviews())
  }
  
  const render = llReviews.length !== 0 && allReviews.map((info, index) => {
    return <ReviewSlide oneReview={info} key={"Review" + index} />;
  });

  
  const inputHandler = (e) => {
    if (!props.token) {
      return toast.error("You most to be login for this", {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#453ab7",
          color: "#fff",
          fontFamily: "Ubuntu, sans-serif",
        },
      });
    } else {
      return (<div>
        <ReviewAddComment />
      </div>
      )
    }
  }

  // const renderRate = '' /**prop del ranking general que se vaya alimentando constantemente */

  return (
    <section id="whatTheySaying" className={styles.sectionGames}>
      <h2> WHAT ARE THEY SAYING?</h2>
      <h4 className={styles.subtitleDescription}>Memorable moments from other players</h4>
      <article className={styles.articleGames}>
        <div>
        <button className={styles.buttonAddComment} onClick={inputHandler}>+</button>
        {render}
        </div>
        <div>
        <RankingCard />
        {props.token && <ReviewAddComment />}</div>
      </article>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
  };
};

const mapDispatchToProps={
  getReviews: usersActions.getReviews,

}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

/**para Mongo*/
const AllReviews = [
  {
    img: "https://i.postimg.cc/Zq2ptpcd/12.png" /**picture del id del author */,
    author: "@campamberton" /**nombre del id del author */,
    date: "23/08/2021" /**reservar la fecha en que se hizo la review */,
    title: "Amazing night with friends",
    description:
      "That night we didn't know what to do ... when one of my friends recommended Nosy to us. It was starting and spending the whole night playing with each other until dawn! I can't wait to repeat!",
  },
  // {
  //     src: "",
  //     author:'', /**nombre del id del author */
  //     date:'',
  //     learningRate:'', /**número que se transformará en icono de aprehendizaje del 1 al 5*/
  //     title:"One of the top ten",
  //     description:"I was very bored that night, nothing would get me out of stillness, I didn't want to watch series and be passive in front of the screen. Then I found Nosy! and I spent hours playing and learning! I love it and recommend it!"
  // },
  // {
  //     src: "",
  //     author:'', /**nombre del id del author */
  //     date:'',
  //     learningRate:'', /**número que se transformará en icono de aprehendizaje del 1 al 5*/
  //     title:"I went to try and today I am a fan",
  //     description:"I had been told about this website but I did not know how interactive, intuitive and fun it was! It's been a month since I joined and I have a good place in the ranking, I think that says it all!"
  // }
];

