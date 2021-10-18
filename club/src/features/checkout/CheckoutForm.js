import React, { useState, useEffect } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { CardBox, Form } from './checkout.styled'
import { TextInput } from '../../components/inputs/TextInput'
import axios from 'axios'
import Donut from '../../components/Donuts/Donut3'
import { useDispatch } from 'react-redux'
import { resetCart } from '../../actions/cartActions'
import { Button } from '../../app/app.styled'
export default function CheckoutForm(props) {
	const { succeeded, setSucceeded, shippingInfo, cart, stateCart, TotalCart, shippingType } = props
	const [error, setError] = useState(null)
	const [processing, setProcessing] = useState('')
	const [disabled, setDisabled] = useState(true)
	const [clientSecret, setClientSecret] = useState('')
	const dispatch = useDispatch()
	const stripe = useStripe()
	const elements = useElements()
	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
	console.log('API_ENDPOINT: ', API_ENDPOINT)
	const convertToUsd = n => {
		const num = n
		const dollars = num / 100
		const usd = dollars.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
		return usd
	}
	// useEffect(() => {
	// 	// Create PaymentIntent as soon as the page loads
	// 	window
	// 		.fetch('/api/payment', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
	// 		})
	// 		.then(res => {
	// 			return res.json()
	// 		})
	// 		.then(data => {
	// 			setClientSecret(data.clientSecret)
	// 		})
	// }, [])
	console.log(succeeded, 'dsdsd')
	const cardStyle = {
		style: {
			base: {
				color: '#434343',
				// border: '1px solid blue',
				fontFamily: 'Nunito',
				fontSize: '1.1em',
				width: '100%',
				fontWeight: '500',
				'::placeholder': {
					color: '#4343436a',
				},
			},
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a',
			},
		},
	}

	const handleChange = async event => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisabled(event.empty)
		setError(event.error ? event.error.message : '')
	}
	// useEffect(() => {
	// 	// Create PaymentIntent as soon as the page loads
	// 	window
	// 		.fetch(`${API_ENDPOINT}/api/payment`, {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify({
	// 				shippingInfo: shippingInfo,
	// 				cart: cart,
	// 				shippingType: shippingType,
	// 				total: TotalCart,
	// 			}),
	// 		})
	// 		.then(res => {
	// 			return res.json()
	// 		})
	// 		.then(data => {
	// 			setClientSecret(data.clientSecret)
	// 		})
	// }, [])
	const handleSubmit = async ev => {
		ev.preventDefault()

		if (!stripe || !elements) {
			return
		}
		if (error) {
			return
		}
		setProcessing(true)
		const order = await {
			cart: stateCart,
			shippingInfo: shippingInfo,
			Total: TotalCart,
		}

		const forder = await axios
			.post(`${API_ENDPOINT}/api/orders/`, order)
			.then(res => {
				console.log(order, 'here')
				return res.data
			})
			.catch(err => {
				return console.log(err)
			})

		const { clientSecret } = await fetch(`${API_ENDPOINT}/api/payment`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				shippingInfo: shippingInfo,
				cart: cart,
				shippingType: shippingType,
				total: TotalCart,
			}),
		}).then(res => {
			return res.json('should i....')
		})

		const payload = await stripe.confirmCardPayment(clientSecret, {
			receipt_email: shippingInfo.email,

			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					email: shippingInfo.email,
				},
			},
		})

		if (payload.error && !forder) {
			setError(`Payment failed ${payload.error.message}`)
			setProcessing(false)
			console.log(payload.error.message, 'ERR')
		} else if (forder) {
			setError(null)
			setProcessing(false)
			setSucceeded(true)

			// dispatch(resetCart())
			console.log(payload, forder, 'wanna add?')
		}
	}
	return (
		<Form id='payment-form' onSubmit={handleSubmit}>
			<CardBox>
				<CardElement id='card-element' options={cardStyle} onChange={handleChange} />
			</CardBox>
			<Button disabled={processing || disabled || succeeded} id='submit'>
				<span id='button-text'>
					{processing ? (
						<div className='spinner' id='spinner'></div>
					) : (
						`Pay ${convertToUsd(TotalCart)} Now`
					)}
				</span>
			</Button>
			{/* Show any error that happens when processing the payment */}
			{error && (
				<div className='card-error' role='alert'>
					{error}
				</div>
			)}
			{/* Show a success message upon completion */}
			{succeeded && (
				<p className={succeeded ? 'result-message' : 'result-message hidden'}>
					Payment succeeded, see the result in your
					<a href={`https://dashboard.stripe.com/test/payments`}> Stripe dashboard.</a> Refresh the page
					to pay again.
				</p>
			)}
			{!disabled && processing && <Donut />}
		</Form>
	)
}
