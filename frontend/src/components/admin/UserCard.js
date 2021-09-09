import styles from '../../styles/usercard.module.css'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import adminUsersActions from '../../redux/actions/admin/adminUserActions'

const UserCard = (props) => {
    const { username, email, avatar, coins, _id } = props.user
    const [edit, setEdit] = useState(false)
    const [updated, setUpdated] = useState({})
    const [viewMore, setViewMore] = useState(false)

    console.log('me renderizo')
    const updateUser = async () => {
        try {
            let response = await props.updateUser(updated)
            if (response.success) {
                setEdit(!edit)
                props.setReload(!props.reload)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = () => {

    }

    const inputHandler = (e) => {
        setUpdated({
            ...updated,
            id: _id,
            [e.target.name]: e.target.value
        })
    }
    console.log(updated)
    return (
        <>
            <article className={styles.userCard}>
                <div className={styles.userInfo}>
                    <div className={styles.userAvatar} style={{ backgroundImage: `url('${avatar}')` }}></div>
                    {!edit ? <h2>{username}</h2> : <input name="username" onChange={inputHandler} defaultValue={username} />}
                    {/* {!edit ? <h3>{email}</h3> : <input defaultValue={email} />}*/}
                    {!edit ? <h4>{coins}</h4> : <input name="coins" onChange={inputHandler} defaultValue={coins} />}
                </div>
                <div className={styles.buttonSection}>
                    <img src='/assets/options.png' alt='' />
                    {/* <button onClick={() => setViewMore(!viewMore)}>{viewMore ? 'View Less' : 'View More'}</button>
                    {edit && (<img className={styles.icon} onClick={updateUser} src="/assets/check.png" alt="" />)}
                    {edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/cancel.png" alt="" />)}
                    {!edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/edit.png" alt="" />)}
                    {!edit && (<img className={styles.icon} onClick={deleteUser} src="/assets/delete.png" alt="" />)} */}
                </div>
            </article>
            <div>
                {viewMore && <h1>Hola</h1>}
            </div>
        </>
    )
}

const mapDispatchToProps = {
    updateUser: adminUsersActions.updateUser
}

export default connect(null, mapDispatchToProps)(UserCard)