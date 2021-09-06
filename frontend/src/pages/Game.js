import styles from '../styles/game.module.css'
import Roulette from '../components/Roulette'
import { useState } from 'react'

const Game = () => {
    const [roulette, setRoulette] = useState(true)
    return (
        <main className={styles.gameContainer} style={{ backgroundImage: "url('/assets/background.png')" }}>
            <div className={styles.renderGame}>
                {roulette ? <Roulette /> : <QuestionCard />}
            </div>
        </main>
    )
}

export default Game