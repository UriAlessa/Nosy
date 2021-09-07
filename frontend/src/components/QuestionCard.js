import styles from "../styles/questionCard.module.css";
import { connect } from "react-redux";
import questionActions from "../redux/actions/questionsActions";
import { useEffect } from "react";
import gamesActions from "../redux/actions/gamesActions";

const QuestionCard = (props) => {
  const { question, possibleAnswers, correctAnswer } = props.question;

  useEffect(() => {
    props.category(null)
    props.nosy(null)
  }, [])

  let questionAudio = new Audio("/assets/question.wav");
  questionAudio.play();

  let correctAudio = new Audio('/assets/correct.wav')
  let incorrectAudio = new Audio('/assets/incorrect.wav')

  // token, question, answer, nosy, powers_used, coins_spent
  const clickHandler = (e) => {
    let answer = correctAnswer === e.target.name
    if (correctAnswer === e.target.name) {
      correctAudio.play()
      e.target.style.background = "green";
      // props.renderRoulette()
      setTimeout(() => {
        props.setQuestion(null);
      }, 1500);
    } else {
      incorrectAudio.play()
      e.target.style.background = "red";
      console.log("perdio");
    }
    props.sendAnswer(props.token, props.question, answer, props.nosy,)
  };
  /* props.AccionDeQuitarUnaVida */
  /* Se le resta una vida */
  /*  Volver a renderizar la ruleta */

  return (
    <section
      className={styles.sectionQuestion}
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <article className={styles.card}>
        <div className={styles.containerLogo}>
          <img
            className={styles.logo}
            src="/assets/logoSoloLetras.png"
            alt="logo"
          />
          <h3>{question}</h3>
        </div>

        <div className={styles.containerButtons}>
          {possibleAnswers
            .sort(() => Math.random() - 0.5)
            .map((string, index) => {
              return (
                <button
                  key={index}
                  className={styles.buttonOption}
                  name={string}
                  onClick={clickHandler}
                >
                  {string}
                </button>
              );
            })}
        </div>
      </article>
    </section>

    // <div className={styles.card}>
    //     <h3>{question}</h3>
    //     <div>

    //         {possibleAnswers.map(answer => {
    //             <button id={index} onClick={clickHandler} name="{answer}">{answer}</button>
    //         })}

    //     </div>

    // </div>
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
