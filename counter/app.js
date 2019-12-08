class ScoreTracker {
  store = createStore(counterReducer)
  counter = document.querySelector('[data-score]')

  constructor() {
    this.store.subscribe(
      () => (this.counter.textContent = this.store.getState())
    )
  }

  add() {
    this.store.dispatch({ type: 'ADD' })
  }

  subtract() {
    this.store.dispatch({ type: 'SUBTRACT' })
  }
}

const storeTracker = new ScoreTracker()
