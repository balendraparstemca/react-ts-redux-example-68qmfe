import React from 'react';
import { connect } from "react-redux"
import Todo from "./Todo";
import { removeTodo } from "./redux/actions/todos"
var todos:any;
const Todos = ({ todos, remove }) => (
  <ul>
    {todos.map((todo, i) => (
      <div><li key={i}>{todo} {" "}<span style={{ cursor: "pointer" }} onClick={() => remove(i)}>❌</span></li><br /></div>
    ))}
  </ul>
)

export default connect(
  ({ todos }) => ({ todos }),
  dispatch => ({ remove: i => dispatch({ type: "Remove", payload:i }) })
)(Todos)
