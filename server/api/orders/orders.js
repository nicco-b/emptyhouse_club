const express = require('express')
const router = express.Router()
const db = require('../../db')

router.post('/', async (req, res) => {
	const order = req.body
	console.log('order: ', order)
	let db_connect = db.getDb('emptyhouseclub')

	await db_connect.collection('orders').insertOne(order, function (error, result) {
		if (error) {
			res.status(500).json(error)
		} else {
			res.status(200).json(result)
		}
	})
})
module.exports = router
