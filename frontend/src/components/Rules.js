import styles from "../styles/rules.module.css"
import RuleCard from "../components/RuleCard"

const Rules = ()=>{
  const InfoCards=[
        {
            src: "/assets/color-wheel.png",
            title:"Take the decision",
            description:"Start as anonymous or with your name so we know where to look for you 😄 Choose the category in which you want to get a doctorate and hit  PLAY on the game!"
        },
        ,
        {
            src: "/assets/coin.png",
            title:"Start running",
            description:"If you are anonymous your race is against time and if you are playing with others, the race is between each other. Press the * HAND * or enter button when you have typed the answer."
        },
        {
            src: "/assets/debate.png",
            title:"Reward or punishment",
            description:"It depends on your answers you will receive a prize and a place on the podium or a lot of shame for you…! Now ... if you are a bad loser, close the tab, delete the history and look for an alibi that explains these lost hours!"
        }
    ]

    const render=InfoCards.map(info=>{
        return(
            <RuleCard infoCard={info}/>
        )
        
    })

    return(
        <section id="howToPlay" className={styles.section}>
            <h2> HOW TO PLAY THE GAME?</h2>
             <p> SEE HOW IT'S SIMPLE!</p>
            <div className={styles.containerCards}>
                {render}
            </div>
        </section>
    )
}
export default Rules