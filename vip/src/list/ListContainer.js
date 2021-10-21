import { OrdersContainer } from '../orders/ordersContainer'
import { MainMiddle } from './ListContainer.styled'

export const ListContainer = ({ orders, handleOrder }) => {
	return (
		<MainMiddle>
			<OrdersContainer orders={orders} handleOrder={handleOrder} />
		</MainMiddle>
	)
}
