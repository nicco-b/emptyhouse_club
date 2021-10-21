import styled from 'styled-components'
import { OrderCard } from './OrderCard'
import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
const StyledOrderList = styled.div`
	display: grid;
	gap: 1em;
`
export const OrdersList = ({ orders, handleOrder }) => {
	const [id, setId] = useState('')
	// const clickO = async order => {
	// 	await handleOrder(order._id)
	// }
	return (
		<StyledOrderList>
			{orders.map(order => {
				return (
					<Link to={{ pathname: `/${order._id}` }}>
						<OrderCard key={order._id} order={order} />
					</Link>
				)
			})}
		</StyledOrderList>
	)
}
