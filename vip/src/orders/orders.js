import styled from 'styled-components'
import { OrderCard } from './OrderCard'
import { Link } from 'react-router-dom'
const StyledOrderList = styled.div`
	display: grid;
	gap: 1em;
`
export const OrdersList = ({ orders, handleOrder }) => {
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
