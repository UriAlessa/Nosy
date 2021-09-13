import style from '../../styles/users.module.css'
import styles from '../../styles/questions.module.css'
import { connect } from 'react-redux'
import { toast } from "react-hot-toast";
import usersActions from '../../redux/actions/usersActions';
import { useState } from 'react';
const Swal = require("sweetalert2");
let moment = require("moment");


const Dashboard = (props) => {
    const [allReviews, setAllReviews] = useState(props.reviews)

    const deleteReview = async (_id) => {
        try {
            await props.deleteReview(_id)
            props.setreload(!props.reload)
            setAllReviews(allReviews.filter((review) => {
                if (review._id !== _id) {
                    return review
                }
                return true
            }))
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
            title: "Are you sure you want to delete this review?",
            text: "This action can not be undone!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
            background: "#302C83",
        }).then((result) => {
            if (result.value) {
                toast.promise(deleteReview(id), {
                    loading: " Deleting review...",
                    success: <b>Review deleted.</b>,
                    error: <b>Something went wrong</b>,
                });
            }
        });
    }

    return (
        <div className={`${style.tableContainer} ${styles.dashboardContainer}`}>
            <div className={`${style.cardsContainer} ${styles.resumeContainer}`}>
                <div className={styles.resumeSection}>
                    <h2>Last Reviews</h2>
                    {allReviews.map((review) => {
                        return (
                            <div className={styles.reviewContainer} key={review._id}>
                                <p style={{ alignSelf: 'flex-start' }}>{moment(review.date).fromNow()}</p>
                                <div className={styles.reviewPic} style={{ backgroundImage: `url('${review.img}')` }}></div>
                                <h3>{review.title}</h3>
                                <p>{review.description}</p>
                                <svg onClick={() => verification(review._id)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
                            </div>
                        )
                    })}

                </div>
                <div className={`${styles.questionsContainer} ${styles.reviews}`}>
                </div>
            </div>
            <div></div>
            <div className={`${style.loginBox} ${style.connected}`} style={{ height: '90%' }}>
                <p>Online Users ({props.users.filter((user) => user.connected === true).length})</p>
                {props.users.map((user) => {
                    if (user.connected) {
                        return (
                            <div className={style.connectedUser} key={user._id}>
                                <div style={{ backgroundImage: `url('${user.avatar}')` }} className={style.userAvatar}></div>
                                <div className={style.dataUser}>
                                    <span>Username: {user.username}</span>
                                    <span>Coins: {user.coins}</span>
                                </div>
                            </div>
                        )
                    }
                    return true
                })}
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.adminUsers.users,
    }
}
const mapDispatchToProps = {
    deleteReview: usersActions.deleteReview
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

// <div className={styles.reviewContainer}>
// <div className={styles.reviewPic} style={{ backgroundImage: `url("${review.img}}")` }}></div>
// <div>hola</div>
// </div>