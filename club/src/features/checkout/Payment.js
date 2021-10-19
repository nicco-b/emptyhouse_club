import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

export const Payment = ({
	succeeded,
	setSucceeded,
	shippingInfo,
	cart,
	stateCart,
	TotalCart,
	shippingType,
}) => {
	const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

	return (
		<div>
			<Elements
				stripe={promise}
				options={{
					fonts: [
						{
							cssSrc:
								'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&display=swap',
						},
					],
				}}>
				<CheckoutForm
					shippingType={shippingType.shippingType}
					shippingInfo={shippingInfo}
					cart={cart}
					succeeded={succeeded}
					setSucceeded={setSucceeded}
					stateCart={stateCart}
					TotalCart={TotalCart}
				/>
			</Elements>
		</div>
	)
}
