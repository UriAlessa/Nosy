<<<<<<< HEAD
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import AccountSection from "./components/AccountSection";
import GamepadButton from "./pages/GameButtons";
import io from "socket.io-client";

const App = (props) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiaW5zZXJ0aW5nIjp0cnVlLCJnZXR0ZXJzIjp7fSwiX2lkIjoiNjEzNjczOGUyYTQ0NmEzZjc5NjAzNWFhIiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiYXZhdGFyIjoicmVxdWlyZSIsImVtYWlsIjoicmVxdWlyZSIsInBhc3N3b3JkIjoicmVxdWlyZSIsInVzZXJuYW1lIjoicmVxdWlyZSJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnt9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7ImF2YXRhciI6dHJ1ZSwiZW1haWwiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJ1c2VybmFtZSI6dHJ1ZX19LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwicGF0aHNUb1Njb3BlcyI6e30sImNhY2hlZFJlcXVpcmVkIjp7fSwic2Vzc2lvbiI6bnVsbCwiZW1pdHRlciI6eyJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfSwiJG9wdGlvbnMiOnsiZGVmYXVsdHMiOnRydWV9LCJ2YWxpZGF0aW5nIjpudWxsLCJiYWNrdXAiOnsiYWN0aXZlUGF0aHMiOnsibW9kaWZ5Ijp7InVzZXJuYW1lIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiZW1haWwiOnRydWUsImF2YXRhciI6dHJ1ZSwiZmFjZWJvb2siOnRydWUsImdvb2dsZSI6dHJ1ZX0sImRlZmF1bHQiOnsiY29pbnMiOnRydWUsInBsYXlpbmdfbm93LnN0YXR1cyI6dHJ1ZSwiZnJpZW5kcyI6dHJ1ZSwiZnJpZW5kX3JlcXVlc3RzIjp0cnVlLCJhZG1pbiI6dHJ1ZSwiX2lkIjp0cnVlLCJnYW1lX3JlcXVlc3RzIjp0cnVlfX19LCJzYXZlZFN0YXRlIjp7fX0sIiRpc05ldyI6ZmFsc2UsIiRsb2NhbHMiOnt9LCIkb3AiOm51bGwsIl9kb2MiOnsidXNlcm5hbWUiOiJyYWZhZWxtaWFuMjMiLCJwYXNzd29yZCI6IiQyYSQxMCRXWEp6OVBzdTNVcXdqd3gzL3dtWFEuL2dWMzlQdWZOYjRsT1FpRlF1Mi9tVmFyc25CZDFRMiIsImVtYWlsIjoicmFmYWVsbWlhbjIyNUBnbWFpbC5jb20iLCJhdmF0YXIiOiJhc2Rhc2Rhcy5qcGciLCJjb2lucyI6MCwic3RhdGlzdGljcyI6eyJtdWx0aV9wbGF5ZXIiOnt9LCJzaW5nbGVfcGxheWVyIjp7fX0sInBsYXlpbmdfbm93Ijp7InN0YXR1cyI6ZmFsc2V9LCJmcmllbmRzIjpbXSwiZnJpZW5kX3JlcXVlc3RzIjpbXSwiYWRtaW4iOmZhbHNlLCJmYWNlYm9vayI6ZmFsc2UsImdvb2dsZSI6ZmFsc2UsIl9pZCI6IjYxMzY3MzhlMmE0NDZhM2Y3OTYwMzVhYSIsImdhbWVfcmVxdWVzdHMiOltdLCJfX3YiOjB9LCJpYXQiOjE2MzA5NTg0Nzh9.2QtX0Lkp5sy4tQPdXO-NTMn2aHAaVVho16VvKh5jkRE";
    setSocket(io("http://localhost:4000/", { query: "token=" + token })); //
  }, []);

  if (socket) {
    socket.emit("game_request", "rafaelmian23");

    socket.on("game_request", (username) => {
      console.log(username);
    });
  }
=======
import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from "./pages/Home"
import Terms from "./pages/Terms"
import Privacy from "./pages/Privacy"
import NotFound from './pages/NotFound'
import AccountSection from './components/AccountSection'
import GamepadButton from './pages/GameButtons'
import usersActions from './redux/actions/usersActions'

const App = (props) => {

  useEffect( () => {
    if(localStorage.getItem('token')) {
      props.logInLS()
    }
  }, [])

>>>>>>> origin/uriel
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/accounts" component={AccountSection} />
        <Route path="/selectgame" component={GamepadButton} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  logInLS: usersActions.logInLS
}

<<<<<<< HEAD
export default App;
=======
export default connect(null, mapDispatchToProps)(App)
>>>>>>> origin/uriel
