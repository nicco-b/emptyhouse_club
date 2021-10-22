const express = require('express')
const router = express.Router()
const db = require('../../db')
const stripe = require('stripe')(process.env.STRIPE_SECRET)

const ObjectId = require('mongodb').ObjectId
const getQuantity = (arr, id) => {
	const s = Object.entries(arr).map(([k, v]) => {
		return {
			id: k,
			amount: v,
		}
	})
	return s
}
//readall

const getCartProducts = async cart => {
	try {
		let db_connect = await db.getDb()
		const mapped = await getQuantity(cart.quantityById)
		// console.log(mapped, 'mapped')
		const ids = mapped.map(id => ObjectId(id.id))
		const arr = await db_connect
			.collection('products')
			.find({ _id: { $in: ids } })
			.toArray()
		// console.log(arr, 'top') //isgood
		return arr
	} catch (err) {
		console.log(err)
	}
}

const calculateOrderAmount = async (cart, shippingType) => {
	// const Prods = function (arr, callback) {
	// 	const we = db_connect.collection('products').find({ _id: { $in: arr } })
	// 	we.toArray(function (err, result) {
	// 		callback(err, result)
	// 	})
	// }

	// getCartProducts(cart, getarr)
	try {
		const s = await getCartProducts(cart)
		// console.log(s, 's') //is good
		const a1 = await getQuantity(cart.quantityById)
		// console.log(a1, 'a1') //this is showing [
		// 	{ id: '61653075b1464786c699e348', amount: 1 },
		// 	{ id: '61615e2ab1464786c699e310', amount: 6 }
		//   ]
		const a3 = await a1.map(t1 => ({
			...t1,
			...s.find(t2 => JSON.stringify(t1.id) === JSON.stringify(t2._id)),
		}))
		// console.log(a3, 'a3')

		const amt = await a3.map(ea => ea.amount * ea.pricing.price)
		// console.log(amt, 'amt')
		const sum = await amt.reduce((partial_sum, a) => partial_sum + a, 0)
		// console.log(shippingType)
		const newSum = +sum + +shippingType
		// console.log('newSum: ', newSum)
		return newSum
	} catch (err) {
		return console.log(err)
	}
	// } finally {
	// 	// with initial value to avoid when the array is empty
	// 	// Replace this constant with a calculation of the order's amount
	// 	// Calculate the order total on the server to prevent
	// 	// people from directly manipulating the amount on the client
	// 	// console.log(cursor ? cursor : 'L')

	// 	// Prods(ids, function (err, result) {
	// 	// 	const arr = result.map(r => (amount = r.pricing.price))
	// 	// 	function add(accumulator, a) {
	// 	// 		return accumulator + a
	// 	// 	}
	// 	// 	return console.log(arr.reduce(add, 0))
	// 	// })
	// 	return 100
	// }
}

router.post('/', async (req, res) => {
	try {
		const { cart, shippingInfo, shippingType, total } = req.body
		const paymentIntent = await stripe.paymentIntents.create({
			amount: await calculateOrderAmount(cart, shippingType),
			currency: 'usd',
		})
		res.send({
			clientSecret: paymentIntent.client_secret,
			id: paymentIntent.id,
		})
	} catch (error) {
		console.log(error, 'pI err')
		res.status(500).json(error)
	}
})
module.exports = router
