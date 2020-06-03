import React, { Fragment } from 'react';

const ListToDos = () => {
    return <Fragment>
            <h1>List ToDos</h1>
    <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>todo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Complete React App</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Update Work Logs</td>
      </tr>
    </tbody>
  </table>
  </Fragment>
  
};

export default ListToDos;