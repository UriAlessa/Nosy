import styles from '../../styles/users.module.css'
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import usersActions from "../../redux/actions/usersActions"
import TableData from './TableData'

const Users = (props) => {
    const [users, setUsers] = useState([])
    const [edit, setEdit] = useState(false)

    const getUsers = async () => {
        try {
            let response = await props.getUsers()
            if (response.data.success) {
                setUsers(response.data.response)
            } else {
                throw new Error()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Coins</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <TableData key={user._id} user={user} />)}
                </tbody>

            </table>
        </div>

    )
}

const mapDispatchToProps = {
    getUsers: usersActions.getUsers
}

export default connect(null, mapDispatchToProps)(Users)