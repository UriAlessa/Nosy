import styles from "../styles/questionCard.module.css";
import { connect } from "react-redux";
import questionActions from "../redux/actions/questionsActions";
import { useState, useEffect, useRef } from "react";
import gamesActions from "../redux/actions/gamesActions";

const QuestionCard = (props) => {
  const { question, possibleAnswers, correctAnswer, category } = props.question;
  const [click, setClick] = useState(false);
  let repeatAnswerRef = useRef();
  const [answers, setAnswers] = useState([]);
  const [bomb, setBomb] = useState([]);
  const [repeatAnswer, setRepeatAnswer] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [audio, setAudio] = useState({});
  let answersContainer = useRef();
  const [seconds, setSeconds] = useState(15);

  let timeOut = useRef();
  const sendAnswer = async (answer, powers_used, coins_spent) => {
    let res = await props.sendAnswer(
      props.token,
      props.question,
      answer,
      props.golden,
      powers_used,
      coins_spent
    );
    let flag = res.newGameState.player.questions.filter(
      (qs) => qs.answer
    ).length;
    let flag2 =
      res.newGameState.player.questions[
        res.newGameState.player.questions.length - 1
      ].answer;
    props.setGolden(flag !== 0 && flag % 3 === 0 && flag2); //
    await props.setNosy(flag !== 0 && flag % 3 === 0 && flag2); //
  };
  useEffect(() => {
    if (seconds > 0) {
      timeOut = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      let coins_spent = bomb.length !== 0 ? 30 : 0;
      coins_spent += repeatAnswerRef.current ? 25 : 0;
      coins_spent += props.reRoll.current ? 20 : 0;
      let powers_used =
        repeatAnswerRef.current || bomb.length || props.reRoll.current !== 0
          ? 1
          : 0;
      props.reRoll.current = false;
      repeatAnswerRef.current = false;
      if (props.token && seconds === 0) {
        sendAnswer(false, powers_used, coins_spent);
      }
      setTimeout(() => {
        setIncorrect(true);
      }, 1500);
      setTimeout(() => {
        props.setQuestion(null);
        props.setPlaying(false);
      }, 2500);
    }
    return () => clearTimeout(timeOut.current);
  }, [seconds]);

  useEffect(() => {
    let questionAudio = new Audio("/assets/question.wav");
    let correctAudio = new Audio("/assets/correct.wav");
    let incorrectAudio = new Audio("/assets/incorrect.wav");
    props.setNosy(null);
    questionAudio.play();
    setAudio({ correctAudio, incorrectAudio });
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
    let answer = correctAnswer === e.target.name;
    answer ? audio.correctAudio.play() : audio.incorrectAudio.play();
    if (!repeatAnswer || answer) {
      props.category(null);
      Array.from(answersContainer.current.children).forEach((answer) =>
        answer.name === correctAnswer
          ? (answer.className = ` ${styles.buttonOption}  ${styles.correct}`)
          : (answer.className = ` ${styles.buttonOption}  ${styles.incorrect}`)
      );
      setClick(true);
      let coins_spent = bomb.length !== 0 ? 30 : 0;
      coins_spent += repeatAnswerRef.current ? 25 : 0;
      coins_spent += props.reRoll.current ? 20 : 0;
      let powers_used =
        repeatAnswerRef.current || bomb.length || props.reRoll.current !== 0
          ? 1
          : 0;
      props.reRoll.current = false;
      repeatAnswerRef.current = false;
      if (props.token) {
        sendAnswer(answer, powers_used, coins_spent);
      }
      !answer &&
        setTimeout(() => {
          setIncorrect(true);
        }, 1500);
      setTimeout(
        () => {
          props.setQuestion(null);
          props.setPlaying(false);
        },
        answer ? 1500 : 2500
      );
    }
    if (repeatAnswer && !answer) {
      e.target.className = ` ${styles.buttonOption}  ${styles.incorrect}`;
    }
    repeatAnswer && setRepeatAnswer(false);
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
            <div className={styles.containerHeaderCard}>
              <img
                className={styles.logo}
                src="/assets/logoSoloLetras.png"
                alt="logo"
              />
              <div className={styles.coinInfo}>
                <img className={styles.imgInfoGame} src="/assets/coin.png" />
                <span>20</span>
              </div>
              <div className={styles.containerInfoGame}>
                <img className={styles.imgInfoGame} src="/assets/heart_2.png" />
                <span>{props.game ? props.game.lifes : 5}</span>
                <div className={styles.containerSeconds}>
                  <p className={styles.seconds}>{("0" + seconds).slice(-2)}</p>
                </div>
              </div>
            </div>
            <h2>{props.qs_category}</h2>

            <h3>{question}</h3>
          </div>
          <div ref={answersContainer} className={styles.containerButtons}>
            {bomb.length === 0
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

          <div className={styles.powersButtons}>
            {answers.length > 2 && (
              <>
                <button
                  disabled={repeatAnswer || bomb.length !== 0}
                  className={styles.buttonOption}
                  onClick={Bomb}
                >
                  <img className={styles.imgPowers} src="/assets/bomb.png" />
                  <div className={styles.containerIconsPowers}>
                    <h5>Bomb!</h5>
                    <div className={styles.containerCoins}>
                      <h6> 30 </h6>
                      <img
                        className={styles.imgPowersCoin}
                        src="/assets/coin.png"
                      />
                    </div>
                  </div>
                </button>
                <button
                  disabled={repeatAnswer || bomb.length !== 0}
                  className={styles.buttonOption}
                  onClick={() => {
                    repeatAnswerRef.current = true;
                    setRepeatAnswer(true);
                  }}
                >
                  <img className={styles.imgPowers} src="/assets/repeat.png" />
                  <div className={styles.containerIconsPowers}>
                    <h5>Repeat</h5>
                    <div className={styles.containerCoins}>
                      <h6> 25 </h6>
                      <img
                        className={styles.imgPowersCoin}
                        src="/assets/coin.png"
                      />
                    </div>
                  </div>
                </button>
              </>
            )}
            <button
              disabled={repeatAnswer || bomb.length !== 0}
              className={styles.buttonOption}
              onClick={() => {
                props.reRoll.current = true;
                props.setPlaying(false);
                props.setQuestion(null);
              }}
            >
              <img className={styles.imgPowers} src="/assets/lottery.png" />
              <div className={styles.containerIconsPowers}>
                <h5>Roll</h5>
                <div className={styles.containerCoins}>
                  <h6> 20 </h6>
                  <img
                    className={styles.imgPowersCoin}
                    src="/assets/coin.png"
                  />
                </div>
              </div>
            </button>
          </div>
        </article>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    game: state.game.game,
  };
};

const mapDispatchToProps = {
  renderRoulette: questionActions.rouletteRender,
  sendAnswer: gamesActions.sendAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
