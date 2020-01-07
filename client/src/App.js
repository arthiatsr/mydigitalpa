import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/Signin";
// import Photolist from "./components/Photolist";
import Home from "./components/Home";
import Auth from "./pages/Auth";
import Email from "./components/emailFriend";


const App = () => (
  <Router>
    <div>
      <h1><i>Go Digital!!!</i></h1>
      <Switch>
        {/* <Route exact path="/photolist" component={Photolist} />  */}
        <Route exact path="/home" component={Login} />
        <Route exact path="/loggedin" component={Home} />
        <Route exact path="/" component={Auth} />
        <Route exact path="/email" component={Email} />

      </Switch>
    </div>
  </Router>
);

export default App;
