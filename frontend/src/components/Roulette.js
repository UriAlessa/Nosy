import styles from "../styles/roulette.module.css";
import { useState, useRef } from "react";

const Roulette = (props) => {
  const roulette = useRef();
  const [playing, setPlaying] = useState(false);

  let audio = new Audio("/assets/roulette.mp3");

  const selectCategory = (rand) => {
    let degrees = rand / 360;
    degrees = (degrees - parseInt(degrees.toString().split(".")[0])) * 360;
    roulette.current.style.transform = "rotate(" + rand + "deg)";
    let portion = 360 / 7;
    switch (true) {
      case degrees > 0 && degrees <= portion:
        props.category("Animals");
        break;
      case degrees > portion && degrees <= 2 * portion:
        props.category("Music");
        break;
      case degrees > 2 * portion && degrees <= 3 * portion:
        props.category("General Knowledge");
        break;
      case degrees > 3 * portion && degrees <= 4 * portion:
        props.category("Random");
        break;
      case degrees > 4 * portion && degrees <= 5 * portion:
        props.category("Movies and series");
        break;
      case degrees > 5 * portion && degrees <= 6 * portion:
        props.category("Science: Computers");
        break;
      case degrees > 6 * portion && degrees <= 360:
        props.category("Animals");
        break;
      default:
        return false;
    }
  };
  const rotate = () => {
    setPlaying(!playing);
    audio.play();
    let randNum;
    do {
      randNum = Math.random();
    } while (randNum <= 0.9 || randNum >= 0.92);
    let rand = Math.random() * 360 + 7200;
    console.log(rand);
    selectCategory(rand);
  };

  return (
    <div className={styles.rouletteContainer}>
      <img
        ref={roulette}
        onClick={() => {
          !playing && rotate();
        }}
        className={styles.roulette}
        src="https://i.postimg.cc/wBrKKHKq/ruleta-Prueba1.png"
      />
    </div>
  );
};
export default Roulette;
