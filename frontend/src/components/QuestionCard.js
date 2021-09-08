import styles from "../styles/questionCard.module.css";
import { connect } from "react-redux";
import questionActions from "../redux/actions/questionsActions";
import { useState, useEffect, useRef } from "react";
import gamesActions from "../redux/actions/gamesActions";

const QuestionCard = (props) => {
  const { question, possibleAnswers, correctAnswer } = props.question;
  const [click, setClick] = useState(false);
  const [answers, setAnswers] = useState([]);
  const infoLifes = (<div className={styles.infoLifes}><img className={styles.heart} src="/assets/heart.png" alt="heart" /><h3>You lost a life!</h3></div>)
  const [incorrect, setIncorrect] = useState(false)
  let answersContainer = useRef();
  let questionAudio = new Audio("/assets/question.wav");
  let correctAudio = new Audio("/assets/correct.wav");
  let incorrectAudio = new Audio("/assets/incorrect.wav");

  useEffect(() => {
    props.setNosy(null)
    questionAudio.play();
    setAnswers(possibleAnswers.sort(() => Math.random() - 0.5));
  }, []);


  // token, question, answer, nosy, powers_used, coins_spent
  const clickHandler = (e) => {
    props.category(null);
    setClick(true);
    Array.from(answersContainer.current.children).forEach((answer) =>
      answer.name === correctAnswer
        ? (answer.className = ` ${styles.buttonOption}  ${styles.correct}`)
        : (answer.className = ` ${styles.buttonOption}  ${styles.incorrect}`)
    );
    let answer = correctAnswer === e.target.name
    answer
      ? correctAudio.play()
      : incorrectAudio.play();
    !answer && setTimeout(() => {
      setIncorrect(true)
    }, 750)
    setTimeout(() => {
      props.setQuestion(null);
    }, 1500);
    props.sendAnswer(props.token, props.question, answer, props.nosy,)
  };

  return (


    <section
      className={styles.sectionQuestion}
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      {incorrect
        ? infoLifes
        : <article className={styles.card}>
          <div className={styles.containerLogo}>
            <img
              className={styles.logo}
              src="/assets/logoSoloLetras.png"
              alt="logo"
            />
            <h3>{question}</h3>
          </div>

          <div ref={answersContainer} className={styles.containerButtons}>
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

const mapStateToProps = (state) => {
  return {
    token: state.users.token
  }
}

const mapDispatchToProps = {
  renderRoulette: questionActions.rouletteRender,
  sendAnswer: gamesActions.sendAnswer
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
