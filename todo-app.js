const express = require('express');
// import model dari index.js, sesuai nama kelasnya
const { Todo } = require('./models/index');

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// endpoint crud
// router mendapatkan findAll
app.get('/todos', (req, res) => {
    Todo.findAll({
        raw: true
    }).then(result => {
        res.json(result)
    }).catch(error => {
        res.send({
            message: error
        })
    })
})

// router insert todo
app.post('/todos', (req, res) => {
    const body = req.body;
    const todoData = {
        nameTodo: body.nameTodo,
        descTodo: body.descTodo,
        categoryTodo: body.categoryTodo
    };

    Todo.create(todoData)
    .then(result => {
        res.send({
            message: "new Todo created",
            todo: result
        })
    }).catch(error => {
        res.send({
            message: error
        })
    })
})

// router mendapatkan findOne berdasarkan id
app.get('/todos/:id', (req, res) => {
    Todo.findOne({
        where: { id: req.params.id }
    }).then(result => {
        res.json(result)
    }).catch(error => {
        res.send({
            message: error
        })
    })
})

// router update data berdasarkan id
app.patch('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const body = req.body;
    const todoData = {
        nameTodo: body.nameTodo,
        descTodo: body.descTodo,
        categoryTodo: body.categoryTodo
    };

    Todo.update(todoData, {
        where: {id: todoId}
    }).then(result => {
        res.send({
            message: "update todo success",
        })
    }).catch(error => {
        res.send({
            message: error
        })
    })
})

// router delete id berdasarkan id
app.delete('/todos/:id', (req, res) => {
    const todoId = req.params.id;

    Todo.destroy({
        where: {id: todoId}
    }).then(result => {
        res.send({
            message: "delete todo success",
        })
    }).catch(error => {
        res.send({
            message: error
        })
    })
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
})
    