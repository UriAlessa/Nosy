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
                <button className={styles.button}>Add User</button>
                <button className={styles.button} onClick={getUsers}>View Users</button>
            </div>
            <div className={styles.filterContainer}>
                <input type="text" onChange={filter} placeholder="Filter by username" />
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
