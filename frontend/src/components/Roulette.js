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
    let portion = 360 / 6;
    switch (true) {
      case degrees > 0 && degrees <= portion:
        setTimeout(() => {
          props.category("Animals");
        }, 5000)
        break;
      case degrees > portion && degrees <= 2 * portion:
        setTimeout(() => {
          props.category("Music");
        }, 5000)
        break;
      case degrees > 2 * portion && degrees <= 3 * portion:
        setTimeout(() => {
          props.category("General Knowledge");
        }, 5000)
        break;
      case degrees > 3 * portion && degrees <= 4 * portion:
        setTimeout(() => {
          props.category("Science: Computers");
        }, 5000)
        break;
      case degrees > 4 * portion && degrees <= 5 * portion:
        setTimeout(() => {
          props.category("Movies and series");
        }, 5000)
        break;
      case degrees > 5 * portion && degrees <= 6 * portion:
        setTimeout(() => {
          props.setNosy(true)
        }, 5000)
        // props.setNosy(true)
        break;
    }
  };
  const rotate = () => {
    setPlaying(!playing);
    audio.play();
    let rand = Math.random() * 360 + 3600;
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
