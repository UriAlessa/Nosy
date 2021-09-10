import styles from '../styles/admin.module.css'
import { useState } from "react"
import Users from "../components/admin/Users"
import Dashboard from '../components/admin/Dashboard'
import Questions from "../components/admin/Questions"
import Games from "../components/admin/Games"
import { connect } from 'react-redux'

const AdminPanel = (props) => {
    const [view, setView] = useState("dashboard")
    //borrar
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
                        <h3>Hi, Admin</h3>
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
    }
}

export default connect(mapStateToProps)(AdminPanel)