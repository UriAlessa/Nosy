import styles from '../../styles/usercard.module.css'
import { useState } from 'react'
import { connect } from 'react-redux'
import usersActions from '../../redux/actions/usersActions'

const UserCard = (props) => {
    const { username, email, avatar, coins } = props.user
    const [edit, setEdit] = useState(false)
    const [updated, setUpdated] = useState({ ...props.user })

    const updateUser = () => {
        setUpdated({

        })
    }

    return (
        <article className={styles.userCard}>
            <div className={styles.userAvatar} style={{ backgroundImage: `url('${avatar}')` }}></div>
            {!edit ? <h1>{username}</h1> : <input defaultValue={username} />}
            {!edit ? <h3>{email}</h3> : <input defaultValue={email} />}
            {!edit ? <h4>{coins}</h4> : <input defaultValue={coins} />}
            <div className={styles.buttonSection}>
                {edit && (<img className={styles.icon} onClick={updateUser} src="/assets/check.png" alt="" />)}
                {edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/cancel.png" alt="" />)}
                {!edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/edit.png" alt="" />)}
                {!edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/delete.png" alt="" />)}
            </div>
        </article>
    )
}

const mapDispatchToProps = {
    updateUser: usersActions.updateUser
}

export default connect(null, mapDispatchToProps)(UserCard)