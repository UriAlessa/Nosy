import styles from "../styles/questionCard.module.css";
import { connect } from 'react-redux';
import questionActions from '../redux/actions/questionsActions'

const QuestionCard =(props)=>{

/* const {question, possibleAnswers, correctAnswer }= props.question */

const array=["opcion 1", "opcion 2", "opcion 3", "opcion 4"]

    const clickHandler=(e)=>{
       
        if(e.target.name=== "opcion 1"){
            e.target.style.background="green"

        }else{
            e.target.style.background="red"
        }
    }

    /* const clickHandler=(e)=>{
        if(props.nombre.correctAnswer===e.target.name){
            console.log("acerto")
            e.target.style.background="green"  
            props.renderRoulette() */
       /*  }else{
            e.target.style.background="red"
            console.log("perdio")   */
            /* props.AccionDeQuitarUnaVida */
            /* Se le resta una vida */
            /*  Volver a renderizar la ruleta */
       /*      
        }
    
    }  */

    return(
        <section className={styles.sectionQuestion}  style={{backgroundImage: "url('/assets/background.png')"}}>
        
            <article className={styles.card}>
                <div className={styles.containerLogo}>
                    <img className={styles.logo} src="/assets/logoSoloLetras.png"/>
                    <h3>Aca iria la pregunta que viene por props</h3>
                </div>
                
                <div className={styles.containerButtons}>                    
                {
                    array.map((string, index)=>{
                        return(
                            <button key={index} className={styles.buttonOption} name={string} onClick={clickHandler} >{string}</button>
                        )
                    })
                }                    
                </div>
                
            </article> 
                    
                        
                    
                
            {/* <div className={styles.card}>
                <h3>{question}</h3>
                <div>
                    
                    possibleAnswers.map(answer=>{
                        <button id={index} onClick={clickHandler} name="{answer}">{answer}</button>
                    })
                    
                    
                </div>
                
            </div>  */}
        </section>
    )
}

export default QuestionCard 
/* const mapDispatchToProps ={
    renderRoulette : questionActions.rouletteRender
}

export default connect(null,mapDispatchToProps)(QuestionCard) */