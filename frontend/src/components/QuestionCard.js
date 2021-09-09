import styles from "../styles/questionCard.module.css";
import { connect } from "react-redux";
import questionActions from "../redux/actions/questionsActions";
import { useState, useEffect, useRef } from "react";
import gamesActions from "../redux/actions/gamesActions";


const QuestionCard = (props) => {
  const { question, possibleAnswers, correctAnswer, category } = props.question;
  const [click, setClick] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [bomb, setBomb] = useState([]);
  const [repeatAnswer, setRepeatAnswer] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
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
  const sendAnswer = async (answer, powers_used, coins_spent) => {
    await props.sendAnswer(
      props.token,
      props.question,
      answer,
      props.golden,
      powers_used,
      coins_spent
    );
  };
  const clickHandler = (e) => {
    let answer = correctAnswer === e.target.name;
    answer ? correctAudio.play() : incorrectAudio.play();
    if (!repeatAnswer) {
      props.category(null);
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
        answer ? 1500 : 2500
      );
      setClick(true);
      let coins_spent = bomb.length !== 0 ? 10 : 0;
      coins_spent += repeatAnswer ? 8 : 0;
      let powers_used = repeatAnswer || bomb.length !== 0 ? 1 : 0;
      sendAnswer(answer, powers_used, coins_spent);
    }
    setRepeatAnswer(false);
    props.setGolden(false);
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
                    <img  className={styles.imgPowers} src="/assets/bomb.png"/> 
                    <div className={styles.containerIconsPowers}>
                        <h5>Bomb!</h5>
                      <div className={styles.containerCoins}> <h6> 30 </h6><img className={styles.imgPowersCoin}src="/assets/coin.png"/></div>
                    </div>
                </button>
                <button
                  disabled={repeatAnswer || bomb.length !== 0}
                  className={styles.buttonOption}
                  onClick={() => setRepeatAnswer(true)}
                >
                  <img  className={styles.imgPowers} src="/assets/repeat.png"/> 
                    <div className={styles.containerIconsPowers}>
                        <h5>Repeat</h5>
                      <div className={styles.containerCoins}> <h6> 25 </h6><img className={styles.imgPowersCoin}src="/assets/coin.png"/></div>
                    </div>
                </button>
              </>
            )}
            <button
              disabled={repeatAnswer || bomb.length !== 0}
              className={styles.buttonOption}
              onClick={() => {
                props.setPlaying(false);
                props.setQuestion(null);
              }}
            >
              <img  className={styles.imgPowers} src="/assets/lottery.png"/> 
                    <div className={styles.containerIconsPowers}>
                        <h5>Roll</h5>
                      <div className={styles.containerCoins}> <h6> 20 </h6><img className={styles.imgPowersCoin}src="/assets/coin.png"/></div>
                    </div>
            </button>
          </div>
        </article>
      )}
      <div class="overlay"></div>
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
