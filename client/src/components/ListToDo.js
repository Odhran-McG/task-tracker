import React, { Fragment, useEffect, useState } from 'react';

const ListToDos = () => {


    const [todos, setTodos] = useState(
        []);


    const getTodos = async () => {

        try {
            const response = await fetch("http://localhost:5000/todos");
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
          <tr>
              <td>{todo.description}</td>
              <td><button></button>Edit</td>
              <td><button></button>Delete</td>
          </tr>
      ))}
      </tbody>
      </table>
      </Fragment>
  );
};

export default ListToDos;