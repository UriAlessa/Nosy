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
import MenuResponsive from "./components/MenuResponsive";
import Game from "./pages/Game";
import usersActions from "./redux/actions/usersActions";
import otherActions from "./redux/actions/otherActions";
import FriendCard from "./components/FriendCard";
import GameButtons from "./pages/GameButtons";
import { Toaster } from "react-hot-toast";
import AdminPanel from "./pages/Admin";
import Loader from "./components/Loader";

const App = (props) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      props.logInLS(
        io("https://benosy.herokuapp.com/", {
          query: "token=" + token,
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
      {props.menu && <MenuResponsive />}
      <Switch>
        <Route path="/prueba" component={FriendCard} />
        <Route exact path="/" {...props} component={Home} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/game" component={Game} />
        <Route path="/accounts" component={!props.token ? Account : Home} />
        <Route path="/selectgame" component={GameButtons} />
        <Route path="/admin" component={AdminPanel} />
        <Redirect to="/" />
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
  };
};

const mapDispatchToProps = {
  logInLS: usersActions.logInLS,
  setSocket: usersActions.setSocket,
  showMenuResponsive: otherActions.showMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
