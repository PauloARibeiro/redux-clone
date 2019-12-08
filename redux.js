const createStore = reducer => {
  const store = {}
  store.listeners = []

  store.getState = () => store.state

  store.subscribe = listener => store.listeners.push(listener)

  store.unsubscribe = listener =>
    store.listeners.splice(store.listeners.indexOf(listener, 1))

  store.dispatch = action => {
    store.state = reducer(store.state, action)
    store.listeners.forEach(listener => listener())
  }

  return store
}

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action)

      return nextState
    }, [])
  }
}

/*           
    FUTURE IMPLEMENTATIONS
  
    MIDDLEWARE,
    
  */
