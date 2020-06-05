import React, { Fragment, useState } from 'react';

const EditTodo = ({todo}) => {

    //Define description states
    const [description, setDescription] = useState(todo.description);
    
    // Edit description function
    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(
                `http://localhost:5000/todos/${todo.todo_id}`, 
            {
                method: "PUT",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(body)
            }
            );
            // Force refresh
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
    <Fragment>
        <button type="button" 
                class="btn btn-warning"
                data-toggle="modal" 
                data-target={`#id${todo.todo_id}`}
                >Edit
        </button>
         
        <div class="modal fade" 
             id={`id${todo.todo_id}`}
             onClick={() => setDescription(todo.description)}>
        <div class="modal-dialog">
            
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit ToDo</h4>
                <button type="button" 
                        class="close" 
                        data-dismiss="modal"
                        onClick={() => setDescription(todo.description)}>
                </button>
            </div>

            <div class="modal-body">
                <input type="text" 
                       className="form-control"
                       value={description}
                       onChange={e => setDescription(e.target.value)}>
                </input>
            </div>
            
            <div class="modal-footer">
                <button type="button" 
                        class="btn btn-warning" 
                        data-dismiss="modal"
                        onClick = {e => updateDescription(e)}>Edit</button>  
                <button type="button" 
                        class="btn btn-danger"
                        onClick={() => setDescription(todo.description)}  
                        data-dismiss="modal"
                        >Close
                </button>
            </div>

        </div>
      </div>
    </div>
    </Fragment>
    )};

export default EditTodo;