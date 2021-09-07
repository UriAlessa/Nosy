import styles from "../styles/questionCard.module.css";
import { connect } from "react-redux";
import questionActions from "../redux/actions/questionsActions";
import { useState, useEffect, useRef} from "react";


const QuestionCard = (props) => {
  const { question, possibleAnswers, correctAnswer } = props.question;
  const[click, setClick]= useState(false)
  const infoLifes = (<div className={styles.infoLifes}><img className={styles.heart} src = "/assets/heart.png" alt="heart"/><h3>You lost a life!</h3></div>)
  const[incorrect, setIncorrect] = useState(false)
  const[answers, setAnswers] = useState([])
  let answersContainer = useRef()
  let questionAudio = new Audio("/assets/question.wav");
  questionAudio.play();
  useEffect(()=>{
    setAnswers(possibleAnswers.sort(() => Math.random() - 0.5))
  }, [])
  
  const clickHandler = (e) => {
    setClick(true)
    Array.from(answersContainer.current.children).forEach((answer)=>
    answer.name === correctAnswer 
    ? answer.className = ` ${styles.buttonOption}  ${styles.correct}`
    : answer.className = ` ${styles.buttonOption}  ${styles.incorrect}`
    )
    if(e.target.name !== correctAnswer) {
      setTimeout(()=>{
        setIncorrect(true)
      },750)
    }
    setTimeout(() => {
      props.setQuestion(null);
    }, 1500);
  };

  return (
    <section
      className={styles.sectionQuestion}
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
  { incorrect 
  ? infoLifes
  :       <article className={styles.card}>
  <div className={styles.containerLogo}>
    <img
      className={styles.logo}
      src="/assets/logoSoloLetras.png"
      alt="logo"
    />
    <h3>{question}</h3>
  </div>

  <div  ref={answersContainer} className={styles.containerButtons}> 
    {answers.map((string, index) => {
        return (
          <button
            key={index}
            className={styles.buttonOption}
            name={string}
            onClick={clickHandler}
            disabled={click}
          >
            {string}
          </button>
        );
      })}
  </div>
</article> 
  }
    </section>

  );
};

const mapDispatchToProps = {
  renderRoulette: questionActions.rouletteRender,
};

export default connect(null, mapDispatchToProps)(QuestionCard);
