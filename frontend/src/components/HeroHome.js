import { PlayButton, SocialMediaHeroButton } from '../components/Buttons'
import style from '../styles/heroHome.module.css'


const HeroHome = () => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>PLAYING IS MORE FUN IF YOU AREN'T ALONE!</h2>
            <p>The well-known wonder game comes to your hands! so that you entertain moments, awaken your mind and learn by playing.</p>
            <div className={style.buttons}>
                <PlayButton text="PLAY NOW"/>
                <p>or access with:</p>
                <div className={style.socialMedia}>
                    <SocialMediaHeroButton icon="facebook"/>
                    <SocialMediaHeroButton icon="twitter"/>
                    <SocialMediaHeroButton icon="google"/>
                </div>
            </div>
        </div>
    )
}

export {HeroHome}