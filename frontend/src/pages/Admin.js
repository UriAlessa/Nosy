import { connect } from "react-redux"

const AdminPanel = () => {

    return (
        <>
            <h1>Hola</h1>
            <button>Obtener Usuarios</button>
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