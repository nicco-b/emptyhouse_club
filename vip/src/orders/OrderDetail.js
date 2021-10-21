import useOrderState from '../hooks/useOrderState'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { OrderDBox, OrderDeets } from './orderDetails.styled'
export const OrderDetail = ({ selectedOrder }) => {
	const [ord, setOrd] = useState({})
	const { id } = useParams()
	const history = useHistory()
	const getOrder = () => {
		return axios.get(`http://localhost:2222/api/orders/${id}`).then(orders => {
			return setOrd(orders.data)
		})
	}
	useEffect(() => {
		getOrder()
	}, [])

	return (
		<>
			<OrderDeets>
				<button onClick={() => history.goBack()}>back</button>

				{ord.shippingInfo && (
					<OrderDBox>
						{/* <div>{ord._id}</div> */}
						<div>
							{ord.shippingInfo.firstName} {ord.shippingInfo.lastName}
						</div>
						<div>{ord.shippingInfo.email}</div>
						<div>{ord.shippingInfo.address1}</div>
						<div>{ord.shippingInfo.address2}</div>
						<div>
							{ord.shippingInfo.city}, {ord.shippingInfo.state} {ord.shippingInfo.postalCode}
						</div>
						<div></div>
						<div></div>
					</OrderDBox>
				)}
				{ord.cart &&
					ord.cart.map(ea => {
						return (
							<OrderDBox>
								<div>{ea.title}</div>

								<div>quantity: {ea.amount}</div>
							</OrderDBox>
						)
					})}
				{/* <div>total: {ord.Total} items</div> */}
			</OrderDeets>
		</>
	)
}
