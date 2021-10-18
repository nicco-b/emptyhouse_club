import reducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// const persistedState = localStorage.getItem('mode') ? JSON.parse(localStorage.getItem('mode')) : {}
import { loadState, saveState } from './utils/localstorage'

const persistedState = loadState()
const store = createStore(
	reducer,
	persistedState,
	composeWithDevTools(applyMiddleware(thunk, logger))
)
store.subscribe(() => {
	saveState({
		cart: store.getState().cart,
	})
})

export default store
