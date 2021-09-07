import React from 'react'
import styles from '../styles/accounts.module.css'
import { SocialMediaHeroButton } from '../components/Buttons'
import { useState } from 'react'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const SignUp = (props) => {
    const [newUser, setNewUser] = useState({
        username: '', password: '', email: '', avatar: ''
    })

    const inputHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const submitButton = async () => {
        const {username, password, email, avatar } = newUser
        if (username === '' || password === '' || email === '' || avatar === '') {
            return alert('Empty fields')
        }
        let response = await props.signUpUser(newUser)
        if (response.data.success) {
            alert('Welcome!')
        }
    }

    return (
        <div className={styles.signup}>
            <h1>Create Account</h1>
            <div className={styles.socialMediaLogin}>
                <SocialMediaHeroButton icon="facebook" />
                <SocialMediaHeroButton icon="google" />
            </div>
            <p>or use your email for registration</p>
            <div className={styles.inputContainer}>
                <input className={styles.inputForm} onChange={inputHandler} name='username' type='text' placeholder='Choose your username' />
                <input className={styles.inputForm} onChange={inputHandler} name='password' type='password' placeholder='Password' />
                <input className={styles.inputForm} onChange={inputHandler} name='email' type='email' placeholder='Email' />
                <input className={styles.inputForm} onChange={inputHandler} name='avatar' type='text' placeholder='URL avatar' />
            </div>
            <button onClick={submitButton} className={styles.playButton}>
                <svg className={styles.buttonPlayButton} xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 163.861 163.861">
                    <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
                </svg>
                <strong>
                    SIGN UP
                </strong>
            </button>
        </div>
    )
}

const mapDispatchToProps = {
    signUpUser: usersActions.signUpUser
}

export default connect(null, mapDispatchToProps)(SignUp)