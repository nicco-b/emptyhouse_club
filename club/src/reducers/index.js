import { combineReducers } from 'redux'
import pageReducer from './pageReducer'
import shopReducer from './shopReducer'
import cartReducer from './cartReducer'
import cart, * as fromCart from './cartss'
import { getProductById } from '../actions/shopActions'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const rootReducer = combineReducers({
	pageReducer,
	shopReducer,
	cartReducer,
	cart,
	// products,
})
export default rootReducer

const getAddedIds = state => fromCart.getAddedIds(state)
const getQuantity = (state, id) => fromCart.getQuantity(state, id)
// const getProduct = (state, id) => fromProducts.getProduct(state.products, id)
const getProduct = (state, id) => getProductById(id, 'patches')

// const getRegistrations = async event => {
// 	// (async () => {
// 	const p = cart.addedIds.map(p => p.page)
// 	const u = [...new Set(p)]
// 	const promises = u.map(p => {
// 		// const w = [... Set(p)]
// 		// console.log(w, 'omg')

// 		return axios.get(`http://localhost:2222/api/shop/${p}`).then(res => {
// 			return res.data
// 		})
// 	})
// 	const registrations = await Promise.all(promises).then(values => {
// 		console.log(values, 'kl')
// 		return values
// 	})
// }

export const getTotal = state =>
	getAddedIds(state)
		.reduce((total, id) => total + getProductById(state, id).price * getQuantity(state, id), 0)
		.toFixed(2)

export const getCartProducts = state => {
	console.log(state, 'cartstate')
	return getAddedIds(state).map(id => ({
		...getProduct(state, id),
		quantity: getQuantity(state, id),
	}))
}
