import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux'
import AddTodo from "./AddTodo"
import Todos from "./Todos"

export default () => (
  <Provider store={store}>
    <AddTodo />
    <Todos />
  </Provider>
);
