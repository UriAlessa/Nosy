import React from "react";
import styles from "../styles/friends.module.css";
import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";
import {Link} from "react-router-dom"

const Friends = (props) => {
  const [filtered, setFiltered] = useState([]);
  const [allFriends, setAllFriends] = useState([]);
  const [userSearched, setUserSearched] = useState();
  const [user, setUser] = useState([]);
  const [switchOptions, setSwitchOptions] = useState(false);

  const filterFriends = (e) => {
    setFiltered(
      props.userData.friends.filter((user) =>
        user.username.startsWith(e.target.value)
      )
    );
  };

  useEffect(() => {
    setFiltered(props.userData && props.userData.friends);
    setAllFriends(props.userData && props.userData.friends);
  }, [props.userData]);

  const clickHandler = async () => {
    setUserSearched(await props.searchUser(user, props.token));
  };
  console.log(props.userData && props.userData);
  return (
    <>
      <div className={styles.mainContainer} style={{backgroundImage: "url(https://i.postimg.cc/fL7dnP7m/13.png)"}}>
        <h1 className={styles.title}>
          FRIENDS
        </h1>
        <div className={styles.midContainer}>
        <div className={styles.contP}>
            <p onClick={() => setSwitchOptions(true)}>Search friend</p>
            <p onClick={() => setSwitchOptions(false)}>
            Friend request
          </p>
          </div>
          {!switchOptions ? (
            <div className={styles.optionsContainer}>
              <h3 className={styles.subtitle}>Requests</h3>
              {props.userData &&
                props.userData.friend_requests.map((req) => {
                  return (
                    <FriendCard
                      key={req.user.username}
                      type={req.creator ? "sentRequest" : "acceptRequest"}
                      request={req}
                    />
                  );
                })}
            </div>
          ) : (
            <div className={styles.optionsContainer}>
              <h3 className={styles.subtitle}>Search Friends</h3>
              <div className={styles.search}>
              <input className={styles.inputSearch}
                type="text"
                onChange={(e) => setUser(e.target.value)}
                placeholder="Search your friend"
              />
              <button onClick={clickHandler}>Search</button>
              </div>
              {userSearched && (
                <FriendCard type="sendRequest" user={userSearched} />
              )}
            </div>
          )}
          <div className={styles.friendsList}>
            <h3 className={styles.subtitle}> List</h3>
            {filtered.map((friend) => (
              <FriendCard type="culo" friend={friend} key={friend.username} />
            ))}
            <input
              className={styles.searchFriend}
              placeholder="Type to search a friend..."
              onChange={filterFriends}
            />
          </div>
        </div>
        <Link to="/">
          <img
            src="/assets/goback.png"
            className={styles.goBackHome}
            alt="goback"
          />
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users.userData,
    token: state.users.token,
  };
};

const mapDispatchToProps = {
  searchUser: usersActions.searchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
