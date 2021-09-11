import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import MenuResponsive from "./components/MenuResponsive";
import Game from "./pages/Game";
import usersActions from "./redux/actions/usersActions";
import otherActions from "./redux/actions/otherActions";
import FriendCard from "./components/FriendCard";
import GameButtons from "./pages/GameButtons";
import toast, { Toaster } from "react-hot-toast";
import AdminPanel from "./pages/Admin";
import Loader from "./components/Loader";
import gamesActions from "./redux/actions/gamesActions";
import Friends from "./pages/Friends";
import socketActions from "./redux/actions/socketActions";

const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.logInLS();
      props.setGame(localStorage.getItem("token"));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (props.socket && props.token) {
      props.socket.on("game_request", (username) => {
        toast(username + " invited you to a game!", {
          icon: "🎮",
        });
      });
      props.socket.on("answer_game_request", (username) => {
        props.history.push("/game");
      });
      props.socket.on("change_current_player", (username) => {});
      props.socket.on("friend_request", ({ username, requests }) => {
        props.setFriendRequests(requests);
        toast(username + " has sent you a friend request!", {
          icon: "🤝",
        });
      });
      props.socket.on(
        "accepted_friend_request",
        ({ username, requests, friends }) => {
          props.setFriends(requests, friends);
          toast(
            username + " accepted your friend request! Invite him to a game",
            {
              icon: "🤝",
            }
          );
        }
      );
      props.socket.on("connected", (username) => {
        username !== props.username &&
          toast(username + " has connected", {
            icon: "👋",
          });
      });
      props.socket.on("disconnection", (username) => {
        username !== props.username &&
          toast(username + " has disconnected", {
            icon: "👋",
          });
      });
    }
    // eslint-disable-next-line
  }, [props.socket]);

  return (
    <BrowserRouter>
      <Toaster />
      {props.menu && <MenuResponsive />}
      <Switch>
        <Route path="/prueba" component={FriendCard} />
        <Route exact path="/" {...props} component={Home} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/game" component={Game} />
        <Route path="/accounts" component={!props.token ? Account : Home} />
        <Route path="/friends" component={Friends} />
        <Route path="/selectgame" component={GameButtons} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/loader" component={Loader} />
        <Redirect to="/notFound" />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    menu: state.other.menu,
    socket: state.users.socket,
    username: state.users.username,
  };
};

const mapDispatchToProps = {
  logInLS: usersActions.logInLS,
  showMenuResponsive: otherActions.showMenu,
  setGame: gamesActions.setGame,
  // reFetchGameRequests: socketActions.reFetchGameRequests,
  // startGame: socketActions.startGame,
  // reFetchCurrentPlayer: socketActions.reFetchCurrentPlayer,
  setFriendRequests: socketActions.setFriendRequests,
  setFriends: socketActions.setFriends,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
