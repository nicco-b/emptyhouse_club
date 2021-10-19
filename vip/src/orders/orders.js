import styled from 'styled-components'
import { OrderCard } from './OrderCard'

export const OrdersList = ({ orders }) => {
	return (
		<>
			{orders.map(order => {
				return <OrderCard key={order._id} order={order} />
			})}
		</>
	)
}
