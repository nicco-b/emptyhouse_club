import { useEffect, useState } from 'react'
import { getAllOrders, getOrder } from '../services/OrderService'

const useOrderState = () => {
	const [orders, setOrders] = useState([])
	const [selectedOrder, setSelectedOrder] = useState({})

	useEffect(() => {
		console.log('hi')
		getAllOrders().then(orderz => {
			setOrders(orderz)
		})
	}, [])

	const handleOrder = id => {
		getOrder(id).then(order => {
			setSelectedOrder(order)
		})
	}

	return [orders, selectedOrder, handleOrder]
}

export default useOrderState
