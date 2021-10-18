import {
	ADD_TO_CART,
	CHECKOUT_REQUEST,
	CHECKOUT_FAILURE,
	REMOVE_FROM_CART,
	REMOVE_CART,
	RESET_CART,
} from '../actions/cartActions'

const initialState = {
	addedIds: [],
	quantityById: {},
}
// const removeFromCart = (state = initialState.addedIds, action) => {
// 	switch (action.type) {
// 		case REMOVE_FROM_CART:
// 			return {
// 				...state,
// 				addedIds: state.addedIds.filter(item => item._id !== action.payload._id),
// 			}
// 		default:
// 			return state
// 	}
// }
const addedIds = (state = initialState.addedIds, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			//map first to check if already there...
			const r = state.map(i => i.id)
			console.log(r, 'rr')
			//if id is there already do nothing...
			if (r.indexOf(action.product._id) !== -1) {
				return state
			}

			return [...state, { id: action.product._id, page: action.product.page }]
		// case REMOVE_FROM_CART:
		// 	if (state) {
		// 		console.log(action)
		// 		return state
		// 	}
		// 	return state

		default:
			return state
	}
}

const quantityById = (state = initialState.quantityById, action) => {
	const { product } = action

	switch (action.type) {
		case ADD_TO_CART:
			return { ...state, [product._id]: (state[product._id] || 0) + 1 }
		case REMOVE_FROM_CART:
			if (state[product._id] < 1) {
				console.log(state[product._id], 'sdfsdfsdf', state, 'dsdf')
				return {
					...state,
					[product._id]: (state[product._id] || 0) - 1,
				}
			}

			return {
				...state,
				[product._id]: (state[product._id] || 0) - 1,
			}
		// case REMOVE_CART:
		// 	if (state[product._id] < 1) {
		// 		delete [product._id]
		// 		return {
		// 			state,
		// 		}
		// 	}

		// 	return {
		// 		...state,
		// 		[product._id]: (state[product._id] || 0) - 1,
		// 	}
		default:
			return state
	}
}

export const getQuantity = (state, productId) => state.quantityById[productId] || 0
// export const getCartQuantity = state => {
// 	const p = state.addedIds.map(id => {
// 		const arr = getQuantity(cart, id)
// 		return arr
// 	})
// 	const e = p.reduce(function (acc, val) {
// 		return acc + val
// 	}, 0)
// 	return e
// }
export const getAddedIds = state => state.addedIds

// const removeCart = (state = initialState, action) => {

// 	switch (action.type) {
// 		case REMOVE_FROM_CART:
// 			const {product} = action
// 			if (state[product._id] < 1) {
// 				console.log(state[product._id], 'sdfsdfsdf', state, 'dsdf')
// 				return {
// 					...state,
// 				}
// 			}
// 			return {
// 				...state,
// 				[product._id]: (state[product._id] || 0) - 1,
// 			}
// 		default:
// 			return state
// 	}
// }
// const removeCart = (state = initialState, action) => {

// 	switch (action.type) {
// 		case REMOVE_FROM_CART:
// 			const {product} = action
// 			if (state[product._id] < 1) {
// 				console.log(state[product._id], 'sdfsdfsdf', state, 'dsdf')
// 				return {
// 					...state,
// 				}
// 			}
// 			return {
// 				...state,
// 				[product._id]: (state[product._id] || 0) - 1,
// 			}
// 		default:
// 			return state
// 	}
// }

const cart = (state = initialState, action) => {
	switch (action.type) {
		case CHECKOUT_REQUEST:
			return initialState
		case CHECKOUT_FAILURE:
			return action.cart
		case REMOVE_CART:
			const { product } = action
			let newItems = { ...state.quantityById } // Copy the object
			delete newItems[product._id]
			return {
				...state,
				quantityById: newItems,

				addedIds: state.addedIds.filter(i => i.id !== product._id),
				// quantityById: Object.keys(state.quantityById).reduce((obj, key) => {
				// 	console.log(product, key, 'ks')
				// 	if (key !== product._id) {
				// 		return (obj[key] = { ...state.quantityById[product._id])
				// 	}
				// 	return state
				// }, {}),
			}
		case RESET_CART:
			return {
				addedIds: initialState.addedIds,
				quantityById: initialState.quantityById,
			}
		// case REMOVE_FROM_CART:
		// 	return {
		// 		...state,
		// 		addedIds: state.addedIds.filter(item => item._id !== action.payload),
		// 		// quantityById: state.quantityById.filter(item => item._id !== action.payload._id),
		// 	}
		// case REMOVE_FROM_CART:
		// 	const { product } = action
		// 	if (state.quantityById[product._id] < 1) {
		// 		console.log(state.quantityById[product._id], 'sdfsdfsdf', state, 'dsdf')
		// 		return {
		// 			...state,
		// 			// addedIds: state.addedIds.filter(item => item.id !== product._id),
		// 		}
		// 	}
		// 	return {
		// 		...state,
		// 		quantityById: { [product._id]: (state.quantityById[product._id] || 0) - 1 },
		// 	}
		// case REMOVE_CART:
		// 	return {
		// 		...state,
		// 		addedIds: state.addedIds.filter(item => item.id === action.payload),
		// 	}
		default:
			return {
				addedIds: addedIds(state.addedIds, action),
				quantityById: quantityById(state.quantityById, action),
			}
	}
}

export default cart
