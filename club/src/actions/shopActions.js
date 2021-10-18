import axios from 'axios'

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
// export const UPDATE_HOME = 'UPDATE_HOME'

export const GET_PRODUCTS_ID = 'GET_PRODUCTS_ID'

// export const ADD_HOME = 'ADD_HOME'
// export const DELETE_HOME = 'DELETE_HOME'
export const PRODUCTS_LOADING = 'PRODUCTS_LOADING'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const getAllProducts = id => dispatch => {
	dispatch(setProductsLoading())
	axios.get(`${API_ENDPOINT}/api/shop/${id}`).then(res =>
		dispatch({
			type: GET_ALL_PRODUCTS,
			payload: res.data,
		})
	)
}
/// export const updateHome = file => dispatch => {
// 	console.log('item: ', file)
// 	// console.log(formData)

// 	axios
// 		.put(`${API_ENDPOINT}/api/home/${file._id}`, file)
// 		.then(res =>
// 			dispatch({
// 				type: UPDATE_HOME,
// 				payload: file,
// 			})
// 		)
// 		.catch(error => {
// 			console.log(error)
// 		})
// }
export const getProductById = (id, category) => dispatch => {
	dispatch(setProductsLoading())
	axios
		.get(`${API_ENDPOINT}/api/shop/${category}/${id}`)
		.then(res =>
			dispatch({
				type: GET_PRODUCTS_ID,
				payload: res.data,
			})
		)
		.catch(err => {
			dispatch(fetchFail(err))
		})
}
// export const addHome = home => dispatch => {
// 	// console.log(formData)

// 	axios
// 		.post(`${API_ENDPOINT}/api/home`, home)

// 		.then(res =>
// 			dispatch({
// 				type: ADD_HOME,
// 				payload: res.data,
// 			})
// 		)
// }
// export const deleteHome = id => dispatch => {
// 	axios.delete(`${API_ENDPOINT}/api/home/${id}`).then(res =>
// 		dispatch({
// 			type: DELETE_HOME,
// 			payload: id,
// 		})
// 	)
// }

export const setProductsLoading = () => {
	return {
		type: PRODUCTS_LOADING,
	}
}

export const FETCH_FAIL = 'FETCH_FAIL'
export const fetchFail = error => {
	return { type: FETCH_FAIL, payload: error }
}
