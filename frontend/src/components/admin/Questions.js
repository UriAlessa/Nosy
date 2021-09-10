import style from '../../styles/users.module.css'
import styles from '../../styles/questions.module.css'
import { useEffect, useState, useRef } from "react";
import questionActions from "../../redux/actions/admin/questionsActions";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [filtered, setFiltered] = useState([])
  const usernameInput = useRef()
  const passwordInput = useRef()
  const emailInput = useRef()
  const avatarInput = useRef()

  document.title = 'Nosy | Questions - Admin Dashboard'


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
    // setNewUser({
    //   ...newUser,
    //   [e.target.name]: e.target.value
    // })
  }

  const sendQuestion = () => {

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
      <div className={style.loginBox}>
        <p>Create New Question</p>
        <form>
          <div className={style.userBox}>
            <input ref={usernameInput} name="category" type="text" placeholder="Category" onClick={inputHandler} autoComplete="nope" />
          </div>
          <div className={style.userBox}>
            <input ref={passwordInput} name="question" type="text" placeholder="Question" onClick={inputHandler} autoComplete="nope" />
          </div>
          <div className={style.userBox}>
            <input ref={emailInput} name="correctAnswer" type="text" placeholder="Correct Answer" onClick={inputHandler} autoComplete="nope" />
          </div>
          <div className={style.userBox}>
            <input ref={avatarInput} name="incorrectAnswer" type="text" placeholder="Image Url" onClick={inputHandler} autoComplete="nope" />
          </div>
          <span className={style.linkButton} onClick={sendQuestion}>
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
};

export default connect(null, mapDispatchToProps)(Questions);
