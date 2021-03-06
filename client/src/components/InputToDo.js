import React, { Fragment, useState } from 'react';

const InputToDo = () => {

// define states    
const [ description, setDescription ] = useState(""); 

const onSubmitForm = async e  => {
    e.preventDefault();
    try {
        // sending the request
        const body = { description };
        const response = await fetch(
            "http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": 
                "application/json" },
                body: JSON.stringify(body)
        });

        // Force refresh on action to propagate changes
        window.location = "/"; 

    } catch (error) {
        console.error(error);
    }
}
    return (
    <Fragment>
        <h1 className="text-center mt-5"> PERN Todo List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input 
            type="text" 
            className="form-control" 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
            />
            <button className="btn btn-success">ADD</button>
        </form>
    </Fragment>
    )
};

export default InputToDo;