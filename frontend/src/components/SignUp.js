import React from 'react'
import styles from '../styles/accounts.module.css'
import { PlayButton, SocialMediaHeroButton } from '../components/Buttons'

const SignUp = () => {
    return (
        <div className={styles.signup}>
            <h1>Create Account</h1>
            <div className={styles.socialMediaLogin}>
                <SocialMediaHeroButton icon="facebook" />
                <SocialMediaHeroButton icon="google" />
            </div>
            <p>or use your email for registration</p>
            <div className={styles.inputContainer}>
                <input className={styles.inputForm} type='text' placeholder='Choose your username' />
                <input className={styles.inputForm} type='email' placeholder='Email' />
                <input className={styles.inputForm} type='password' placeholder='Password' />
                <input className={styles.inputForm} type='text' placeholder='URL avatar' />
            </div>
            <PlayButton text='SIGN UP' />
        </div>
    )
}

export default SignUp
