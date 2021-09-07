import styles from '../styles/roulette.module.css'
import { useState, useRef, useEffect } from 'react'

const Roulette = (props) => {
    const roulette = useRef()
    const [playing, setPlaying] = useState(false)

    let audio = new Audio('/assets/roulette.mp3')

    const selectCategory = (rand) => {
        let degrees = rand / 360;
        degrees = (degrees - parseInt(degrees.toString().split(".")[0])) * 360
        roulette.current.style.transform = "rotate(" + rand + "deg)"
        let portion = 360 / 7
        switch (true) {
            case degrees > 0 && degrees <= portion:
                props.category('Animals')
                break;
            case degrees > portion && degrees <= 2 * portion:
                props.category('Music')
                break;
            case degrees > 2 * portion && degrees <= 3 * portion:
                props.category('General Knowledge')
                break;
            case degrees > 3 * portion && degrees <= 4 * portion:
                props.category('Random')
                break
            case degrees > 4 * portion && degrees <= 5 * portion:
                props.category('Movies and series')
                break;
            case degrees > 5 * portion && degrees <= 6 * portion:
                props.category('Science: Computers')
                break;
            case degrees > 6 * portion && degrees <= 360:
                props.category('Animals')
                break;
        }
    }

    const rotate = () => {
        setPlaying(!playing)
        audio.play()
        let randNum
        do {
            randNum = Math.random()
        } while (randNum <= 0.9 || randNum >= 0.92)
        let rand = Math.random() * 7200;
        selectCategory(rand)

    }

    return (
        <div className={styles.rouletteContainer}>
            <img ref={roulette} onClick={() => { !playing && rotate() }} className={styles.roulette} src='https://i.postimg.cc/ZKC2w539/ruleta2.png' />
        </div>
    )
}

export default Roulette



// const ruleta = document.querySelector('#ruleta');

// ruleta.addEventListener('click', girar);
// giros = 0;
// function girar() {
//     if (giros < 3) {
//         let rand = Math.random() * 7200;
//         calcular(rand);
//         giros++;
//         var sonido = document.querySelector('#audio');
//         sonido.setAttribute('src', 'sonido/ruleta.mp3');
//         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;
//     } else {
//         Swal.fire({
//             icon: 'success',
//             title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
//             confirmButtonColor: '#3085d6',
//             confirmButtonText: 'Aceptar',
//             allowOutsideClick: false
//         }).then((result) => {
//             if (result.value == true) {
//                 giros = 0;
//                 document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ';
//                 document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;
//             }
//         })
//     }

//     function premio(premios) {

//         document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ' + premios;

//     }

//     function calcular(rand) {

//         valor = rand / 360;
//         valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
//         ruleta.style.transform = "rotate(" + rand + "deg)";

//         setTimeout(() => {
//             switch (true) {
//                 case valor > 0 && valor <= 45:
//                     premio("2 estrellas");
//                     break;
//                 case valor > 45 && valor <= 90:
//                     premio("5 Piezas");
//                     break;
//                 case valor > 90 && valor <= 135:
//                     premio("2 Corazón");
//                     break;
//                 case valor > 135 && valor <= 180:
//                     premio("2 Nigiri");
//                     break;
//                 case valor > 180 && valor <= 225:
//                     premio("Handroll Mini");
//                     break;
//                 case valor > 225 && valor <= 270:
//                     premio("NO HAY CORTESIAS ESTA VEZ");
//                     break;
//                 case valor > 270 && valor <= 315:
//                     premio("Una Coca Cola de 2L");
//                     break;
//                 case valor > 315 && valor <= 360:
//                     premio("2 Enjoy");
//                     break;
//             }

//         }, 5000);

//     }
// }