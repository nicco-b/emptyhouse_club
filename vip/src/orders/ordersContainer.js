import { OrdersList } from './orders'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useOrderState from '../hooks/useOrderState'
export const OrdersContainer = ({ orders, handleOrder }) => {
	// useEffect(() => {
	// 	axios.get(`https://assets.emptyhouseclub.com/api/orders/all`).then(orders => {
	// 		return setOrders(orders.data)
	// 	})
	// }, [])
	return <OrdersList orders={orders} handleOrder={handleOrder} />
}
