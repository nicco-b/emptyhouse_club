import styled from 'styled-components'
import { OrderCard } from './OrderCard'
import { Link } from 'react-router-dom'
const StyledOrderList = styled.div`
	display: grid;
	gap: 1em;
	background-color: #f1f1f1;
	/* padding: 1em; */
	border-radius: 4px;
`
const OrdersHeader = styled.div`
	display: flex;
	justify-content: space-around;
	padding-bottom: 1em;
`
const OrdersQueryBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
`
const BoxAlt = styled.div`
	/* background-color: aliceblue; */
	&:nth-child(odd) {
		background-color: #fcf9f9;
	}
`

const OrdersLiisst = styled.div`
	display: grid;
	/* gap: 1em; */
	margin: 0.5em;
	padding: 0.5em;
	background-color: #d8d8d839;
`
const Tab = styled.div`
	font-size: 1.1em;
	font-weight: 500;
	display: grid;
	justify-content: center;
	cursor: pointer;
	padding: 1em;
	width: 100%;
	color: ${props => (props.active ? '#030872' : 'grey')};
	text-decoration: ${props => (props.active ? 'underline' : 'none')};
	/* outline: 0.1px solid #d2d2d2; */
	/* background-color: ${props => (props.active ? '#e7e9d8' : 'grey')}; */
	&:first-child {
		border-radius: 4px 0px 0px 0px;
	}
	&:last-child {
		border-radius: 0px 4px 0px 0px;
	}
`
export const OrdersList = ({ orders, handleOrder }) => {
	// const clickO = async order => {
	// 	await handleOrder(order._id)
	// }
	return (
		<StyledOrderList>
			<OrdersQueryBox>
				<Tab>pending</Tab>
				{/* <Tab>failed</Tab> */}
				<Tab active>completed</Tab>
			</OrdersQueryBox>

			<OrdersLiisst>
				<OrdersHeader>
					<div>order</div>
					<div>name</div>
					<div>qty</div>
					<div>total</div>
					<div>status</div>
				</OrdersHeader>
				{orders.map(order => {
					return (
						<BoxAlt>
							<Link to={{ pathname: `/${order._id}` }}>
								<OrderCard key={order._id} order={order} />
							</Link>
						</BoxAlt>
					)
				})}
			</OrdersLiisst>
		</StyledOrderList>
	)
}
