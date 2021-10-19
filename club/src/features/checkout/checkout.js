import { BasePage, BasePGrid, PageHeader, PageTitle, PageTitleBox } from '../../pages/page.styled'
import {
	BaseCart,
	CartPGrid,
	CartShipping,
	CartSumGrid,
	CartSumSubGrid,
	CartSumSubHeader,
	CartSumTitle,
	CartTitle,
	IncrementButtonBox,
} from '../cart/cart.styled'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { getQuantity } from '../../reducers/cartss'
import { Fieldz } from './checkout.styled'
import useForm from '../../hooks/useForm'
import Shipping from './Shipping'
import { Payment } from './Payment'
import { Redirect } from 'react-router'
import '../../components/inputs/textInput.css'

import { ShippingType } from './ShippingType'
import { CartSummaryContainer } from './CartSummary/CartSummaryContainer'
import { useHistory } from 'react-router-dom'
import { Arrow } from '../../components/svg/arrow'
const ShippingInfo = {
	firstName: '',
	lastName: '',
	email: '',
	address1: '',
	address2: '',
	city: '',
	state: '',
	postalCode: '',
}
const ShippingTypeInits = {
	shippingType: '50',
}

export const Checkout = () => {
	const [ShippingTypeInit, setShippingTypeInit] = useState(ShippingTypeInits)
	const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

	const cart = useSelector(state => state.cart)
	const [stateCart, setStateCart] = useState([])
	const [cartToat, setCartToat] = useState()
	const [succeeded, setSucceeded] = useState(false)
	const [prod, setProd] = useState([])
	const history = useHistory()

	const p = cart.addedIds.map(id => {
		const arr = getQuantity(cart, id.id)
		return arr
	})
	const e = p.reduce(function (acc, val) {
		return acc + val
	}, 0)

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads

		succeeded && history.push('/success')

		succeeded && history.go(0)
	}, [succeeded, history])
	useEffect(() => {
		const sub =
			stateCart &&
			stateCart.map((c, i, arr) => {
				const subd = c && getQuantity(cart, c._id) * c.pricing.price
				return subd
			})
		const total = stateCart && sub.reduce((total, sub) => total + sub, 0)
		setCartToat(total)
	}, [cart, stateCart])
	useEffect(() => {
		const getRegistrations = async event => {
			// (async () => {
			const p = cart.addedIds.map(p => p.page)
			const u = [...new Set(p)]
			const promises = u.map(p => {
				// const w = [... Set(p)]
				// console.log(w, 'omg')

				return axios.get(`${API_ENDPOINT}/api/shop/${p}`).then(res => {
					return res.data
				})
			})
			const registrations = await Promise.all(promises).then(values => {
				return values
			})

			// })
			//need more redux actions for this cart stuff

			setProd(registrations.reduce((acc, curr) => acc.concat(curr), []))
		}

		getRegistrations()
		// return function cleanup() {
		// 	setProd([])
		// }
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cart.addedIds])
	useEffect(() => {
		const getCarrt = async () => {
			const prodf = await prod
			const e = cart.addedIds.map(p => {
				return prodf.find(f => f._id === p.id)
			})

			setStateCart(e)
		}
		getCarrt()
	}, [cart.addedIds, prod])
	const [values, handleChanges, clearForm, active] = useForm(ShippingInfo)

	const [pay, setPay] = useState(false)
	const [shipping, setShipping] = useState(false)

	const inputChange = value => {
		// 🔥 STEP 10- RUN VALIDATION WITH YUP

		setShippingTypeInit({
			...ShippingTypeInit,
			shippingType: value, // NOT AN ARRAY
		})
	}
	const addNum = (num1, num2) => {
		const r = num1 + num2
		return r
	}
	const [TotalCart, setTotalCart] = useState(0)
	useEffect(() => {
		setTotalCart(addNum(+cartToat, +ShippingTypeInit.shippingType))
	}, [cartToat, ShippingTypeInit])
	return (
		<>
			{cart.addedIds.length > 0 ? (
				<BasePage>
					<BasePGrid>
						<PageHeader>
							<PageTitleBox>
								<PageTitle>
									{shipping && !pay ? (
										<IncrementButtonBox onClick={() => setShipping(false)}>
											<Arrow />
										</IncrementButtonBox>
									) : pay ? (
										<IncrementButtonBox onClick={() => setPay(false)}>
											<Arrow />
										</IncrementButtonBox>
									) : (
										<IncrementButtonBox onClick={() => history.goBack()}>
											<Arrow />
										</IncrementButtonBox>
									)}
									<div style={{ display: 'grid' }}>CHECKOUT</div>
								</PageTitle>
							</PageTitleBox>
						</PageHeader>
						<BaseCart>
							<CartPGrid>
								{cart.addedIds.length > 0 && (
									<CartSummaryContainer
										pay={pay}
										stateCart={stateCart}
										cart={cart}
										cartToat={cartToat}
										e={e}
										shippingType={ShippingTypeInit}
									/>
								)}

								{shipping && (
									<CartShipping>
										<CartSumGrid>
											<CartSumTitle>
												<CartTitle>Shipping details</CartTitle>{' '}
											</CartSumTitle>
											<CartSumSubGrid>
												<CartSumSubHeader>
													name <div> {`${values.firstName} ${values.lastName}`}</div>
												</CartSumSubHeader>
												<CartSumSubHeader>
													address{' '}
													<div>
														<div> {`${values.address1} ${values.address2}`}</div>
														<div> {`${values.city} ${values.state},  ${values.postalCode}`}</div>
													</div>
												</CartSumSubHeader>
											</CartSumSubGrid>
										</CartSumGrid>
									</CartShipping>
								)}
								<Fieldz>
									{shipping && !pay && (
										<ShippingType
											ShippingTypeInit={ShippingTypeInit}
											setShippingTypeInit={setShippingTypeInit}
											change={inputChange}
											setPay={setPay}
										/>
									)}

									<PageTitle>{pay ? 'PAYMENT' : !shipping && 'SHIPPING'}</PageTitle>

									{!pay && !shipping && (
										<Shipping
											active={active}
											setShipping={setShipping}
											values={values}
											handleChanges={handleChanges}
											clearForm={clearForm}
										/>
									)}

									{pay && (
										<>
											<Payment
												cart={cart}
												shippingInfo={values}
												succeeded={succeeded}
												setSucceeded={setSucceeded}
												stateCart={stateCart}
												TotalCart={TotalCart}
												shippingType={ShippingTypeInit}
											/>
										</>
									)}
								</Fieldz>
							</CartPGrid>
						</BaseCart>
					</BasePGrid>
				</BasePage>
			) : (
				<Redirect to={'/'} />
			)}
		</>
	)
}
