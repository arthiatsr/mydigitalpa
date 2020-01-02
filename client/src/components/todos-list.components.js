import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const Todo = props => (
    <tr>
      <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
      <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
      <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
      <td>
          <Link  to={"/edit/"+props.todo._id}>Edit</Link>
      </td>
    </tr>
)

export default class TodosList extends Component{

    constructor (props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount(){
        axios.get('http://localhost:3001/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(err){
                console.log(err);
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:3001/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(err){
                console.log(err);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo,i){
            return <Todo todo={currentTodo} key={1} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Reminders</h3>
                <Table striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                    <th>description</th>
                    <th>responsible</th>
                    <th>priority</th>
                    <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.todoList()}
                </tbody>
                </Table>
            </div>
        )
    }
}
