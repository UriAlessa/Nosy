import styles from '../styles/footer.module.css'

// Queda pendiente por parte del equipo de diseño; iconos de redes sociales debajo del Nav.

const Footer = () => {
    return (
        <footer>
            <div className={styles.content}>
                <div className={styles.footerLogo} style={{backgroundImage: `url('https://stopots.com/assets/logo2.svg')`, height: '100px', width: '100px'}}></div>
                <div className={styles.navContainer}>
                    <nav className={styles.footerNav}>
                        <p>TERMS OF SERVICE</p>
                        <p>PRIVACY</p>
                        <p>ASSETS</p>
                    </nav>
                </div>
                <img src='https://stopots.com/images/hotsite/onrizon.svg' />
            </div>
        </footer>
    )
}

export default Footer
