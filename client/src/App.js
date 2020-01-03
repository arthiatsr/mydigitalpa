import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.components";
import EditTodo from "./components/edit-todo.components";
import TodosList from "./components/todos-list.components";
import { Nav } from 'react-bootstrap';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true 
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)    
  }
};
const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true

      }))
    })
  }

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' }};
    if(redirectToReferrer === true){
      return(
        <Redirect to={from} />
      )
    };
    return (
      <div>
        <p>You must login to view this page at {from.pathname} </p>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true 
    ? <Component {...props} /> 
    : <Redirect to= {{
        pathname: '/login',
        state: { from: props.location }
    }} />
  )} />
);

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (<p>Hi There!!! <button onClick={() => {
    fakeAuth.signout(() => history.push('/'))
  }}>Log out</button></p>)
    : (<p>You are not Logged in</p>)
  
))

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <AuthButton />
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src="https://img.pngio.com/arbonne-png-free-arbonnepng-transparent-images-33881-pngio-arbonne-logo-transparent-background-260_260.png" width="30" height="30" alt="Arbonne Png & Free Arbonne.png Transparent Images #33881 - PNGio"></img>
            <Link to="/" className="navbar-brand">App</Link>
            <Nav defaultActiveKey="/" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="/">Reminders</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/create">Add</Nav.Link>
              </Nav.Item>
            </Nav>
            </nav>
            </div>
            <div>
              <ul>
                <li><Link to='/public'>Public Page</Link></li>
                <li><Link to='/protected'>Protected Page</Link></li>              
              </ul>
            </div>
            {/* <div className="collapse nav-collapse">
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create</Link>
                </li>
              </ul>
            </div> */}
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
        
      </Router>
    );
  }
}

export default App;
