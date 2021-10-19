const express = require('express')
const router = express.Router()
const db = require('../../db')
const ObjectId = require('mongodb').ObjectId
router.get('/', (req, res) => {
	let db_connect = db.getDb('emptyhouseclub')
	// console.log(req)
	db_connect
		.collection('pages')
		.find({ parent: /^pages/ })
		.toArray(function (err, result) {
			if (err) throw err
			res.status(200).json(result)
		})
})
router.get('/:id', (req, res) => {
	let db_connect = db.getDb('emptyhouseclub')
	// console.log(req.params)
	let query = { pageTitle: req.params.id, live: true }
	db_connect.collection('pages').findOne(query, function (err, result) {
		if (err) {
			console.log(err)
		}
		if (!result) {
			res.status(404).json({ error: 'page not found' })
		} else {
			res.status(200).json(result)
		}
	})
})
module.exports = router
