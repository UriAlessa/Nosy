import styles from "../../styles/questions.module.css";
import { useEffect, useState } from "react";
import questionActions from "../../redux/actions/questionsActions";
import { connect } from "react-redux";
import TableData from "./TableData";

const Questions = (props) => {
  // eslint-disable-next-line
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      let response = await props.getQuestions();
      if (response.data.success) {
        setQuestions(response.data.response);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Username</th>
            <th>Email</th>
            <th>Coins</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {questions.map((question) => <TableData key={user._id} question={question} />)} */}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = {
  getQuestions: questionActions.getQuestions,
};

export default connect(null, mapDispatchToProps)(Questions);
