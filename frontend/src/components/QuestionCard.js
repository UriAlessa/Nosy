import styles from "../styles/questionCard.module.css";
import { connect } from "react-redux";
import questionActions from "../redux/actions/questionsActions";
import { useState, useEffect, useRef } from "react";
import gamesActions from "../redux/actions/gamesActions";

const QuestionCard = (props) => {
  const { question, possibleAnswers, correctAnswer } = props.question;
  const [click, setClick] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [bomb, setBomb] = useState([]);
  const [repeatAnswer, setRepeatAnswer] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [bombclicked, setBombclicked] = useState(false);
  let answersContainer = useRef();
  let questionAudio = new Audio("/assets/question.wav");
  let correctAudio = new Audio("/assets/correct.wav");
  let incorrectAudio = new Audio("/assets/incorrect.wav");

  useEffect(() => {
    props.setNosy(null);
    questionAudio.play();
    setAnswers(possibleAnswers.sort(() => Math.random() - 0.5));
    // eslint-disable-next-line
  }, []);

  const infoLifes = (
    <div className={styles.infoLifes}>
      <img className={styles.heart} src="/assets/heart.png" alt="heart" />
      <h3>You lost a life!</h3>
    </div>
  );
  // token, question, answer, nosy, powers_used, coins_spent
  const clickHandler = (e) => {
    setBombclicked(true);
    let answer = correctAnswer === e.target.name;
    answer ? correctAudio.play() : incorrectAudio.play();
    if (!repeatAnswer) {
      props.category(null);
      setClick(true);
      Array.from(answersContainer.current.children).forEach((answer) =>
        answer.name === correctAnswer
          ? (answer.className = ` ${styles.buttonOption}  ${styles.correct}`)
          : (answer.className = ` ${styles.buttonOption}  ${styles.incorrect}`)
      );
      !answer &&
        setTimeout(() => {
          setIncorrect(true);
        }, 1500);
      setTimeout(
        () => {
          props.setQuestion(null);
          props.setPlaying(false);
        },
        answer ? 1000 : 2500
      );
      setBomb(false);
    } else {
      correctAnswer === e.target.name
        ? (e.target.className = ` ${styles.buttonOption}  ${styles.correct}`)
        : (e.target.className = ` ${styles.buttonOption}  ${styles.incorrect}`);
      if (correctAnswer === e.target.name) {
        !answer &&
          setTimeout(() => {
            setIncorrect(true);
          }, 1500);
        setTimeout(() => {
          props.setQuestion(null);
          props.setPlaying(false);
        }, 1500);
      }
    }
    setRepeatAnswer(false);
    // props.sendAnswer(props.token, props.question, answer, props.golden);
  };

  const Bomb = () => {
    const cualquiera = Math.floor(Math.random() * 3);
    setBomb(
      possibleAnswers
        .filter((ans) => ans !== correctAnswer)
        .filter((ans, index) => index !== cualquiera)
    );
  };

  return (
    <section
      className={styles.sectionQuestion}
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      {incorrect ? (
        infoLifes
      ) : (
        <article className={styles.card}>
          <div className={styles.containerLogo}>
            <img
              className={styles.logo}
              src="/assets/logoSoloLetras.png"
              alt="logo"
            />
            <h3>{question}</h3>
          </div>
          <div ref={answersContainer} className={styles.containerButtons}>
            {bomb.length === 0 || bombclicked
              ? answers.map((string, index) => {
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
              })
              : answers.map((string, index) => {
                return (
                  <button
                    key={index}
                    className={
                      bomb.includes(string)
                        ? styles.buttonOptionBombed
                        : styles.buttonOption
                    }
                    name={string}
                    onClick={clickHandler}
                    disabled={bomb.includes(string)}
                  >
                    {string}
                  </button>
                );
              })}
          </div>

          <div className={styles.containerButtons}>
            {answers.length > 2 && (
              <>
                <button
                  className={styles.buttonOption}
                  onClick={Bomb}
                  disabled={click}
                >
                  Bomb
                </button>
                <button
                  className={styles.buttonOption}
                  onClick={() => setRepeatAnswer(true)}
                  disabled={click}
                >
                  Repeat
                </button>
              </>
            )}
            <button
              className={styles.buttonOption}
              onClick={() => {
                props.setQuestion(null);
                props.setPlaying(false);
              }}
              disabled={click}
            >
              Re Roll
            </button>
          </div>
          <div>
            hola
          </div>
        </article>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
  };
};

const mapDispatchToProps = {
  renderRoulette: questionActions.rouletteRender,
  sendAnswer: gamesActions.sendAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
