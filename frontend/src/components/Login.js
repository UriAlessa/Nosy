import React from 'react'
import styles from '../styles/accounts.module.css'
import { PlayButton, SocialMediaHeroButton } from '../components/Buttons'

const Login = () => {

    return (
        <div className={styles.login}>
                <h1>Log In</h1>
                <div className={styles.inputContainer}>
                    <input className={styles.inputForm} placeholder='Username' />
                    <input className={styles.inputForm} type='password' placeholder='Password' />
                </div>
                <PlayButton text='LOG IN' />
                <p>Or</p>
                <div className={styles.socialMediaLogin}>
                    <SocialMediaHeroButton icon="facebook"/>
                    <SocialMediaHeroButton icon="google"/>
                </div>
        </div>
    )
}

export default Login
