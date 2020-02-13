import React, { Component } from "react"
import { connect } from "react-redux"
import { addTodo } from "./redux/actions/todos"

class AddTodo extends Component<{ addTodo: (value: string) => void }> {
  state = {
    value: ""
  }

  render = () => {
    const { addTodo } = this.props
    const { value } = this.state

    return (
      <form onSubmit={e => {
        e.preventDefault()
        addTodo(value)
      }}>
        <input value={value} onChange={({ target: { value } }) => this.setState({ value })} placeholder="add todo" />
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, dispatch => ({ addTodo: todo => dispatch(addTodo(todo)) }))(AddTodo)
