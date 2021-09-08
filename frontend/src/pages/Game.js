import styles from "../styles/game.module.css";
import Roulette from "../components/Roulette";
import { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { connect } from "react-redux";
import questionActions from "../redux/actions/questionsActions";
import gamesActions from "../redux/actions/gamesActions";

const Game = (props) => {
  // const [questions, setQuestions] = useState([]);
  const [loader, setLoader] = useState(true);
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState(null);
  const [nosy, setNosy] = useState(false);
  const [golden, setGolden] = useState(false);

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

  return (
    <main
      className={styles.gameContainer}
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className={styles.renderGame}>
        {nosy ? (
          <div>
            <button onClick={categoryHandler}>Music</button>
            <button onClick={categoryHandler}>Animals</button>
            <button onClick={categoryHandler}>Movies and series</button>
            <button onClick={categoryHandler}>Science: Computers</button>
            <button onClick={categoryHandler}>General Knowledge</button>
          </div>
        ) : !question ? (
          <Roulette
            category={setCategory}
            setNosy={setNosy}
            setGolden={setGolden}
          />
        ) : (
          <QuestionCard
            question={question}
            setQuestion={setQuestion}
            category={setCategory}
            golden={golden}
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
