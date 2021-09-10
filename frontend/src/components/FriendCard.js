import styles from "../styles/friendCard.module.css";
import { useState } from "react";

const FriendCard = (props) => {
  const type = "acceptRequest";

  let result =
    type === "acceptRequest" ? (
      <div className={styles.containerButtons}>
        <button className={styles.buttonRefuse}>REFUSE</button>
        <button value={props.friend.username} className={styles.buttonAccept}>ACCEPT</button>
      </div>
    ) : (
      <div>
        <button className={styles.buttonAccept}>SEND INVITATION</button>
      </div>
    );

  return (
    <section className={styles.section}>
      <img className={styles.logo} src="/assets/man.png" alt="logo" />
      <div>
        <div className={styles.container}>
          <h3>{props.friend.username}</h3>
          {result}
        </div>
      </div>
    </section>
  );
};
export default FriendCard;
