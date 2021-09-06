import { NavLink } from 'react-router-dom'
import styles from '../styles/header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.logo} style={{ backgroundImage: 'url("https://stopots.com/assets/logo1.svg")' }}></div>
            <div className={styles.content}>
                <nav>
                    <a href="#howToPlay">HOW TO PLAY</a>
                    <a href="#nextGames">NEXT GAMES</a>
                    <a href="#reviews">REVIEWS</a>
                    <NavLink to='/accounts'>LOG IN/SIGN UP</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header