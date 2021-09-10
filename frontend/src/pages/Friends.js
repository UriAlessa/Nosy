import React from "react";
import Footer from "../components/Footer";
import styles from "../styles/friends.module.css";
import { useEffect, useState } from "react";
import FriendCard from "../components/FriendCard";
import { connect } from "react-redux";
import usersActions from "../redux/actions/usersActions";

const Friends = (props) => {
  const [filtered, setFiltered] = useState([]);
  const [allFriends, setAllFriends] = useState([]);
  const [userSearched, setUserSearched] = useState();
  const [user, setUser] = useState([]);
  const [switchOptions, setSwitchOptions] = useState(false);

  const filterFriends = (e) => {
    setFiltered(
      props.users.filter((user) => user.username.startsWith(e.target.value))
    );
  };

  useEffect(() => {
    // setFiltered(props.userData.friends)
    // setAllFriends(props.userData.friends)
  }, []);

  const clickHandler = async () => {
    setUserSearched(await props.searchUser(user, props.token));
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title} style={{ paddingTop: "2vh" }}>
          FRIENDS
        </h1>
        <div className={styles.midContainer}>
          {!switchOptions ? (
            <div className={styles.optionsContainer}>
              <h2 className={styles.title}>Friend Requests</h2>
              {props.userData &&
                props.userData.friend_requests.map((req) => {
                  <FriendCard
                    key={req.user.username}
                    type={req.creator ? "sentRequest" : "acceptRequest"}
                    request={req}
                  />;
                })}
            </div>
          ) : (
            <div className={styles.optionsContainer}>
              <h2 className={styles.title}>Search Friends</h2>
              <input
                type="text"
                onChange={(e) => setUser(e.target.value)}
                placeholder="Search your friend"
              />
              <button onClick={clickHandler}>Search</button>
              {userSearched && (
                <FriendCard type="sendRequest" user={userSearched} />
              )}
            </div>
          )}
          <div className={styles.friendsList}>
            <h2 className={styles.title}>Friend List</h2>
            {filtered.map((user) => (
              <FriendCard user={user} key={user._id} />
            ))}
            <input
              className={styles.searchFriend}
              placeholder="Type to search a friend..."
            />
          </div>
          <button onClick={() => setSwitchOptions(true)}>Search friend</button>
          <button onClick={() => setSwitchOptions(false)}>
            Friend request
          </button>
        </div>
        <Footer />
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
