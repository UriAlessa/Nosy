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
import { Toaster } from "react-hot-toast";
import AdminPanel from "./pages/Admin";
import Loader from "./components/Loader";
import gamesActions from "./redux/actions/gamesActions";
import Friends from "./pages/Friends";
import appMasterFunction from "./appMasterFunction";

const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.logInLS();
      props.setGame(localStorage.getItem("token"));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    appMasterFunction();
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
  };
};

const mapDispatchToProps = {
  logInLS: usersActions.logInLS,
  showMenuResponsive: otherActions.showMenu,
  setGame: gamesActions.setGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
