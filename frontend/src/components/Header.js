import styles from '../styles/header.module.css'
import { HeroHome } from './HeroHome'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <img src='https://cdn.discordapp.com/attachments/883719217290018827/883823758018744360/logoSoloLetras.png' alt='logo' />
                    <div>
                        <nav className={styles.headerNav}>
                            <p>HOW IT WORKS?</p>
                            <p>WHAT'S NEXT?</p>
                            <p>WHAT ARE THEY SAYING?</p>
                        </nav>
                    </div>
                </div>
                <div className={styles.middle}>
                    <HeroHome />
                </div>
                <div className={styles.pageDown}>
                    <span>SCROLL DOWN</span>
                </div>
            </div>
        </header>
    )
}

export default Header