import styles from "../../styles/users.module.css";
import style from '../../styles/questions.module.css'
import { useEffect, useState } from "react";
import questionActions from "../../redux/actions/admin/questionsActions";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

const Questions = (props) => {
  // eslint-disable-next-line
  const [questions, setQuestions] = useState([]);
  const [filtered, setFiltered] = useState([])


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


  return (
    <div className={styles.tableContainer}>
      <div className={styles.buttonSection}>
        <button className={styles.button}>Add Question</button>
        <button className={styles.button} onClick={getQuestions}>View Questions</button>
      </div>
      <div className={styles.filterContainer}>
        {/* <input type="text" onChange={filter} placeholder="Filter by username" /> */}
      </div>
      <div className={style.questionsContainer}>
        {filtered.map((question) => <QuestionCard question={question} key={question._id} />)}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getQuestions: questionActions.getQuestions,
};

export default connect(null, mapDispatchToProps)(Questions);
