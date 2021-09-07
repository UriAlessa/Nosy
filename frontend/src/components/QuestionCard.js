import styles from "../styles/questionCard.module.css";
import { connect } from 'react-redux';
import questionActions from '../redux/actions/questionsActions'

const QuestionCard = (props) => {

    const { question, possibleAnswers, correctAnswer } = props.question

    let questionAudio = new Audio('/assets/question.wav')
    questionAudio.play()

    const clickHandler = (e) => {
        if (correctAnswer === e.target.name) {
            e.target.style.background = "#43b14b"
            e.target.style.borderBottom = "5px solid rgb(13, 70, 13)"
            // props.renderRoulette()
            setTimeout(() => {
                props.setQuestion(null)
            }, 1500)
        } else {
            e.target.style.background = "#cb5b3b"
            e.target.style.borderBottom = "5px solid rgb(124, 19, 19)"
            console.log("perdio")
        }
    }
    /* props.AccionDeQuitarUnaVida */
    /* Se le resta una vida */
    /*  Volver a renderizar la ruleta */

    return (
        <section className={styles.sectionQuestion} >

            <article className={styles.card}>
                <div className={styles.containerLogo}>
                    <img className={styles.logo} src="/assets/logoSoloLetras.png" />
                    <h3>{question}</h3>
                </div>

                <div className={styles.containerButtons}>
                    {
                        possibleAnswers.sort(() => Math.random() - 0.5).map((string, index) => {
                            return (
                                <button key={index} className={styles.buttonOption} name={string} onClick={clickHandler} >{string}</button>
                            )
                        })
                    }
                </div>

            </article>
        </section >



        // <div className={styles.card}>
        //     <h3>{question}</h3>
        //     <div>

        //         {possibleAnswers.map(answer => {
        //             <button id={index} onClick={clickHandler} name="{answer}">{answer}</button>
        //         })}


        //     </div>

        // </div>

    )
}

const mapDispatchToProps = {
    renderRoulette: questionActions.rouletteRender
}

export default connect(null, mapDispatchToProps)(QuestionCard)