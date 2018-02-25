import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field/field'
import fieldReducer from './field/fieldReducer'
import Counter from './counter/components/counter'
import counterReducer from './counter/reducers'
import { INCREMENT, DECREMENT } from './counter/actions/actions_type'

const reducers = combineReducers({
  //field: fieldReducer,
  counter: counterReducer
})

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = () => ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: INCREMENT })}
      onDecrement={() => store.dispatch({ type: DECREMENT })}
    />
  </Provider>
, document.getElementById('app'))

render()
store.subscribe(render)
