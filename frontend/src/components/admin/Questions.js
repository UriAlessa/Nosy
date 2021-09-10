import style from '../../styles/users.module.css'
import styles from '../../styles/questions.module.css'
import { useEffect, useState, useRef } from "react";
import questionActions from "../../redux/actions/admin/questionsActions";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { toast } from "react-hot-toast";


const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [newQuestion, setNewQuestion] = useState([])
  const correctInput = useRef()
  const questionInput = useRef()
  const incorrectInputOne = useRef()
  const incorrectInputTwo = useRef()
  const incorrectInputThree = useRef()

  const getQuestions = async () => {
    try {
      let response = await props.getQuestions();
      if (response.data.success) {
        setQuestions(response.data.response);
        setFiltered(response.data.response)
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!questions.length) {
      getQuestions()
    }
    // eslint-disable-next-line
  }, [])

  const inputHandler = (e) => {
    setNewQuestion({
      ...newQuestion,
      [e.target.name]: e.target.value,
      'possibleAnswer': [
        correctInput.current.value,
        incorrectInputOne.current.value,
        incorrectInputTwo.current.value,
        incorrectInputThree.current.value
      ]
    })
  }

  const createQuestion = async () => {
    try {
      let response = await props.createQuestion(newQuestion)
      if (response.success) {
        toast.success("Question Created Successfully", {
          position: "top-left",
          style: {
            borderRadius: "10px",
            background: "#453ab7",
            color: "#fff",
            fontFamily: "Ubuntu, sans-serif",
            height: "10vh"
          },
        });
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error("Something went wrong. Try again Later", {
        position: "top-left",
        style: {
          borderRadius: "10px",
          background: "#453ab7",
          color: "#fff",
          fontFamily: "Ubuntu, sans-serif",
          height: "10vh"
        },
      });
    }
  }


  return (
    <div className={style.tableContainer}>
      <div className={style.cardsContainer}>
        <div className={styles.filterContainer}>
          <input type="text" placeholder="Filter by username" />
        </div>
        <div className={styles.questionsContainer}>
          {filtered.map((question) => <QuestionCard question={question} key={question._id} />)}
        </div>
      </div>
      <div className={style.loginBox} style={{ height: '90%' }}>
        <p>Create New Question</p>
        <form>
          <div className={style.userBox}>
            <select name="category" id="category" onClick={inputHandler}>
              <option value="" disabled selected>Choose a category</option>
              <option value="Animals">Animals</option>
              <option value="Music">Music</option>
              <option value="General Knowledge">General Knowledge</option>
              <option value="Science: Computers">Science: Computers</option>
              <option value="Movies and series">Movies and series</option>
            </select>
          </div>
          <div className={style.userBox}>
            <input ref={questionInput} name="question" type="text" placeholder="Question" onChange={inputHandler} autoComplete="nope" />
          </div>
          <div className={style.userBox}>
            <input ref={correctInput} name="correctAnswer" type="text" placeholder="Correct Answer" onChange={inputHandler} autoComplete="nope" />
          </div>
          <div className={style.userBox}>
            <input ref={incorrectInputOne} name="incorrectAnswer1" type="text" placeholder="Incorrect Answer 1" onChange={inputHandler} autoComplete="nope" />
          </div>
          <div className={style.userBox}>
            <input ref={incorrectInputTwo} name="incorrectAnswer2" type="text" placeholder="Incorrect Answer 2" onChange={inputHandler} autoComplete="nope" />
          </div>
          <div className={style.userBox}>
            <input ref={incorrectInputThree} name="incorrectAnswer2" type="text" placeholder="Incorrect Answer 3" onChange={inputHandler} autoComplete="nope" />
          </div>
          <span className={style.linkButton} onClick={createQuestion}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Create Question
          </span>
        </form>

      </div>

    </div>
  );
};

const mapDispatchToProps = {
  getQuestions: questionActions.getQuestions,
  createQuestion: questionActions.createQuestions
};

export default connect(null, mapDispatchToProps)(Questions);
