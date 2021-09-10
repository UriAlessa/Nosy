import styles from "../../styles/users.module.css";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import usersActions from "../../redux/actions/admin/adminUserActions";
import UserCard from "./UserCard";
import { toast } from "react-hot-toast";


const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([])
    const [reload, setReload] = useState(false)
    const [newUser, setNewUser] = useState({})
    const usernameInput = useRef()
    const passwordInput = useRef()
    const emailInput = useRef()
    const avatarInput = useRef()


    const getUsers = async () => {
        try {
            let response = await props.getUsers();
            if (response.data.success) {
                setUsers(response.data.response);
                setFiltered(response.data.response)
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const inputHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const createUser = async () => {
        usernameInput.current.value = ""
        passwordInput.current.value = ""
        emailInput.current.value = ""
        avatarInput.current.value = ""
        try {
            let response = await props.createUser(newUser)
            if (response.success) {
                toast.success("User Created Successfully", {
                    position: "top-left",
                    style: {
                        borderRadius: "10px",
                        background: "#453ab7",
                        color: "#fff",
                        fontFamily: "Ubuntu, sans-serif",
                        height: "10vh"
                    },
                });
            } else {
                throw new Error()
            }
        } catch (error) {
            toast.error("Something went wrong. Try again Later", {
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

    useEffect(() => {
        if (!users.length) {
            getUsers()
        }
        // eslint-disable-next-line
    }, [])

    const filter = (e) => {
        setFiltered(users.filter((user) => user.username.startsWith(e.target.value)))
    }

    return (
        <div className={styles.tableContainer}>
            <div className={styles.cardsContainer}>
                <input className={styles.filterInput} type="text" onChange={filter} placeholder="Filter by username" />
                {filtered.map((user) => <UserCard user={user} key={user._id} setReload={setReload} reload={reload} />)}
            </div>
            <div className={styles.loginBox}>
                <p>Create Admin User</p>
                <form>
                    <div className={styles.userBox}>
                        <input ref={usernameInput} name="username" type="text" placeholder="Username" onClick={inputHandler} />
                    </div>
                    <div className={styles.userBox}>
                        <input ref={passwordInput} name="password" type="password" placeholder="Password" onClick={inputHandler} />
                    </div>
                    <div className={styles.userBox}>
                        <input ref={emailInput} name="email" type="email" placeholder="Email" onClick={inputHandler} />
                    </div>
                    <div className={styles.userBox}>
                        <input ref={avatarInput} name="avatar" type="text" placeholder="Image Url" onClick={inputHandler} />
                    </div>
                    <span className={styles.linkButton} onClick={createUser}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Create User
                    </span>
                </form>
            </div>

        </div>
    );
};

const mapDispatchToProps = {
    getUsers: usersActions.getUsers,
    createUser: usersActions.createUser,
};

export default connect(null, mapDispatchToProps)(Users);
