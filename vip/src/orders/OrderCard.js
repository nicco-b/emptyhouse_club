import { SOrderCard } from './OrderCard.styled'

export const OrderCard = ({ order }) => {
	return (
		<SOrderCard>
			order id: {order._id}
			<div>
				name:
				{order.shippingInfo.firstName} {order.shippingInfo.lastName}
				{order.cart.map(item => {
					return item.amount
				})}
			</div>
		</SOrderCard>
	)
}
