import axios from 'axios'
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
export const getAllOrders = () => {
	return axios.get(`${API_ENDPOINT}/api/orders/all`).then(orders => {
		return orders.data
	})
}

export const getOrder = id => {
	return axios.get(`${API_ENDPOINT}/api/orders/${id}`).then(orders => {
		return orders.data
	})
}
