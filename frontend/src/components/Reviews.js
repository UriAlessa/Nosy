import styles from "../styles/reviews.module.css"
import ReviewSlide from "../components/ReviewSlide"
import RankingCard from '../components/RankingCard'

const Reviews = ()=>{

    const render=AllReviews.map(info=>{
        return(
            <ReviewSlide oneReview={info}/>
        )
        
    })


    const renderRate = '' /**prop del ranking general que se vaya alimentando constantemente */

    return(
        <section id="whatTheySaying" className={styles.section}>
            <h2> WHAT ARE THEY SAYING?</h2>
            <p> add your review!</p>
            <div className={styles.containerSection}>
                <div className={styles.columnSection}>
                    {render}
                </div>
                <div className={styles.columnSection}>
                    <RankingCard ranking={ranking}/>
                </div>
            </div>
        </section>
    )
}
export default Reviews



/**para Mongo*/
const AllReviews=[
    {
        src: "https://i.postimg.cc/Zq2ptpcd/12.png", /**picture del id del author */
        author:'@campamberton', /**nombre del id del author */
        date:'23/08/2021', /**reservar la fecha en que se hizo la review */
        generalRate:'', /**número que se transformará en estrellas del 1 al 5*/
        funnyRate:'', /**número que se transformará en icono de diversión del 1 al 5*/
        learningRate:'', /**número que se transformará en icono de aprehendizaje del 1 al 5*/
        interactiveRate:'',/**estos números deberían ir a parar al ranking general, pero ser tomados desde cada usuario */
        intuitiveRate:'',/**puntaje de cuán intuitivo le pareció al jugar por primera vez */
        title:"Amazing night with friends",
        description:"That night we didn't know what to do ... when one of my friends recommended Nosy to us. It was starting and spending the whole night playing with each other until dawn! I can't wait to repeat!"
    },
    ,
    // {
    //     src: "",
    //     author:'', /**nombre del id del author */
    //     date:'',
    //     generalRate:'', /**número que se transformará en estrellas del 1 al 5*/
    //     funnyRate:'', /**número que se transformará en icono de diversión del 1 al 5*/
    //     learningRate:'', /**número que se transformará en icono de aprehendizaje del 1 al 5*/
    //     title:"One of the top ten",
    //     description:"I was very bored that night, nothing would get me out of stillness, I didn't want to watch series and be passive in front of the screen. Then I found Nosy! and I spent hours playing and learning! I love it and recommend it!"
    // },
    // {
    //     src: "",
    //     author:'', /**nombre del id del author */
    //     date:'',
    //     generalRate:'', /**número que se transformará en estrellas del 1 al 5*/
    //     funnyRate:'', /**número que se transformará en icono de diversión del 1 al 5*/
    //     learningRate:'', /**número que se transformará en icono de aprehendizaje del 1 al 5*/
    //     title:"I went to try and today I am a fan",
    //     description:"I had been told about this website but I did not know how interactive, intuitive and fun it was! It's been a month since I joined and I have a good place in the ranking, I think that says it all!"
    // }
]

const ranking = {
    generalRate:4,
    funnyRate:5,
    learningRate:4,
    interactiveRate:3,
    intuitiveRate:5
}