import styles from '../styles/admin.module.css'
import { useEffect, useState } from "react"
import Users from "../components/admin/Users"
import Dashboard from '../components/admin/Dashboard'
import Questions from "../components/admin/Questions"
import Games from "../components/admin/Games"
import { connect } from 'react-redux'
import usersActions from "../redux/actions/admin/adminUserActions";
import questionActions from "../redux/actions/admin/questionsActions";


const AdminPanel = (props) => {
    const [view, setView] = useState("dashboard")
    const [users, setUsers] = useState([])
    const [questions, setQuestions] = useState([])
    const [loader, setLoader] = useState(true)

    const getUsers = async () => {
        try {
            let response = await props.getUsers();
            if (response.data.success) {
                setUsers(response.data.response);
                // setFiltered(response.data.response)
                setLoader(false)
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getQuestions = async () => {
        try {
            let response = await props.getQuestions();
            if (response.data.success) {
                setQuestions(response.data.response);
                // setFiltered(response.data.response)
                setLoader(false)
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers()
        getQuestions()
    }, [])

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
                    {view === 'dashboard' && <Dashboard users={users} qustions={questions} />}
                    {view === 'users' && <Users users={users} />}
                    {view === 'questions' && <Questions questions={questions} />}
                    {/* {view === 'games' && <Games />} */}
                </div>

            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        avatar: state.users.avatar,
    }
}

const mapDispatchToProps = {
    getUsers: usersActions.getUsers,
    getQuestions: questionActions.getQuestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)