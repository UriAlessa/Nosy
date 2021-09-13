import styles from '../styles/admin.module.css'
import { useEffect, useState } from "react"
import Users from "../components/admin/Users"
import Dashboard from '../components/admin/Dashboard'
import Questions from "../components/admin/Questions"
import { connect } from 'react-redux'
import adminUserActions from "../redux/actions/admin/adminUserActions";
import adminQuestionsActions from "../redux/actions/admin/adminQuestionsActions";
import { toast } from "react-hot-toast";
import Loader from '../components/Loader'
import usersActions from "../redux/actions/usersActions";


const AdminPanel = (props) => {
    const [view, setView] = useState("dashboard")
    const [loader, setLoader] = useState(true)
    const [reviews, setReviews] = useState([])
    const [reload, setReload] = useState(true)

    useEffect(() => {
        document.title = 'Nosy - Admin Dashboard'
        // eslint-disable-next-line
    }, [reload])

    const getUsers = async () => {
        if (!props.users.length) {
            try {
                let response = await props.getUsers();
                if (response.success) {
                    setLoader(false)
                } else {
                    throw new Error();
                }
            } catch (error) {
                toast.error("Something went wrong. Try again later.", {
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
    };

    const getQuestions = async () => {
        if (!props.questions.length) {
            try {
                let response = await props.getQuestions();
                if (response.success) {
                    setLoader(false)
                } else {
                    throw new Error();
                }
            } catch (error) {
                toast.error("Something went wrong. Try again later.", {
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
    };

    const getReviews = async () => {
        if (!reviews.length) {
            try {
                let response = await props.getReviews();
                if (response.success) {
                    setReviews(response.response);
                    setLoader(false)
                } else {
                    throw new Error();
                }
            } catch (error) {
                toast.error("Something went wrong. Try again later.", {
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
    };

    useEffect(() => {
        getUsers()
        getQuestions()
        getReviews()
        // eslint-disable-next-line
    }, [reload])

    if (loader) {
        return <Loader />
    }

    return (
        <section className={styles.adminContainer}>
            <div className={styles.dataContainer}>
                <div className={styles.headerContainer}>
                    <img className={styles.logo} src='/assets/LogoRuleta.png' alt="" />
                    <nav className={styles.navContainer}>
                        <span className={styles.spanPanel} onClick={() => {
                            props.history.push("/")
                        }}>Home</span>
                        <span className={`${styles.spanPanel} ${document.title.includes('Dashboard') && styles.active}`} onClick={() => {
                            document.title = 'Nosy - Admin Dashboard'
                            setView('dashboard')
                        }}>Dashboard</span>
                        <span className={`${styles.spanPanel} ${document.title.includes('Users') && styles.active}`} onClick={() => {
                            document.title = 'Nosy | Users - Admin Panel'
                            setView('users')
                        }}>Users</span>
                        <span className={`${styles.spanPanel} ${document.title.includes('Questions') && styles.active}`} onClick={() => {
                            document.title = 'Nosy | Questions - Admin Panel'
                            setView('questions')
                        }}>Questions</span>
                    </nav>
                    <div className={styles.user}>
                        <h3>Hello, Admin</h3>
                        <div className={styles.iconAvatar} style={{ backgroundImage: `url('${props.avatar}')` }} alt=""></div>
                    </div>
                </div>
                <div className={styles.infoSection}>
                    {view === 'dashboard' && <Dashboard reviews={reviews.sort((a, b) => b.date - a.date)} setreload={setReload} reload={reload} />}
                    {view === 'users' && <Users />}
                    {view === 'questions' && <Questions />}
                </div>

            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        avatar: state.users.avatar,
        users: state.adminUsers.users,
        questions: state.adminQuestions.questions,
        reload: state.adminQuestions.reload,
        reviews: state.adminUsers.reviews
    }
}

const mapDispatchToProps = {
    getUsers: adminUserActions.getUsers,
    getQuestions: adminQuestionsActions.getQuestions,
    getReviews: usersActions.getReviews,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)