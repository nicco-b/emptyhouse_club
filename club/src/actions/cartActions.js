import { getAllProducts } from './shopActions'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const REMOVE_CART = 'REMOVE_CART'
export const RESET_CART = 'RESET_CART'

export const ADD_QUANTITY = 'ADD_QUANTITY'
export const SUB_QUANTITY = 'SUB_QUANTITY'
export const EMPTY_CART = 'EMPTY_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
// export const addToCart = product => {
// 	// console.log(id)
// 	return {
// 		type: ADD_TO_CART,
// 		payload: product,
// 	}
// }
const addToCartUnsafe = product => ({
	type: ADD_TO_CART,
	product,
})
export const removeFromCart = product => ({
	type: REMOVE_FROM_CART,
	product,
})

export const removeCart = product => ({
	type: REMOVE_CART,
	product,
})
export const resetCart = product => ({
	type: RESET_CART,
	product,
})

export const addToCart = product => (dispatch, getState) => {
	if (product) {
		dispatch(addToCartUnsafe(product))
	}
}
//   export const removeFromCart = id => {
//     return {
//       type: REMOVE_FROM_CART,
//       id,
//     };
//   };
//   export const subtractQuantity = id => {
//     return {
//       type: SUB_QUANTITY,
//       id,
//     };
//   };
//   export const addQuantity = id => {
//     return {
//       type: ADD_QUANTITY,
//       id,
//     };
//   };
//   export const emptyCart = () => {
//     return {
//       type: EMPTY_CART,
//     };
//   };
export const checkout = products => (dispatch, getState) => {
	const { cart } = getState()

	dispatch({
		type: CHECKOUT_REQUEST,
	})
	getAllProducts(products, () => {
		dispatch({
			type: CHECKOUT_SUCCESS,
			cart,
		})
		// Replace the line above with line below to rollback on failure:
		// dispatch({ type: types.CHECKOUT_FAILURE, cart })
	})
}
