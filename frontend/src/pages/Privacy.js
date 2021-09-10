import { useEffect, useState } from 'react'
import styles from '../styles/otherpages/terms.module.css'
import Header from "../components/Header"
import Footer from "../components/Footer"

const Privacy = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    document.title = 'Privacy | Nosy'

    const [items, setItems] = useState({
        one: false, two: false, three: false, four: false, five: false, six: false, seven: false
    })

    const showOne = () => {
        if (!items.one) {
            setItems({
                ...items,
                one: true
            })
        } else {
            setItems({
                ...items,
                one: false
            })
        }
        console.log(items)
    }

    const showTwo = () => {
        if (!items.two) {
            setItems({
                ...items,
                two: true
            })
        } else {
            setItems({
                ...items,
                two: false
            })
        }
    }
    const showThree = () => {
        if (!items.three) {
            setItems({
                ...items,
                three: true
            })
        } else {
            setItems({
                ...items,
                three: false
            })
        }
    }
    const showFour = () => {
        if (!items.four) {
            setItems({
                ...items,
                four: true
            })
        } else {
            setItems({
                ...items,
                four: false
            })
        }
    }
    const showFive = () => {
        if (!items.five) {
            setItems({
                ...items,
                five: true
            })
        } else {
            setItems({
                ...items,
                five: false
            })
        }
    }
    const showSix = () => {
        if (!items.six) {
            setItems({
                ...items,
                six: true
            })
        } else {
            setItems({
                ...items,
                six: false
            })
        }
    }
    const showSeven = () => {
        if (!items.seven) {
            setItems({
                ...items,
                seven: true
            })
        } else {
            setItems({
                ...items,
                seven: false
            })
        }
    }

    return (
        <>
            <div className={styles.container}>
                <Header />
                <h1>Privacy Policy</h1>
                <dl>
                    <dd>
                        <div className={styles.title} onClick={showOne}>
                            <svg className={items.one ? styles.roteDown : styles.roteUp} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                            <h5 onClick={showOne}>1. Privacy Policy</h5>
                        </div>
                        {items.one && <span>
                            <p>In this Privacy Policy "data" means any data about you that can identify you (alone or in combination with other data) such as your name, photo and nickname.</p>
                            <p>We may collect personal data through a third-party account such as Facebook, Google and Twitter - we exclusively collect your name, user ID and photo. If you do not authorize the collection of such data you are forbid to use this feature, you will need to play anonymously.</p>
                            <p>Data we may collect when you use our Service anonymously or with a previously reported third-party account:</p>
                            <p>Data on your location, device type, operating system, and platform;</p>
                            <p>Data on your computer's browser version, operating system version, page load time, network, generated device identified information, unique browser id, reference source, and IP address;</p>
                            <p>Profile photos;</p>
                            <p>The number of times you visit our Services and the amount of time you spend using the Services.</p>
                            <p>We may use your data in the following ways:</p>
                            <p>To ensure that you are in compliance with our terms;</p>
                            <p>Moderate your actions in public and customized rooms;</p>
                            <p>To improve the Services for analysis and reporting purposes, and to provide technical support, or to answer your questions. This also includes use of data to record any failure in our provision of the Services, so that we may report such interruptions;</p>
                            <p>To provide contextualized ads that are of your interest.</p>
                        </span>}
                    </dd>
                    <dd>
                        <div className={styles.title} onClick={showTwo}>
                            <svg className={items.two ? styles.roteDown : styles.roteUp} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                            <h5>2. About data processing</h5>
                        </div>
                        {items.two && <span>
                            <p>Data we collect from you may be transferred and stored at a destination outside the United Kingdom or the European Economic Area ('<strong>EEA</strong>'), such as the US. This transfer is required to host the Services, provide support services, backup your data, and allow you to use the Services.</p>
                            <p>We use third parties to help us manage your information and services, and we use customer service provider to host the game and the database, and also marketing companies to manage the advertising that appears to you.</p>
                            <p>These are the companies that process data on our behalf and but can not use them for their own independent purposes:</p>
                            <p>- Google AdManager</p>
                            <p>- Google Analytics</p>
                            <p>- Xandr</p>
                        </span>}
                    </dd>
                    <dd>
                        <div className={styles.title} onClick={showThree}>
                            <svg className={items.three ? styles.roteDown : styles.roteUp} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                            <h5>3. Data for advertising</h5>
                        </div>
                        {items.three && <span>
                            <p>We use third-party advertising companies to serve advertisement and / or provide collected data to help implementing ads when you visit or use our Services. We also use analytics web tools such as Google Analytics to interpret your use of our Services.</p>
                        </span>}
                    </dd>
                    <dd>
                        <div className={styles.title} onClick={showFour}>
                            <svg className={items.four ? styles.roteDown : styles.roteUp} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                            <h5>4. Uso of cookies</h5>
                        </div>
                        {items.four && <span>
                            <p>We may use "cookies" to improve user experience. Your web browser is responsible for controlling and sharing your information through cookies. These cookies enable us to hold session information as you navigate from our Service, improve your experience, and track and analyze usage and other statistical information.</p>
                            <p>Here are some examples of ways we can use use cookies when is strictly necessary:</p>
                            <p>Keep you logged while you are visiting;</p>
                            <p>Allow you to freely navigate on our Services;</p>
                            <p>Show you appropriate ads using your interests as a base.</p>
                            <p>Users can change their web browser settings to refuse or warn them when Cookies are being used or sent. If had done, you may observe some misfunction on some parts of the website. Moreover, if you want to know how ads companies use websites or apps information for specific aim, we ask you to visit the companies' weblinks mentioned above.</p>
                        </span>}
                    </dd>
                    <dd>
                        <div className={styles.title} onClick={showFive}>
                            <svg className={items.five ? styles.roteDown : styles.roteUp} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                            <h5>5. Storage</h5>
                        </div>
                        {items.five && <span>
                            <p>We will only keep data when if it is relevant or useful to purposes in which they were originally collected, otherwise if they are requested by law.</p>
                            <p>Although we collect login data from third-party accounts, it is not stored and the session has a duration of 24 hours.</p>
                        </span>}
                    </dd>
                    <dd>
                        <div className={styles.title} onClick={showSix}>
                            <svg className={items.six ? styles.roteDown : styles.roteUp} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                            <h5>6. Data protection</h5>
                        </div>
                        {items.six && <span>
                            <p>
                                If you log in with a third-party network, you may experience different or additional log in protections through this website or those third-party Services. You must deny non-authorized access to your account and personal data, and you must select and protect your password and / or any other login mechanism properly.
                            </p>
                            <p>We are committed to the safety of your information; in addition, here are some measures we take to make them better:</p>
                            <p>Cryptography on server communication, including personal information;</p>
                            <p>Software architecture with highly safe access ambient;</p>
                            <p>Restricted access to server information assured by internal policy.</p>
                            <p>We put our efforts to protect your personal data privacy that we keep registered, but unfortunately we cannot guarantee full safety. Factors as login or non authorized use, hardware or software failure and so on may compromise the safety of user data at any moment.</p>
                            <p>We are based in Brazil, and all collected data are conducted by the laws of Brazil. When you access or use our Services, you agree that the processing and transferessing of the data in Brazil and in other countries.</p>
                        </span>}
                    </dd>
                    <dd className={styles.seven}>
                        <div className={styles.title} onClick={showSeven}>
                            <svg className={items.seven ? styles.roteDown : styles.roteUp} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                            <h5>7. Other Provisions</h5>
                        </div>
                        {items.seven && <span>
                            <p>Our services are not specifically aimed for children. If you are an user under the age of 13 and if you are using a third-party account (Facebook / Google and / or Twitter), it is extremely necessary your parents' consent to use your photo or name and, if applicable, to use our services.</p>
                            <p>If you have any other questions about this Privacy Policy, please contact us at team@gartic.com</p>
                        </span>}
                    </dd>
                </dl>
            </div>
            <Footer />
        </>
    )
}
export default Privacy