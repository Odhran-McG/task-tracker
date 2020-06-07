import React, { Fragment } from 'react';
import { render } from '@testing-library/react';
import App from './App';


// components
import InputToDo from "./components/InputToDo";
import ListToDo from "./components/ListToDo";


test('renders learn react link', () => {
  const { getByText } = render( 
  <Fragment>
    <div className="container">
      <InputToDo/>
      <ListToDo/>        
    </div>
  </Fragment>
  );
  expect(App)
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('test react App renders correct markup', ()=> {
  describe(App, () => {
    it(App, () => {
      expect(App.render).equal(
      <Fragment>
      <div className="container">
        <InputToDo/>
        <ListToDo/>        
      </div>
    </Fragment>)
    });
  })
});
