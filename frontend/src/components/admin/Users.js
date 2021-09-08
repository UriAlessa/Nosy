import styles from "../../styles/users.module.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import usersActions from "../../redux/actions/usersActions";
import UserCard from "./UserCard";

const Users = (props) => {
    const [users, setUsers] = useState([]);
    // const [edit, setEdit] = useState(false)



    const getUsers = async () => {
        try {
            let response = await props.getUsers();
            if (response.data.success) {
                setUsers(response.data.response);
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line
    }, []);



    return (
        <div className={styles.cardsContainer}>
            {users.map((user) => <UserCard user={user} key={user._id} />)}
        </div>
    );
};

const mapDispatchToProps = {
    getUsers: usersActions.getUsers,
};

export default connect(null, mapDispatchToProps)(Users);
