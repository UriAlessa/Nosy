import styles from "../styles/game/statisticGame.module.css";
import { connect } from "react-redux";


const StatisticGame = (props)=>{
    console.log(props.game)
    console.log(props.statisticsUser)
    console.log(props.game.player)
    let percent=Math.round(props.statisticsUser.statistics.single_player.win_pct)
    console.log(percent)

  let img = props.game.lifes===0 ? "/assets/gameover1.png" : "/assets/winner.png"

    return(
        <div className={styles.container}>
          
          <img className={styles.gameover} src={img} alt="gameOver"/>
          <div className={styles.containerStatistics}>
              <div className={styles.srcUser}  style={props.statisticsUser&&{ backgroundImage: `url("${props.statisticsUser.avatar}")` }}></div>
              <div className={styles.box1}>
                <div className={styles.boxStatisticGame}>
                <p>PERFORMANCE</p>
                  <div className={styles.containerCoinMedalsQuestions}>
                    <div className={styles.containerCoin}>
                        <img src="/assets/coin.png" alt="coinSpent"/>
                        <p>{props.game.player.coins_spent}</p>
                    </div>
                    <div className={styles.containerMedal}>
                        <img src="/assets/nosy.png" alt="nosy"/>
                        <p>{props.game.player.medals.length}</p>
                    </div>
                    <div className={styles.containerPower}>
                        <img src="/assets/punch.png" alt="nosy"/>
                        <p>{props.game.player.powers_used}</p>
                    </div>
                  </div>
                  <p>Total questions:{" "+props.game.player.questions.length}</p>
                </div>
                <div className={styles.boxStatisticUser}>
                  <p>STATISTICS</p>
                  <p>Losses: {" "+props.statisticsUser.statistics.single_player.losses}</p>
                  <p>Wins: {" "+props.statisticsUser.statistics.single_player.wins}</p>
                  <div className={styles.progress}>
                    <p>Progress:</p>
                    <div className={styles.barra}>
                        <div className={styles.barrita} style={{ width: `${percent}px`}} ></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
         
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      game: state.game.game,
      statisticsUser:state.game.statisticsUser,
    };
  };

export default connect(mapStateToProps)(StatisticGame);