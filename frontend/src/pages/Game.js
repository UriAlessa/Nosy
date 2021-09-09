import styles from "../styles/game.module.css";
import Roulette from "../components/Roulette";
import { useEffect, useRef, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { connect } from "react-redux";
import questionActions from "../redux/actions/questionsActions";
import gamesActions from "../redux/actions/gamesActions";

const Game = (props) => {
  // const [questions, setQuestions] = useState([]);
  const roulette = useRef();
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
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  const categoryHandler = (e) => {
    setCategory(e.target.innerText);
    setNosy(false);
  };

  let audio = new Audio("/assets/roulette.mp3");

  const selectCategory = (rand) => {
    let degrees = rand / 360;
    degrees = (degrees - parseInt(degrees.toString().split(".")[0])) * 360;
    roulette.current.style.transform = "rotate(" + rand + "deg)";
    let portion = 360 / 6;
    switch (true) {
      case degrees > 0 && degrees <= 30:
        setTimeout(() => {
          setPlaying(!playing);
          setCategory("Animals");
        }, 5000);
        break;
      case degrees > portion && degrees <= 2 * portion:
        setTimeout(() => {
          setPlaying(!playing);
          setCategory("Music");
        }, 5000);
        break;
      case degrees > 2 * portion && degrees <= 3 * portion:
        setTimeout(() => {
          setPlaying(!playing);
          setCategory("General Knowledge");
        }, 5000);
        break;
      case degrees > 3 * portion && degrees <= 4 * portion:
        setTimeout(() => {
          setPlaying(!playing);
          setCategory("Science: Computers");
        }, 5000);
        break;
      case degrees > 4 * portion && degrees <= 5 * portion:
        setTimeout(() => {
          setPlaying(!playing);
          setCategory("Movies and series");
        }, 5000);
        break;
      case degrees > 5 * portion && degrees <= 6 * portion:
        setTimeout(() => {
          setPlaying(!playing);
          setNosy(true);
          setGolden(true);
        }, 5000);
        // props.setNosy(true)
        break;
      default:
        return false;
    }
  };
  const rotate = () => {
    setPlaying(!playing);
    audio.play();
    let rand = Math.random() * 360 + 360;
    selectCategory(rand);
  };

  return (
    <main
      className={styles.gameContainer}
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className={styles.renderGame}>
        {nosy ? (
          <div className={styles.containerButtons}>
            <button onClick={categoryHandler} className={styles.buttonOption}>
              Music
            </button>
            <button onClick={categoryHandler} className={styles.buttonOption}>
              Animals
            </button>
            <button onClick={categoryHandler} className={styles.buttonOption}>
              Movies and series
            </button>
            <button onClick={categoryHandler} className={styles.buttonOption}>
              Science: Computers
            </button>
            <button onClick={categoryHandler} className={styles.buttonOption}>
              General Knowledge
            </button>
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
            question={question}
            setQuestion={setQuestion}
            setPlaying={setPlaying}
            golden={golden}
            setGolden={setGolden}
            rotate={rotate}
            category={setCategory}
            setNosy={setNosy}
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
  };
};

const mapDispatchToProps = {
  getQuestion: questionActions.getQuestion,
  createGame: gamesActions.createGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
