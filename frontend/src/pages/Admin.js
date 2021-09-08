import { useState } from "react"
import { connect } from "react-redux"
import Users from "../components/admin/Users"
import Questions from "../components/admin/Questions"
import Games from "../components/admin/Games"

const AdminPanel = () => {
    const [view, setView] = useState(null)

    return (
        <>
            <h1>Hola</h1>
            <button onClick={() => setView('users')}>Users</button>
            <button onClick={() => setView('questions')}>Questions</button>
            <button onClick={() => setView('games')}>Games</button>
            {view === 'users' && <Users />}
            {view === 'questions' && <Questions />}
            {view === 'games' && <Games />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.users.token
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)