const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware;
app.use(cors());
app.use(express.json());  //req.body

// ROUTES

// create a todo
app.post("/todos", async (req,res) => {
    try {

        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        console.log(req.body);
        res.json(newTodo.rows);
    } catch (error) {
        console.error(error);
    }
});

// get all todos

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        console.log(req.body);
        res.json(allTodos.rows); 
    } catch (error) {
        console.error(error);
        
    }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id }= req.params; 
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]); 
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(error);
        
    }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateToDo = await pool
        .query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", 
        [description, id]
        );

        res.json("todo was updated!");

    } catch (error) {
        console.log(error);
    }
});

// delete a todo
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteToDo = await pool
        .query(
            "DELETE FROM todo WHERE todo_id=$1",
             [id]
             );

    res.json("entry deleted!")
    } catch (error) {
        console.log(error);
    }
});

app.listen(5000, () => {
    console.log("server started on port:5000");
});