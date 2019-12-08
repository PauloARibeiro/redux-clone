class Todo {
  store = createStore(todoReducer)
  input = document.querySelector('input')
  list = document.querySelector('[data-list]')

  constructor() {
    this.store.subscribe(() => this.render())
  }

  add() {
    this.store.dispatch({ type: 'ADD', payload: this.input.value })
  }

  delete(id) {
    this.store.dispatch({ type: 'DELETE', payload: id })
  }

  render() {
    this.list.innerHTML = ''

    this.store
      .getState()
      .map(
        (item, index) =>
          (this.list.innerHTML += `<li>${item} <span onclick="todo.delete(${index})">x</span></li>`)
      )
  }
}

const todo = new Todo()
