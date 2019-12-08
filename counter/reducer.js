const counterReducer = (state = 0, action) => {
  if (action.type === 'ADD') {
    return state ? state + 1 : 1
  }

  if (action.type === 'SUBTRACT') {
    return state ? state - 1 : 0
  }
}
