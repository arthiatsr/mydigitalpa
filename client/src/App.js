import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.components";
import EditTodo from "./components/edit-todo.components";
import TodosList from "./components/todos-list.components";
import { Nav } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src="https://img.pngio.com/arbonne-png-free-arbonnepng-transparent-images-33881-pngio-arbonne-logo-transparent-background-260_260.png" width="30" height="30" alt="Arbonne Png & Free Arbonne.png Transparent Images #33881 - PNGio"></img>
            <Link to="/" className="navbar-brand">Mern app</Link>
            <Nav defaultActiveKey="/" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="/">Todo</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav.Item>
            </Nav>
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
          </nav>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
        
      </Router>
    );
  }
}

export default App;
