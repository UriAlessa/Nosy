import React from 'react'
import Footer from '../components/Footer'
import styles from '../styles/friends.module.css'
import { useState } from 'react'
import FriendCard from '../components/FriendCard'

const Friends = () => {

    let friends = [{username: 'Daniel'}, {username: 'Uriel'}, {username: 'Sabrina'}, {username: 'Rafael'}]

    return (
        <>
            <div className={styles.mainContainer}>
                <h1 className={styles.title} style={{paddingTop: '2vh'}}>FRIENDS</h1>
                <div className={styles.midContainer}>
                    <div className={styles.optionsContainer}>
                        <h2 className={styles.title}>Friend Request</h2>
                        {friends.map((friend) => {
                            return(
                                <FriendCard friend={friend}/>
                            )
                        })}
                    </div>
                    <div className={styles.friendsList}>
                        <h2 className={styles.title}>Friend List</h2>
                        <input className={styles.searchFriend} placeholder='Type to search a friend...' />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Friends
