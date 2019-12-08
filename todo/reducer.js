const todoReducer = (state = [], action) => {
  if (action.type === 'ADD') {
    return [...state, action.payload]
  }

  if (action.type === 'DELETE') {
    return state.filter((_, index) => index !== action.payload)
  }
}
