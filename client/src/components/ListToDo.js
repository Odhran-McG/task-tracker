import React, { Fragment, useEffect, useState } from 'react';

import EditTodo from "./EditToDo";

const ListToDos = () => {


    // Delete todo function
    const deleteToDo = async (id) => {
        try {
            const deleteToDo = await fetch(`http://localhost:5000/todos/${id}`,{
                    method:"DELETE"
                });
            console.log(deleteToDo);
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message)
        }
    }


    const [todos, setTodos] = useState(
        []);

    // Get todo function
    const getTodos = async () => {

        try {
            const response = await fetch(`http://localhost:5000/todos`);
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);
    
    return ( 
    <Fragment>
    <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        
      {todos.map(todo => (
          <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              
              <td><EditTodo todo={todo}>Edit</EditTodo></td>
              
              <td><button 
              className="btn btn-danger" 
              onClick={() => deleteToDo(todo.todo_id)}
              >Delete
              </button>
              </td>
          </tr>
      ))}
      </tbody>
      </table>
      </Fragment>
  );
};

export default ListToDos;