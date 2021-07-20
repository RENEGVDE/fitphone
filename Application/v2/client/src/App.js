import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Results from "./components/Results/Results";
import "./App.scss";
import Create from "./components/Create/create";
import Agreement from "./components/Agreement/Agreement";

import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Insight from "./components/Insights/Insight";
import ForgotPassword from "./components/ForgotPassword";
//import { Container } from "react-bootstrap";

const App = () => (
  <div>
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/" exact component={Join} />
          <PrivateRoute path="/Create" exact component={Create} />
          <PrivateRoute path="/Agreement" exact component={Agreement} />
          <PrivateRoute path="/Profile" component={Profile} />
          <PrivateRoute path="/Insight" component={Insight} />
          <PrivateRoute path="/profile" component={Profile} />
          {/* <Route path="/" exact component={Join} />
          <Route path="/Create" exact component={Create} />
          <Route path="/Agreement" exact component={Agreement} />
          <PrivateRoute path="/profile" component={Profile} /> */}
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Results" component={Results} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  </div>
);

export default App;
