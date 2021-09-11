import style from '../../styles/users.module.css'
import styles from '../../styles/questions.module.css'
import { connect } from 'react-redux'

const Dashboard = (props) => {

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
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.adminUsers.users
    }
}
export default connect(mapStateToProps)(Dashboard)