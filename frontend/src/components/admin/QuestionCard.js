import styles from "../../styles/questions.module.css";
import { useState } from "react";
import { connect } from "react-redux";
import usersActions from "../../redux/actions/usersActions";

const QuestionCard = (props) => {
    const { _id, category, question, possibleAnswers, status, creator } = props.question
    const [edit, setEdit] = useState(false);

    const categoryColor = {
        'Animals': styles.categoryPurple,
        'General Knowledge': styles.categoryBlue,
        'Music': styles.categoryRed,
        'Movies and series': styles.categoryYellow,
        'Science: Computers': styles.categoryGreen
    }

    // const updateUser = () => {
    //     setUpdated({
    //         ...updated,
    //     });
    // };

    return (
        <div className={styles.questionContainer}>
            <div className={styles.questionInfo}>
                <p className={status ? `${styles.approved}` : `${styles.notApproved}`}>{status ? 'Approved' : 'Not Approved'}</p>
                {/* <p>Creator<br />{creator}</p> */}
                <p className={`${categoryColor[category]} ${styles.category}`}>{category}</p>
            </div>
            {edit ? <textarea rows='3' defaultValue={question}></textarea> : <h4>{question}</h4>}
            {
                possibleAnswers.map((answer, index) => {
                    return (
                        edit ? <input defaultValue={answer} key={index} /> : <p key={index}>{answer}</p>
                    )
                })
            }

            <div className={styles.buttonsContainer}>
                {edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/cancel.png" alt="" />)}
                {edit && (<img className={styles.icon} src="/assets/check.png" alt="" />)}
                {!edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/edit.png" alt="" />)}
                {!edit && (<img className={styles.icon} src="/assets/delete.png" alt="" />)}
            </div>
        </div >
    );
};

const mapDispatchToProps = {
    updateQuestion: usersActions.updateUser,
};

export default connect(null, mapDispatchToProps)(QuestionCard);
