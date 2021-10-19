import { OrdersList } from './orders'
import axios from 'axios'
import { useEffect, useState } from 'react'
export const OrdersContainer = () => {
	const [orders, setOrders] = useState([])
	useEffect(() => {
		axios.get(`https://assets.emptyhouseclub.com/api/orders/all`).then(orders => {
			return setOrders(orders.data)
		})
	}, [])
	return <OrdersList orders={orders} />
}
