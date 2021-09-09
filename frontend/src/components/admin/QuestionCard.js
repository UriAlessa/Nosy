import styles from "../../styles/questions.module.css";
import { useState } from "react";
import { connect } from "react-redux";
import usersActions from "../../redux/actions/usersActions";

const QuestionCard = (props) => {
    const { _id, category, question, possibleAnswers, status, creator } = props.question
    const [edit, setEdit] = useState(false);

    // const updateUser = () => {
    //     setUpdated({
    //         ...updated,
    //     });
    // };

    return (
        <div className={styles.questionContainer}>
            <p><span>Creator: </span>{creator}</p>
            <p><span>Creator: </span>{creator}</p>
            <h4>{category}</h4>
            {edit ? <textarea rows='3' defaultValue={question}></textarea> : <h4>{question}</h4>}
            {possibleAnswers.map((answer) => {
                return (
                    edit ? <input defaultValue={answer} /> : <p>{answer}</p>
                )
            })}

            <div className={styles.buttonsContainer}>
                {edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/cancel.png" alt="" />)}
                {edit && (<img className={styles.icon} src="/assets/check.png" alt="" />)}
                {!edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/edit.png" alt="" />)}
                {!edit && (<img className={styles.icon} src="/assets/delete.png" alt="" />)}
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    updateQuestion: usersActions.updateUser,
};

export default connect(null, mapDispatchToProps)(QuestionCard);
