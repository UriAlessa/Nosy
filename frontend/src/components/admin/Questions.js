import style from '../../styles/users.module.css'
import styles from '../../styles/questions.module.css'
import { useState, useRef } from "react";
import adminQuestionActions from "../../redux/actions/admin/adminQuestionsActions";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { toast } from "react-hot-toast";

const Questions = (props) => {
  const [filtered, setFiltered] = useState(props.questions)
  const [newQuestion, setNewQuestion] = useState({})
  const [reload, setReload] = useState(true)
  const correctInput = useRef()
  const questionInput = useRef()
  const incorrectInputOne = useRef()
  const incorrectInputTwo = useRef()
  const incorrectInputThree = useRef()

  const inputHandler = (e) => {
    setNewQuestion({
      ...newQuestion,
      [e.target.name]: e.target.value,
      'possibleAnswers': [
        correctInput.current.value,
        incorrectInputOne.current.value,
        incorrectInputTwo.current.value,
        incorrectInputThree.current.value
      ],
    })
  }

  const createQuestion = async () => {
    correctInput.current.value = ""
    questionInput.current.value = ""
    incorrectInputOne.current.value = ""
    incorrectInputTwo.current.value = ""
    incorrectInputThree.current.value = ""
    try {
      let response = await props.createQuestion(newQuestion)
      console.log(response)
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
    setReload(!reload)
  }

  return (
    <div className={style.tableContainer}>
      <div className={style.cardsContainer}>
        <div className={styles.filterContainer}>
          <input type="text" placeholder="Filter by username" />
        </div>
        <div className={styles.questionsContainer}>
          <h2>Showing {filtered.length}</h2>
          {filtered.map((question) => <QuestionCard question={question} key={question._id} />)}
        </div>
      </div>
      <div className={style.loginBox} style={{ height: '90%' }}>
        <p>Create New Question</p>
        <form>
          <div className={style.userBox}>
            <select name="category" id="category" onClick={inputHandler}>
              <option defaultValue="" disabled>Choose a category</option>
              <option defaultValue="Animals">Animals</option>
              <option defaultValue="Music">Music</option>
              <option defaultValue="General Knowledge">General Knowledge</option>
              <option defaultValue="Science: Computers">Science: Computers</option>
              <option defaultValue="Movies and series">Movies and series</option>
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
            <input ref={incorrectInputThree} name="incorrectAnswer3" type="text" placeholder="Incorrect Answer 3" onChange={inputHandler} autoComplete="nope" />
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

const mapStateToProps = (state) => {
  return {
    questions: state.adminQuestions.questions
  }
}

const mapDispatchToProps = {
  createQuestion: adminQuestionActions.createQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
