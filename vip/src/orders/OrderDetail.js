import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import UpdateIconRed from '../updatediconred'
import UpdateIcon from '../updatedicon'
import { MainMiddle } from '../list/ListContainer.styled'

import { BackButton, OrderDBox, OrderDeets, StatusBox } from './orderDetails.styled'
import { StyledOrderList } from './orders'
export const OrderDetail = ({ selectedOrder }) => {
	const [ord, setOrd] = useState({})
	const { id } = useParams()
	const history = useHistory()
	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

	useEffect(() => {
		axios.get(`${API_ENDPOINT}/api/orders/${id}`).then(orders => {
			return setOrd(orders.data)
		})
	}, [id, API_ENDPOINT])

	return (
		<MainMiddle>
			<BackButton onClick={() => history.goBack()}>back</BackButton>
			<StyledOrderList>
				<OrderDeets>
					{ord.status && ord.status === 'succeeded' ? (
						<StatusBox>
							<UpdateIcon /> {ord.status}
						</StatusBox>
					) : (
						<StatusBox>
							<UpdateIconRed /> {ord.status === 'requires_payment_method' ? 'payment failed' : ord.status}
						</StatusBox>
					)}
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
			</StyledOrderList>
		</MainMiddle>
	)
}
