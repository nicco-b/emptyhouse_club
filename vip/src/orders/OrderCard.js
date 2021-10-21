import { LongId, LongName, ShortBox, SOrderCard } from './OrderCard.styled'

export const OrderCard = ({ order }) => {
	const convertToUsd = n => {
		const num = n
		const dollars = num / 100
		const usd = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		return usd
	}
	const getTotalItems = order => {
		const amount = order.cart.map(ea => {
			return ea.amount
		})
		const T = amount.reduce((a, b) => a + b, 0)
		return T
	}
	return (
		<SOrderCard>
			<LongId>#{order._id}</LongId>
			<LongName>
				{order.shippingInfo.firstName} {order.shippingInfo.lastName}
			</LongName>
			<ShortBox>{getTotalItems(order)}</ShortBox>
			<ShortBox>{convertToUsd(order.Total)}</ShortBox>
		</SOrderCard>
	)
}
