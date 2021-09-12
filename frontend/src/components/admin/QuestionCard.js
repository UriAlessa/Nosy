import styles from "../../styles/questions.module.css";
import { useRef, useState } from "react";
import { connect } from "react-redux";
import adminQuestionActions from "../../redux/actions/admin/adminQuestionsActions";
import { toast } from "react-hot-toast";
const Swal = require("sweetalert2");


const QuestionCard = (props) => {
    const { _id, category, question, possibleAnswers, status, creator } = props.question
    const [edit, setEdit] = useState(false);
    const [updated, setUpdated] = useState({})


    const categoryColor = {
        'Animals': styles.categoryPurple,
        'General Knowledge': styles.categoryBlue,
        'Music': styles.categoryRed,
        'Movies and series': styles.categoryYellow,
        'Science: Computers': styles.categoryGreen
    }

    const inputHandler = (e) => {
        setUpdated({
            ...updated,
            id: _id,
            [e.target.name]: e.target.value,
        })
    }

    const deleteQuestion = async (_id) => {
        try {
            let response = await props.deleteQuestion(_id)
            if (response.success) {
                toast.success("Question deleted.", {
                    position: "top-left",
                    style: {
                        borderRadius: "10px",
                        background: "#453ab7",
                        color: "#fff",
                        fontFamily: "Ubuntu, sans-serif",
                        height: "10vh"
                    },
                });
                props.reload()
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

    const verification = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this question?",
            text: "This action can not be undone!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
            background: "#302C83",
        }).then((result) => {
            if (result.value) {
                toast.promise(deleteQuestion(id), {
                    loading: " Deleting question...",
                    success: <b>Question deleted.</b>,
                    error: <b>Something went wrong</b>,
                });
            }
        });
    }


    const updateQuestion = async () => {
        try {
            let response = await props.updateQuestion(updated)
            if (response.success) {
                toast.success("Question edited successfully.", {
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
        <div className={styles.questionContainer}>
            <div className={styles.questionInfo}>
                <p className={status ? `${styles.approved}` : `${styles.notApproved}`}>{status ? 'Approved' : 'Not Approved'}</p>
                <p className={`${categoryColor[category]} ${styles.category}`}>{category}</p>
            </div>
            <div className={styles.questionSection}>
                <div className={styles.question}>
                    {edit ? <textarea name="question" rows='3' defaultValue={question} className={styles.toEdit} onChange={inputHandler}></textarea> : <h4>{question}</h4>}
                </div>
                <div className={styles.answerContainer}>
                    {
                        possibleAnswers.map((answer, index) => {
                            return (
                                edit ? <input defaultValue={answer} key={index} onChange={inputHandler} /> : <p key={index}>{answer}</p>
                            )
                        })
                    }
                </div>
                <div className={styles.buttonsContainer}>
                    {edit && (<svg onClick={() => setEdit(!edit)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-x-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>)}
                    {edit && (<svg onClick={updateQuestion} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-check-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                    </svg>)}
                    {!edit && (<svg onClick={() => setEdit(!edit)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>)}
                    {!edit && (<svg onClick={() => verification(_id)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>)}
                </div>
            </div>

        </div >
    );
};

const mapDispatchToProps = {
    updateQuestion: adminQuestionActions.updateQuestion,
    deleteQuestion: adminQuestionActions.deleteQuestion,
    reload: adminQuestionActions.reload
};

export default connect(null, mapDispatchToProps)(QuestionCard);
