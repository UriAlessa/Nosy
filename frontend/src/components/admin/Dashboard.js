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
            <div className={`${style.loginBox} ${style.connected}`} style={{ height: '90%' }}>
                <p>Online Users ({users.filter((user) => user.connected === true).length})</p>
                {users.map((user) => {
                    if (user.connected) {
                        return (
                            <div className={style.connectedUser}>
                                <div style={{ backgroundImage: `url('${user.avatar}')` }} className={style.userAvatar}></div>
                                <div className={style.dataUser}>
                                    <span>Username: {user.username}</span>
                                    <span>Coins: {user.coins}</span>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default Dashboard