import {
	GET_ALL_PRODUCTS,
	// ADD_PAGE,
	// DELETE_PAGE,
	PRODUCTS_LOADING,
	GET_PRODUCTS_ID,
	FETCH_FAIL,
	// UPDATE_PAGE,
} from '../actions/shopActions'

const initialState = {
	products: null,
	product: null,
	loading: false,
	error: '',
}

export default function foo(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				products: action.payload,
				product: null,
				loading: false,
				error: '',
			}

		case GET_PRODUCTS_ID:
			return {
				...state,
				products: null,

				product: action.payload,
				loading: false,
				error: '',
			}
		case PRODUCTS_LOADING:
			return {
				...state,
				products: null,
				product: null,
				loading: true,
				error: '',
			}
		case FETCH_FAIL:
			return {
				...state,
				error: action.payload,
				products: null,
				product: null,
				loading: false,
			}
		default:
			return state
	}
}
