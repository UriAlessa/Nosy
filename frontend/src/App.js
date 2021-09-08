import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import io from "socket.io-client";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Account from "./pages/Account";
import Game from "./pages/Game";
import usersActions from "./redux/actions/usersActions";
import FriendCard from './components/FriendCard'
import GameButtons from './pages/GameButtons'
import { Toaster } from 'react-hot-toast';

const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.logInLS();
      props.setSocket(
        io("http://localhost:4000/", {
          query: "token=" + localStorage.getItem("token"),
        })
      );
    }
    // eslint-disable-next-line
  }, []);
  if (props.socket) {
    props.socket.on("game_request", (username) => {
      console.log(username);
    });
    props.socket.on("friend_request", (username) => {
      console.log(username);
    });
    props.socket.on("connected", (username) => {
      console.log(username);
    });
  }
  return (
    <BrowserRouter>
    <Toaster />
      <Switch>
        <Route path="/prueba" component={FriendCard} />
        <Route exact path="/" {...props} component={Home} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/game" component={Game} />
        <Route path="/accounts" component={!props.token ? Account : Home} />
        <Route path="/selectgame" component={GameButtons} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
  };
};

const mapDispatchToProps = {
  logInLS: usersActions.logInLS,
  setSocket: usersActions.setSocket,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
