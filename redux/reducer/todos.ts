
const initialState = ["Test"]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "Add":
      return state.concat(payload)
    case "Remove":
      return state.filter((_, i) => i !== payload)
    default:
      return state
  }
}