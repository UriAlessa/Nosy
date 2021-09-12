import styles from '../styles/admin.module.css'
import { useEffect, useState } from "react"
import Users from "../components/admin/Users"
import Dashboard from '../components/admin/Dashboard'
import Questions from "../components/admin/Questions"
import Games from "../components/admin/Games"
import { connect } from 'react-redux'
import adminUserActions from "../redux/actions/admin/adminUserActions";
import adminQuestionsActions from "../redux/actions/admin/adminQuestionsActions";
import { toast } from "react-hot-toast";
import Loader from '../components/Loader'


const AdminPanel = (props) => {
    const [view, setView] = useState("dashboard")
    const [loader, setLoader] = useState(true)

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

    useEffect(() => {
        getUsers()
        getQuestions()
    }, [])

    if (loader) {
        return <Loader />
    }

    return (
        <section className={styles.adminContainer}>
            <div className={styles.dataContainer}>
                <div className={styles.headerContainer}>
                    <img className={styles.logo} src='/assets/logoSoloLetras.png' alt="" />
                    <nav className={styles.navContainer}>
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
                        {/* <span className={`${styles.spanPanel} ${document.title.includes('Games') && styles.active}`} onClick={() => {
                            document.title = 'Nosy | Games - Admin Panel'
                            setView('games')
                        }}>Games</span> */}
                    </nav>
                    <div className={styles.user}>
                        <h3>Hello, Admin</h3>
                        <img className={styles.avatar} src={props.avatar} alt="" />
                    </div>
                </div>
                <div className={styles.infoSection}>
                    {view === 'dashboard' && <Dashboard />}
                    {view === 'users' && <Users />}
                    {view === 'questions' && <Questions />}
                    {/* {view === 'games' && <Games />} */}
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
        reload: state.adminQuestions.reload
    }
}

const mapDispatchToProps = {
    getUsers: adminUserActions.getUsers,
    getQuestions: adminQuestionsActions.getQuestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)