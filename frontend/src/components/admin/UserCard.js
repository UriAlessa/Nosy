import styles from '../../styles/usercard.module.css'
import { useState } from 'react'
import { connect } from 'react-redux'
import { toast } from "react-hot-toast";
import adminUsersActions from '../../redux/actions/admin/adminUserActions'

const UserCard = (props) => {
    const { username, email, avatar, coins, _id, connected, statistics, admin } = props.user
    const [viewMore, setViewMore] = useState(false)
    const [edit, setEdit] = useState(false)
    const [updated, setUpdated] = useState({})

    const updateUser = async () => {
        try {
            let response = await props.updateUser(updated)
            if (response.success) {
                setEdit(!edit)
                toast.success("Changes Saved Successfully", {
                    position: "top-left",
                    style: {
                        borderRadius: "10px",
                        background: "#453ab7",
                        color: "#fff",
                        fontFamily: "Ubuntu, sans-serif",
                        height: "10vh"
                    },
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async (id) => {
        try {
            let response = await props.deleteUser(id)
            console.log(response)
            if (response.success) {
                toast.success("User deleted.", {
                    position: "top-left",
                    style: {
                        borderRadius: "10px",
                        background: "#453ab7",
                        color: "#fff",
                        fontFamily: "Ubuntu, sans-serif",
                        height: "10vh"
                    },
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    const inputHandler = (e) => {
        setUpdated({
            ...updated,
            id: _id,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <article className={styles.userCard}>
                <div className={styles.userInfo}>
                    <div className={styles.userAvatar} style={{ backgroundImage: `url('${avatar}')` }}></div>
                    <div style={{ width: '25%' }}>
                        <h4>Username</h4>
                        <p>{username}</p>
                    </div>
                    <div style={{ flex: '1' }}>
                        <h4>Email</h4>
                        <p>{email}</p>
                    </div>
                    <div className={styles.divConnect} style={{ width: '20%' }}>
                        <p>Connected</p>
                        <img className={styles.connected} src={connected ? '/assets/online.png' : '/assets/offline.png'} alt="" />
                    </div>
                </div>
                <div className={styles.buttonSection}>
                    <img src='/assets/options.png' alt='' onClick={() => setViewMore(!viewMore)} />
                </div>
            </article>
            {viewMore &&
                <div className={styles.userDetails}>
                    <div className={styles.userData}>
                        <label htmlFor='admin'>User Rol</label>
                        <input name='admin' defaultValue={admin.flag ? 'Admin' : 'Registered'} disabled />
                        <label htmlFor='avatar'>Image Url</label>
                        <input name='avatar' defaultValue={avatar} onChange={inputHandler} disabled={edit ? false : true} />
                        <label htmlFor='username'>Username</label>
                        <input name='username' defaultValue={username} onChange={inputHandler} disabled={edit ? false : true} />
                        <label htmlFor='email'>Email</label>
                        <input name='email' defaultValue={email} onChange={inputHandler} disabled={edit ? false : true} />
                        <label htmlFor='coins'>Coins</label>
                        <input name='coins' defaultValue={coins} onChange={inputHandler} disabled={edit ? false : true} />
                    </div>
                    <div className={styles.statistics}>
                        {statistics ? <><div className={styles.singleplayer}>
                            <p>Total Games: {statistics.single_player.total || null}</p>
                            <p>Won Games: {statistics.single_player.wins || null}</p>
                            <p>Lost Games: {statistics.single_player.losses || null}</p>
                            <p>Win Percentage: {statistics.single_player.win_pct || null}</p>
                        </div>
                            <div className={styles.multiplayer}>
                                <p>Total Games: {statistics.multi_player.total || null}</p>
                                <p>Won Games: {statistics.multi_player.wins || null}</p>
                                <p>Lost Games: {statistics.multi_player.losses || null}</p>
                                <p>Win Percentage: {statistics.multi_player.win_pct || null}</p>
                            </div>
                        </>
                            : <p style={{ color: 'black' }}>No hay estadísticas</p>}
                    </div>
                    <div className={styles.buttonsContainer}>
                        {edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/cancel.png" alt="" />)}
                        {edit && (<img className={styles.icon} onClick={updateUser} src="/assets/check.png" alt="" />)}
                        {!edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/edit.png" alt="" />)}
                        {!edit && (<img className={styles.icon} onClick={() => deleteUser(_id)} src="/assets/delete.png" alt="" />)}
                    </div>
                </div>
            }
        </>
    )
}

const mapDispatchToProps = {
    updateUser: adminUsersActions.updateUser,
    deleteUser: adminUsersActions.deleteUser
}

export default connect(null, mapDispatchToProps)(UserCard)