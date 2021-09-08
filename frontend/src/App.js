import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import io from "socket.io-client";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import AccountSection from "./components/AccountSection";
import MenuResponsive from "./components/MenuResponsive";
import Game from "./pages/Game";
import usersActions from "./redux/actions/usersActions";
import otherActions from "./redux/actions/otherActions";
import FriendCard from './components/FriendCard'
import GameButtons from './pages/GameButtons'

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
      {props.menu && <MenuResponsive />}
      <Switch>
        <Route path='/prueba' component={FriendCard} />
        <Route exact path='/' component={Home} />
        <Route path='/terms' component={Terms} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/notfound' component={NotFound} />
        <Route path='/game' component={Game} />
        {!props.token && <Route path='/accounts' component={AccountSection} />}
        <Route path='/selectgame' component={GameButtons} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    menu: state.other.menu
  }
}

const mapDispatchToProps = {
  logInLS: usersActions.logInLS,
  setSocket: usersActions.setSocket,
  showMenuResponsive: otherActions.showMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
