import styles from "../styles/game.module.css";
import Roulette from "../components/Roulette";
import { useEffect, useRef, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { connect } from "react-redux";
import questionActions from "../redux/actions/questionsActions";
import gamesActions from "../redux/actions/gamesActions";
import Loader from "../components/Loader";

const Game = (props) => {
  // const [questions, setQuestions] = useState([]);
  const roulette = useRef();
  let reRoll = useRef();
  const [loader, setLoader] = useState(true);
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState(null);
  const [nosy, setNosy] = useState(false);
  const [golden, setGolden] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (props.token) {
      createGame();
    }
    setLoader(false);
    // eslint-disable-next-line
  }, []);

  const createGame = async () => {
    try {
      await props.createGame(props.token);
    } catch (error) {
      console.log("We have problems. Try again later.");
    }
  };

  useEffect(() => {
    if (category) {
      props
        .getQuestion(category)
        .then((res) => {
          setQuestion(res);
        })
        .catch((e) => console.log(e));
    }
    // eslint-disable-next-line
  }, [category]);

  if (loader) {
    return <Loader />;
  }

  const categoryHandler = (e) => {
    setCategory(e.target.innerText);
    setNosy(false);
  };

  let audio = new Audio("/assets/roulette.mp3");

  const selectCategory = (rand) => {
    let degrees = rand / 360;
    degrees = (degrees - parseInt(degrees.toString().split(".")[0])) * 360;
    roulette.current.style.transform = "rotate(+" + rand + "deg)";
    switch (true) {
      // case degrees > 30 && degrees <= 90:
      //   setTimeout(() => {
      //     setPlaying(!playing);
      //     setCategory("Movies and series");
      //   }, 5000);
      //   break;
      // case degrees > 90 && degrees <= 150:
      //   setTimeout(() => {
      //     setPlaying(!playing);
      //     setCategory("Science: Computers");
      //   }, 5000);
      //   break;
      // case degrees > 150 && degrees <= 210:
      //   setTimeout(() => {
      //     setPlaying(!playing);
      //     setCategory("General Knowledge");
      //   }, 5000);
      //   break;
      // case degrees > 210 && degrees <= 270:
      //   setTimeout(() => {
      //     setPlaying(!playing);
      //     setCategory("Animals");
      //   }, 5000);
      //   break;
      // case degrees > 270 && degrees <= 330:
      //   setTimeout(() => {
      //     setPlaying(!playing);
      //     setCategory("Music");
      //   }, 5000);
      //   break;
      default:
        setTimeout(() => {
          setPlaying(!playing);
          setNosy(true);
          setGolden(true);
        }, 5000);
    }
  };
  const rotate = () => {
    setPlaying(!playing);
    audio.play();
    let rand = Math.random() * 360 + 3600;
    selectCategory(rand);
  };

  return (
    <main
      className={styles.gameContainer}
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className={styles.renderGame}>
        {props.game && props.game.status === false ? (
          <h1>GANASTER PAPURRI</h1>
        ) : nosy ? (
          <div className={styles.containerButtons}>
            <h1>Choose a category and get the Character</h1>
            {props.game && !props.game.player.medals.includes("Music") && (
              <div>
                <img src="/assets/music.png" alt="" />
                <button
                  onClick={categoryHandler}
                  className={`${styles.buttonOption} ${styles.music}`}
                >
                  Music
                </button>
              </div>
            )}
            {props.game && !props.game.player.medals.includes("Animals") && (
              <div>
                <img src="/assets/animals.png" alt="" />
                <button
                  onClick={categoryHandler}
                  className={`${styles.buttonOption} ${styles.animals}`}
                >
                  Animals
                </button>
              </div>
            )}
            {props.game &&
              !props.game.player.medals.includes("Movies and series") && (
                <div>
                  <img src="/assets/movies.png" alt="" />
                  <button
                    onClick={categoryHandler}
                    className={`${styles.buttonOption} ${styles.movies}`}
                  >
                    Movies and series
                  </button>
                </div>
              )}
            {props.game &&
              !props.game.player.medals.includes("Science: Computers") && (
                <div>
                  <img src="/assets/computer.png" alt="" />
                  <button
                    onClick={categoryHandler}
                    className={`${styles.buttonOption} ${styles.computers}`}
                  >
                    Science: Computers
                  </button>
                </div>
              )}
            {props.game &&
              !props.game.player.medals.includes("General Knowledge") && (
                <div>
                  <img src="/assets/cultura.png" alt="" />
                  <button
                    onClick={categoryHandler}
                    className={`${styles.buttonOption} ${styles.knowledge}`}
                  >
                    General Knowledge
                  </button>
                </div>
              )}
          </div>
        ) : !question ? (
          <Roulette
            setNosy={setNosy}
            setGolden={setGolden}
            rotate={rotate}
            playing={playing}
            roulette={roulette}
          />
        ) : (
          <QuestionCard
            reRoll={reRoll}
            question={question}
            setQuestion={setQuestion}
            setPlaying={setPlaying}
            golden={golden}
            setGolden={setGolden}
            rotate={rotate}
            category={setCategory}
            setNosy={setNosy}
            qs_category={category}
          />
        )}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    render: state.questions.render,
    token: state.users.token,
    game: state.game.game,
  };
};

const mapDispatchToProps = {
  getQuestion: questionActions.getQuestion,
  createGame: gamesActions.createGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
