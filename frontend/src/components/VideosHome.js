import styles from "../styles/home/videos.module.css";

const VideosHome = () => {
    return (
        <section className={styles.videosHome}>
            <h2>ABOUT NOSY</h2>
            <div>
                <div>
                    <iframe src="https://www.youtube.com/embed/STdrVAYf5wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe src="https://www.youtube.com/embed/STdrVAYf5wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default VideosHome