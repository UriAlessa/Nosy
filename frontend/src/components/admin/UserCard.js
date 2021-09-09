import styles from '../../styles/usercard.module.css'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
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

    return (
        <>
            <article className={styles.userCard}>
                <div className={styles.userInfo}>
                    <div className={styles.userAvatar} style={{ backgroundImage: `url('${avatar}')` }}></div>
                    <div style={{ width: '25%' }}>
                        <h4>Username</h4>
                        <h3>{username}</h3>
                    </div>
                    <div style={{ flex: '1' }}>
                        <h4>Email</h4>
                        <h3>{email}</h3>
                    </div>
                    <div style={{ width: '20%' }}>
                        <h4>Connected</h4>
                        <img className={styles.connected} src={connected ? '/assets/online.png' : '/assets/offline.png'} />
                    </div>
                </div>
                <div className={styles.buttonSection}>
                    <img src='/assets/options.png' alt='' onClick={() => setViewMore(!viewMore)} />
                    {/* <button onClick={() => setViewMore(!viewMore)}>{viewMore ? 'View Less' : 'View More'}</button>
                    {edit && (<img className={styles.icon} onClick={updateUser} src="/assets/check.png" alt="" />)}
                    {edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/cancel.png" alt="" />)}
                    {!edit && (<img className={styles.icon} onClick={() => setEdit(!edit)} src="/assets/edit.png" alt="" />)}
                    {!edit && (<img className={styles.icon} onClick={deleteUser} src="/assets/delete.png" alt="" />)} */}
                </div>
            </article>
            {viewMore &&
                <div className={styles.userDetails}>
                    <div className={styles.userData}>
                        <label htmlFor='admin'>User Rol</label>
                        <input name='admin' defaultValue={admin.flag ? 'Admin' : 'Registered'} disabled />
                        <label htmlFor='username'>Username</label>
                        <input name='username' defaultValue={username} />
                        <label htmlFor='email'>Email</label>
                        <input name='email' defaultValue={email} />
                        <label htmlFor='coins'>Coins</label>
                        <input name='coins' defaultValue={coins} />
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
                </div>
            }
        </>
    )
}

const mapDispatchToProps = {
    updateUser: adminUsersActions.updateUser
}

export default connect(null, mapDispatchToProps)(UserCard)