import styles from '../styles/admin.module.css'
import { useState } from "react"
import { connect } from "react-redux"
import Users from "../components/admin/Users"
import Questions from "../components/admin/Questions"
import Games from "../components/admin/Games"

const AdminPanel = () => {
    const [view, setView] = useState(null)

    return (
        <section className={styles.adminContainer}>
            <h1>Admin Panel</h1>
            <div className={styles.dataContainer}>
                <div className={styles.buttonsContainer}>
                    <button className={styles.button} onClick={() => setView('users')}>Users</button>
                    <button className={styles.button} onClick={() => setView('questions')}>Questions</button>
                    <button className={styles.button} onClick={() => setView('games')}>Games</button>
                </div>
                <div className={styles.infoSection}>
                    {view === 'users' && <Users />}
                    {view === 'questions' && <Questions />}
                    {view === 'games' && <Games />}
                </div>
            </div>

        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)