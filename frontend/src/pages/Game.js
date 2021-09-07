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

  useEffect(() => {
    if (props.token) {
      createGame();
    }
    setLoader(false);
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
          setTimeout(() => {
            setQuestion(res);
          }, 4000);
        })
        .catch((e) => console.log(e));
    }
  }, [category]);

  if (loader) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <main
      className={styles.gameContainer}
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className={styles.renderGame}>
        {!question ? (
          <Roulette category={setCategory} />
        ) : (
          <QuestionCard question={question} setQuestion={setQuestion} />
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
