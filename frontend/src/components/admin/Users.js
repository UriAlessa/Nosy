import { useState } from "react"
import { connect } from "react-redux"
import usersActions from "../../redux/actions/usersActions"

const Users = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            let response = await props.getUsers()
            if (response.data.response) {
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
    })

    return (
        <div>
            <ul>
                {users.map((user) => {
                    <li>{user.name}</li>
                })}
            </ul>
        </div>

    )
}

const mapDispatchToProps = {
    getUsers: usersActions.getUsers
}

export default connect(null, mapDispatchToProps)(Users)