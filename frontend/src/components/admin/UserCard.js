import styles from '../../styles/usercard.module.css'
import { useState } from 'react'
import { connect } from 'react-redux'
import { toast } from "react-hot-toast";
import adminUsersActions from '../../redux/actions/admin/adminUserActions'
const Swal = require("sweetalert2");


const UserCard = (props) => {
    const { username, email, avatar, coins, _id, connected, statistics, admin } = props.user
    const [viewMore, setViewMore] = useState(false)
    const [edit, setEdit] = useState(false)
    const [updated, setUpdated] = useState({})

    console.log(connected)

    const updateUser = async () => {
        setEdit(!edit)
        try {
            let response = await props.updateUser(updated)
            if (response.success) {
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
            toast.error("Something went wrong.", {
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
    }

    const deleteUser = async (id) => {
        try {
            props.deleteUser(id)
        } catch (error) {
            toast.error("Something went wrong.", {
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
    }

    const verification = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete this user?",
            text: "This action can not be undone!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
            background: "#302C83",
        }).then((result) => {
            if (result.value) {
                toast.promise(deleteUser(id), {
                    loading: " Deleting user...",
                    success: <b>User deleted.</b>,
                    error: <b>Something went wrong</b>,
                });
            }
        });
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
                            <h4>Singleplayer Games</h4>
                            <p>Total Games: {statistics.single_player.total || null}</p>
                            <p>Won Games: {statistics.single_player.wins || null}</p>
                            <p>Lost Games: {statistics.single_player.losses || null}</p>
                            <p>Win Percentage: {statistics.single_player.win_pct || null}</p>
                        </div>
                            <div className={styles.multiplayer}>
                                <h4>Multiplayer Games</h4>
                                <p>Total Games: {statistics.multi_player.total || null}</p>
                                <p>Won Games: {statistics.multi_player.wins || null}</p>
                                <p>Lost Games: {statistics.multi_player.losses || null}</p>
                                <p>Win Percentage: {statistics.multi_player.win_pct || null}</p>
                            </div>
                        </>
                            : <p style={{ color: 'black' }}>No hay estadísticas</p>}
                    </div>
                    <div className={styles.buttonsContainer}>
                        {edit && (<svg onClick={() => setEdit(!edit)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-x-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>)}
                        {edit && (<svg onClick={updateUser} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                        </svg>)}
                        {!edit && (<svg onClick={() => setEdit(!edit)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>)}
                        {!edit && (<svg onClick={() => verification(_id)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>)}
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