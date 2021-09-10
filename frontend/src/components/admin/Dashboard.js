import style from '../../styles/users.module.css'
import styles from '../../styles/questions.module.css'

const Dashboard = (props) => {
    const { users, questions } = props

    return (
        <div className={style.tableContainer}>
            <div className={style.cardsContainer}>
                <div className={styles.filterContainer}>
                    <input type="text" placeholder="Filter by username" />
                </div>
                <div className={styles.questionsContainer}>
                </div>
            </div>
            <div className={style.loginBox} style={{ height: '90%' }}>
                <p>Online Users</p>
                {users.map((user) => {
                    if (true) {
                        return <span>{user.username}</span>
                    }
                })}
            </div>
        </div>
    )
}
export default Dashboard