const express = require('express')
const router = express.Router()
const db = require('../../db')

router.get('/', async (req, res) => {
	let db_connect = db.getDb('emptyhouseclub')

	const cursor = await db_connect.collection('artists').find({}).toArray()
	if (cursor) {
		res.status(200).json(cursor)
	}
})

module.exports = router
