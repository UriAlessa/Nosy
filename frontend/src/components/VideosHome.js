import styles from "../styles/home/videos.module.css";

const VideosHome = () => {
    return (
        <section className={styles.videosHome}>
            {/* <h2>ABOUT NOSY</h2> */}
            <div>
                <div>
                    <h3>HOW TO PLAY</h3>
                    <video></video>
                </div>
                <div>
                    <h3>CATEGORIES</h3>
                    <video></video>
                </div>
            </div>
        </section>
    )
}

export default VideosHome