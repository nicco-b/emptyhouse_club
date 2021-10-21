import { OrdersList } from './orders'

export const OrdersContainer = ({ orders, handleOrder }) => {
	// useEffect(() => {
	// 	axios.get(`https://assets.emptyhouseclub.com/api/orders/all`).then(orders => {
	// 		return setOrders(orders.data)
	// 	})
	// }, [])
	return <OrdersList orders={orders} handleOrder={handleOrder} />
}
