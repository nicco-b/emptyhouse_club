const router = require('express').Router()
const stripe = require('stripe')(
	'sk_test_51ISdngLe6nBHbc2ZMb6KYpMSUlT4Srbeim1NAsstEspOwpUXxCX2pSTvGZLVb9RIaJvpj2u0MvbmSx0HyaWKw0xs00BgGP8CC2'
)
app.post(
	'/create-payment-intent',

	async (req, res) => {
		const { items } = req.body
		console.log('server', req.body)
		const paymentIntent = await stripe.paymentIntents.create({
			amount: calculateOrderAmount(items),
			currency: 'usd',
			payment_method_types: ['card'],
		})

		const paymentIntents = await stripe.paymentIntents.list({
			limit: 1,
		})
		paymentIntents.data.map(amount => console.log(amount.amount))
		res.send({
			publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
			clientSecret: paymentIntent.client_secret,
			id: paymentIntent.id,
		})
		cors({
			origin: '*',
		})
	}
)

module.exports = router
