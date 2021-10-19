const express = require('express')
const router = express.Router()
const db = require('../../db')

router.get('/all', async (req, res) => {
	let db_connect = db.getDb('emptyhouseclub')

	const cursor = await db_connect.collection('orders').find({}).toArray()
	if (cursor) {
		res.status(200).json(cursor)
	}
})

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
		let db_connect = await db.getDb('emptyhouseclub')
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
		return a3
	} catch (err) {
		return console.log(err)
	}
}

router.post('/', async (req, res) => {
	const { cart, Total, shippingInfo } = req.body
	const newCart = await {
		Total: Total,
		cart: await calculateOrderAmount(cart),
		shippingInfo: shippingInfo,
	}
	// console.log('Total: ', Total)
	// console.log('order: ', newCart)
	let db_connect = db.getDb('emptyhouseclub')

	await db_connect.collection('orders').insertOne(newCart, function (error, result) {
		if (error) {
			res.status(500).json(error)
		} else {
			res.status(200).json(result)
		}
	})
})
module.exports = router
