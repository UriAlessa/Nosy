import styles from '../styles/header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <img src='https://stopots.com/assets/logo1.svg' />
                    <div>
                        <nav className={styles.headerNav}>
                            <p>HOW IT WORKS?</p>
                            <p>WHAT'S NEXT?</p>
                            <p>WHAT ARE THEY SAYING?</p>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header