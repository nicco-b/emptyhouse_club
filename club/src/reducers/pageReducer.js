import {
	GET_PAGE,
	// ADD_PAGE,
	// DELETE_PAGE,
	PAGE_LOADING,
	GET_PAGE_ID,
	FETCH_FAIL,
	// UPDATE_PAGE,
} from '../actions/pageActions'

const initialState = {
	page: null,
	loading: false,
	error: '',
}

export default function foo(state = initialState, action) {
	switch (action.type) {
		case GET_PAGE:
			return {
				...state,
				page: null,
				loading: false,
				error: '',
			}

		case GET_PAGE_ID:
			return {
				...state,
				page: action.payload,
				loading: false,
				error: '',
			}
		case PAGE_LOADING:
			return {
				...state,
				page: null,
				loading: true,
				error: '',
			}
		case FETCH_FAIL:
			return {
				...state,
				error: action.payload,
				page: null,
				loading: false,
			}
		default:
			return state
	}
}
