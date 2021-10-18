import axios from 'axios'

export const GET_PAGE = 'GET_PAGE'
// export const UPDATE_HOME = 'UPDATE_HOME'

export const GET_PAGE_ID = 'GET_PAGE_ID'

// export const ADD_HOME = 'ADD_HOME'
// export const DELETE_HOME = 'DELETE_HOME'
export const PAGE_LOADING = 'PAGE_LOADING'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const getPage = () => dispatch => {
	dispatch(setPageLoading())
	axios.get(`${API_ENDPOINT}/api/pages`).then(res =>
		dispatch({
			type: GET_PAGE,
			payload: res.data,
		})
	)
}
// export const updateHome = file => dispatch => {
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
export const getPageById = id => dispatch => {
	dispatch(setPageLoading())
	console.log(API_ENDPOINT)
	axios
		.get(`${API_ENDPOINT}/api/pages/${id}`)
		.then(res =>
			dispatch({
				type: GET_PAGE_ID,
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

export const setPageLoading = () => {
	return {
		type: PAGE_LOADING,
	}
}

export const FETCH_FAIL = 'FETCH_FAIL'
export const fetchFail = error => {
	return { type: FETCH_FAIL, payload: error }
}
