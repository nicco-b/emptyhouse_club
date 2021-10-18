import {
	ADD_TO_CART,
	// UPDATE_PAGE,
} from '../actions/cartActions'

const initialState = {
	products: [],
	quantity: 0,
	total: 0,
}

// export default function foo(state = initialState, action) {
// 	switch (action.type) {
// 		case ADD_TO_CART:
// 			// const check = state.findIndex(i => i._id === action.payload._id)

// 			return {
// 				...state,
// 				products: [...state.products, action.payload],
// 			}
// 		default:
// 			return state
// 	}
// }

// const addToCart = product => {
// 	// console.log('add', cart)

// 	check === -1 ? setCart([...cart, { ...product }]) : setStatus('error')
// 	check === -1 && setStatus('success')
// }

export default function foo(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_CART: {
			// const check = state.products.findIndex(p => p._id === action.payload._id)

			// let prod = {
			// 	...action.payload,
			// 	quant: (state.products.quant += 1),
			// }

			// check === -1 ? state.products.push(prod) : console.log('null')
			// console.log(check)
			// let tot = (state.total += parseInt(action.payload.pricing.price))
			return {
				...state,
				// products: state.products,
				// quantity: (state.quantity += 1),
				// total: tot,
			}
		}

		default:
			return state
	}
}
// const findProductIndex = (cart, productID) => {
// 	return cart.findIndex(p => p._id === productID)
// }

// const updateProductUnits = (cart, product) => {
// 	const productIndex = findProductIndex(cart, product._id)

// 	const updatedCart = [...cart]
// 	const existingProduct = updatedCart[productIndex]

// 	const updatedUnitsProduct = {
// 		...existingProduct,
// 		quantity: existingProduct.quantity + cart.quantity,
// 	}

// 	updatedCart[productIndex] = updatedUnitsProduct

// 	return updatedCart
// }
