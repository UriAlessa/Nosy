import styles from "../styles/roulette.module.css";

const Roulette = (props) => {
    return (
        <div className={styles.rouletteContainer}>
            <svg className={styles.indicator} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
            <img
                ref={props.roulette}
                onClick={() => {
                    !props.playing && props.rotate();
                }}
                alt="roulette"
                className={styles.roulette}
                src="https://i.postimg.cc/T3xMKZTV/ruletacon-Colores.png"
            />
            
        </div>
    );
};

export default Roulette;
