import styles from "../../styles/users.module.css";
import UserCard from "./UserCard";
import { useState, useRef } from "react";
import { connect } from "react-redux";
import { toast } from "react-hot-toast";
import adminUsersActions from "../../redux/actions/admin/adminUserActions";

const Users = (props) => {
    const [filtered, setFiltered] = useState(props.users)
    const [newUser, setNewUser] = useState({})
    const usernameInput = useRef()
    const passwordInput = useRef()
    const emailInput = useRef()
    const avatarInput = useRef()

    const reload = (id) => {
        setFiltered(filtered.filter((user) => {
            if (user._id !== id) {
                return user
            }
            return true
        }))
    }

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

    const filter = (e) => {
        setFiltered(props.users.filter((user) => user.username.startsWith(e.target.value)))
    }

    return (
        <div className={styles.tableContainer}>
            <div className={styles.cardsContainer}>
                <input className={styles.filterInput} type="text" onChange={filter} placeholder="Filter by username" />
                {filtered.map((user) => <UserCard user={user} key={user._id} reload={reload} />)}
            </div>
            <div className={styles.loginBox}>
                <p>Create Admin User</p>
                <form className={styles.userForm}>
                    <div className={styles.userBox}>
                        <input ref={usernameInput} name="username" type="text" placeholder="Username" onChange={inputHandler} />
                    </div>
                    <div className={styles.userBox}>
                        <input ref={passwordInput} name="password" type="password" placeholder="Password" onChange={inputHandler} />
                    </div>
                    <div className={styles.userBox}>
                        <input ref={emailInput} name="email" type="email" placeholder="Email" onChange={inputHandler} />
                    </div>
                    <div className={styles.userBox}>
                        <input ref={avatarInput} name="avatar" type="text" placeholder="Image Url" onChange={inputHandler} />
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

const mapStateToProps = (state) => {
    return {
        users: state.adminUsers.users
    }
}

const mapDispatchToProps = {
    createUser: adminUsersActions.createUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
