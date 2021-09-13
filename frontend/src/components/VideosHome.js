import styles from "../styles/home/videos.module.css";

const VideosHome = () => {
    return (
        <section className={styles.videosHome}>
            <h2>ABOUT NOSY</h2>
            <div>
                <div>
                    <h3>HOW TO PLAY</h3>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pRWSVwGmuHo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </div>
                <div>
                    <h3>CATEGORIES</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/P31MmxNxjS8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default VideosHome