

const addTodo = todo => ({ type: "Add", payload: todo })

const removeTodo = index => ({ type: "Remove", payload: index })

export {
  addTodo,
  removeTodo
}