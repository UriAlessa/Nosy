import styles from '../../styles/users.module.css'
import { useState } from 'react'
import { connect } from 'react-redux'
import usersActions from '../../redux/actions/usersActions'

const TableData = (props) => {
    const [edit, setEdit] = useState(false)
    const { _id, username, email, avatar, coins } = props.user
    const [updated, setUpdated] = useState({ ...props.user })

    const updateUser = () => {
        setUpdated({
            ...updated,

        })
    }

    return (
        <tr>
            <td><div className={styles.avatar} style={{ backgroundImage: `url('${avatar}')` }}></div></td>
            <td>{!edit ? `${username}` : <input name='username' onChange={updateUser} defaultValue={username} ref={username} />}</td>
            <td>{!edit ? `${email}` : <input name='email' onChange={updateUser} defaultValue={email} ref={username} />}</td>
            <td>{!edit ? `${coins}` : <input name='coins' onChange={updateUser} defaultValue={coins} />}</td>
            <td>
                {edit && <img className={styles.icon} onClick={() => props.updateUser()} src="/assets/check.png" alt="" />}
                {edit && <img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/cancel.png" alt="" />}
                {!edit && <img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/edit.png" alt="" />}
                {!edit && <img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/delete.png" alt="" />}
            </td>
        </tr>
    )
}

const mapDispatchToProps = {
    updateUser: usersActions.updateUser
}

export default connect(null, mapDispatchToProps)(TableData)