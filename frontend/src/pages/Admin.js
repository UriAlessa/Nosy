import styles from '../styles/admin.module.css'
import { useState } from "react"
import Users from "../components/admin/Users"
import Questions from "../components/admin/Questions"
import Games from "../components/admin/Games"
import Dashboard from "../components/admin/Dashboard"

const AdminPanel = () => {
    const [view, setView] = useState("dashboard")

    return (
        <section className={styles.adminContainer}>
            <div className={styles.dataContainer}>
                <nav className={styles.navContainer}>
                    <span className={styles.spanPanel} onClick={() => setView('users')}>Users</span>
                    <span className={styles.spanPanel} onClick={() => setView('questions')}>Questions</span>
                    <span className={styles.spanPanel} onClick={() => setView('games')}>Games</span>
                    <span className={styles.spanPanel} onClick={() => setView('dashboard')}>Dashboard</span>
                </nav>
                <div className={styles.infoSection}>
                    {view === 'users' && <Users />}
                    {view === 'questions' && <Questions />}
                    {view === 'games' && <Games />}
                    {view === 'dashboard' && <Dashboard />}
                </div>
                
            </div>

        </section>
    )
}

export default AdminPanel