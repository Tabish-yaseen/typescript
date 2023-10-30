"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/getTodos', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/addTodo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Todo added successfully', todo: newTodo });
});
router.delete('/deleteTodo/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id)
    // Filter the todos array to exclude the todo with the specified id
    const updatedTodos = todos.filter((element) => {
        return element.id !== id;
    });
    // Check if a todo was removed by comparing the lengths
    if (updatedTodos.length < todos.length) {
        todos = updatedTodos; // Update the todos array with the filtered result
        res.status(200).json({ message: 'Todo deleted successfully', todos: todos });
    }
    else {
        res.status(404).json({ message: 'Todo not found' });
    }
});
router.put('/updateTodo/:id', (req, res) => {
    const id = req.params.id;
    const text = req.body.text;
    console.log(text);
    console.log(id);
    const index = todos.findIndex((element) => {
        return element.id === id;
    });
    todos[index] = { id: id, text: text };
    if (index !== -1) {
        todos[index] = { id: id, text: text };
        res.status(200).json({ message: 'Todo updated successfully', todo: todos[index] });
    }
    else {
        res.status(404).json({ message: 'Todo not found' });
    }
});
exports.default = router;
