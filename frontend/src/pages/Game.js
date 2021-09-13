import styles from "../styles/game/game.module.css";
import Roulette from "../components/Roulette";
import { useEffect, useRef, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { connect } from "react-redux";
import questionActions from "../redux/actions/questionsActions";
import gamesActions from "../redux/actions/gamesActions";
import Loader from "../components/Loader";
import Nosy from "../components/Nosy";
import StatisticGame from "../components/StatisticGame";
import { Link } from "react-router-dom";
import otherActions from "../redux/actions/otherActions";
import toast from "react-hot-toast";
const Swal = require("sweetalert2");

const Game = (props) => {
  // const [questions, setQuestions] = useState([]);
  const [coinsFront, setCoinsFront] = useState();
  const roulette = useRef();
  let reRoll = useRef(false);
  const [loader, setLoader] = useState(true);
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState(null);
  const [nosy, setNosy] = useState(false);
  const [golden, setGolden] = useState(false);
  const [playing, setPlaying] = useState(false);

  const createGame = async () => {
    try {
      await props.createGame(props.token);
    } catch (error) {
      console.log("We have problems. Try again later.");
    }
  };

  useEffect(() => {
    props.setPlayNow(false);
    if (props.token && !props.game) {
      console.log("soy create game");
      createGame();
    }
    if (props.game && !props.playNow) {
      console.log("soy set game");
      props.setGame(localStorage.getItem("token"));
    }
    if (props.game && props.playNow) {
      console.log("soy la sweetalert");
      Swal.fire({
        title: "There's a game in course",
        text: "Do you want to start a new one?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
        background: "#302C83",
      }).then((result) => {
        if (result.value) {
          toast.promise(createGame(), {
            loading: "Starting new game...",
            success: <b>Good luck & Have fun!</b>,
            error: <b>Something went wrong</b>,
          });
        }
      });
    }
    setLoader(false);
    return () => props.setPlayNow(false);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (category) {
      props
        .getQuestion(category, props.game)
        .then((res) => {
          setQuestion(res);
        })
        .catch((e) => console.log(e));
    }
    // eslint-disable-next-line
  }, [category]);
  useEffect(() => setCoinsFront(props.coins), [props.coins]);

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
    setPlaying(!playing);
    switch (true) {
      case degrees > 30 && degrees <= 90:
        setTimeout(() => {
          setCategory("Movies and series");
        }, 5000);
        break;
      case degrees > 90 && degrees <= 150:
        setTimeout(() => {
          setCategory("Science: Computers");
        }, 5000);
        break;
      case degrees > 150 && degrees <= 210:
        setTimeout(() => {
          setCategory("General Knowledge");
        }, 5000);
        break;
      case degrees > 210 && degrees <= 270:
        setTimeout(() => {
          setCategory("Animals");
        }, 5000);
        break;
      case degrees > 270 && degrees <= 330:
        setTimeout(() => {
          setCategory("Music");
        }, 5000);
        break;
      default:
        setTimeout(() => {
          setNosy(true);
          setGolden(true);
        }, 5000);
    }
  };
  const rotate = () => {
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
        <Link to="/">
          <img
            src="/assets/goback.png"
            className={styles.goBack}
            alt="goback"
          />
        </Link>
        {props.game && props.game.status === false && props.game.lifes > 0 ? (
          <StatisticGame lifes={props.game.lifes} {...props} />
        ) : props.game &&
          props.game.status === false &&
          props.game.lifes <= 0 ? (
          <StatisticGame lifes={props.game.lifes} {...props} />
        ) : nosy ? (
          <Nosy categoryHandler={categoryHandler} game={props.game} />
        ) : !question ? (
          <Roulette
            setNosy={setNosy}
            setGolden={setGolden}
            rotate={rotate}
            playing={playing}
            roulette={roulette}
            coinsFront={coinsFront}
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
            coinsFront={coinsFront}
            setCoinsFront={setCoinsFront}
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
    coins: state.game.coins,
    playNow: state.other.playNow,
  };
};

const mapDispatchToProps = {
  getQuestion: questionActions.getQuestion,
  createGame: gamesActions.createGame,
  setGame: gamesActions.setGame,
  setPlayNow: otherActions.setPlayNow,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);