import styles from '../styles/admin.module.css'
import { useState } from "react"
import Users from "../components/admin/Users"
import Dashboard from '../components/admin/Dashboard'
import Questions from "../components/admin/Questions"
import Games from "../components/admin/Games"

const AdminPanel = () => {
    const [view, setView] = useState('dashboard')

    return (
        <section className={styles.adminContainer}>
            <div className={styles.dataContainer}>
                <div className={styles.buttonsContainer}>
                    <img src="/assets/logoSoloLetras.png" alt="Nosy Logo" />
                    <div onClick={() => setView('dashboard')} className={styles.dashboardLink}>
                        <img className={styles.icon} src="/assets/dashboard.png" />
                        <p>Dashboard</p>
                    </div>
                    <div onClick={() => setView('users')} className={styles.dashboardLink}>
                        <img className={styles.icon} src="/assets/user.png" />
                        <p>Users</p>
                    </div>
                    <div onClick={() => setView('questions')} className={styles.dashboardLink}>
                        <img className={styles.icon} src="/assets/question.png" />
                        <p>Questions</p>
                    </div>
                    <div onClick={() => setView('games')} className={styles.dashboardLink}>
                        <img className={styles.icon} src="/assets/games.png" />
                        <p>Games</p>
                    </div>
                </div>
                <div className={styles.infoSection}>
                    <div className={styles.header}>
                        <h1>Acá debería ir una cabecera</h1>
                    </div>
                    <div>
                        {view === 'dashboard' && <Dashboard />}
                        {view === 'users' && <Users />}
                        {view === 'questions' && <Questions />}
                        {view === 'games' && <Games />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminPanel