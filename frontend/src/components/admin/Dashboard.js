import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from '../../styles/users.module.css'
import styles from '../../styles/questions.module.css'
import { connect } from 'react-redux'
import { useEffect } from "react";
let moment = require("moment");

const Dashboard = (props) => {

    useEffect(() => {

    }, [props.reviews])
    console.log(props.reviews)

    return (
        <div className={style.tableContainer}>
            <div className={`${style.cardsContainer} ${styles.resumeContainer}`}>
                <div className={styles.resumeSection}>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024,
                                },
                                items: 1,
                                partialVisibilityGutter: 40,
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0,
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464,
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                            },
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {props.reviews.map((review) => {
                            return (
                                <div>hola</div>
                            )
                        })}
                    </Carousel>

                </div>
                <div className={`${styles.questionsContainer} ${styles.reviews}`}>
                </div>
            </div>
            <div className={`${style.loginBox} ${style.connected}`} style={{ height: '90%' }}>
                <p>Online Users ({props.users.filter((user) => user.connected === true).length})</p>
                {props.users.map((user) => {
                    if (user.connected) {
                        return (
                            <div className={style.connectedUser} key={user._id}>
                                <div style={{ backgroundImage: `url('${user.avatar}')` }} className={style.userAvatar}></div>
                                <div className={style.dataUser}>
                                    <span>Username: {user.username}</span>
                                    <span>Coins: {user.coins}</span>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.adminUsers.users,
    }
}
export default connect(mapStateToProps)(Dashboard)

// <div className={styles.reviewContainer}>
// <div className={styles.reviewPic} style={{ backgroundImage: `url("${review.img}}")` }}></div>
// <div>hola</div>
// </div>