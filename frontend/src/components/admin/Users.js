import styles from "../../styles/users.module.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import usersActions from "../../redux/actions/admin/adminUserActions";
import UserCard from "./UserCard";

const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([])
    const [search, setSearch] = useState("")
    const [reload, setReload] = useState(false)

    // useEffect(() => {

    // }, [reload])

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

    const filter = (e) => {
        setSearch(e.target.value)
        setFiltered(users.filter((user) => user.username.startsWith(e.target.value)))
    }

    return (
        <div className={styles.tableContainer}>
            <div className={styles.buttonSection}>
                <button className={styles.buttonUser}>Add User</button>
                <button className={styles.buttonUser} onClick={getUsers}>View Users</button>
            </div>
            <input className={styles.filterContainer}  type="text" onChange={filter} placeholder="Filter by username" />
            <div className={styles.loginBox}>
                <p>Enter data</p>
                <form>
                        <div className={styles.userBox}>
                            <input type="text" placeholder="username"/>
            </div>
            <div className={styles.userBox}>
                <input type="password"  placeholder="password"/>
            </div>
            <div className={styles.userBox}>
                <input type="email" placeholder="email"/>
            </div>
            <div className={styles.userBox}>
                <input type="text" placeholder="url"/>
            </div>
                <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add User
                </a>
                </form>
</div>
            <div className={styles.cardsContainer}>
                {filtered.map((user) => <UserCard user={user} key={user._id} setReload={setReload} reload={reload} />)}
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    getUsers: usersActions.getUsers
};

export default connect(null, mapDispatchToProps)(Users);
