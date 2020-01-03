const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const todoRoutes = express.Router();

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

}

let db = require('./models');

app.use(express.static(path.join(__dirname, "client", "build")))
app.use(cors());
app.use(bodyParser.json());

todoRoutes.route('/').get(function(req,res){
    db.Todo.find(function(err,todos){
        if(err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req,res){
    let id = req.params.id;
    db.Todo.findById(id, function(err,todo){
        if(err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
});

todoRoutes.route('/add').post(function(req,res){
  //  let todo = new Todo(req.body);
    db.Todo.create(req.body)
        .then( todo => {
            res.status(200).json({'todo': 'todo added successfully'});

    })
    .catch(err => {
        res.status(400).send('adding new todo failed');
    });
        
});

todoRoutes.route('/update/:id').post(function(req,res){
    let id = req.params.id;
    Todo.findById(id, function(err,todo){
        if(!todo) 
            res.status(404).send('data is not found');
        else 
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated');
            })
            .catch(err => {
                res.status(400).send('updating new todo failed');
    
            });        
    });
});

app.use('/todos', todoRoutes);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todos");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://arthiatsr:Iskavsda@01@ds043047.mlab.com:43047/heroku_kv61q4p0");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todos");
const connection = mongoose.connection;
connection.once('open', function(){
    console.log("MongoDB connection succwssful");
})

app.get("*", (req, res) => {
    // res.sendFile(path.join(__dirname, "./client/build/index.html"));
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));

  });
  
app.listen(PORT, function(){
    console.log("server runnung" + PORT);
})