import axios from 'axios'

export const getAllOrders = () => {
	console.log('sdf')
	return axios.get(`http://localhost:2222/api/orders/all`).then(orders => {
		return orders.data
	})
}

export const getOrder = id => {
	return axios.get(`http://localhost:2222/api/orders/${id}`).then(orders => {
		return orders.data
	})
}
