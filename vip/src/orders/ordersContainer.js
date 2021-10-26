import { OrdersList } from './orders'
import { OrderSummary } from './OrdersSummary'

export const OrdersContainer = ({ orders, handleOrder }) => {
	// useEffect(() => {
	// 	axios.get(`https://assets.emptyhouseclub.com/api/orders/all`).then(orders => {
	// 		return setOrders(orders.data)
	// 	})
	// }, [])
	return (
		<>
			<OrderSummary orders={orders} />
			<OrdersList orders={orders} handleOrder={handleOrder} />
		</>
	)
}
