const express = require('express')
const router = express.Router()
const db = require('../../db')
const ObjectId = require('mongodb').ObjectId

// router.get('/:category', (req, res) => {
// 	let db_connect = db.getDb('emptyhouseclub')
// 	console.log(req.params)
// 	db_connect
// 		.collection('products')
// 		.find({ page: req.params.category })
// 		.toArray(function (err, result) {
// 			// if (err) throw err
// 			// res.status(200).json(result)
// 			if (err) throw err
// 			console.log(err)
// 			if (!result) {
// 				res.status(404).json({ error: 'no products here' })
// 			} else {
// 				res.status(200).json(result)
// 			}
// 		})
// })

router.get('/:category', async (req, res) => {
	const id = await req.params.id
	// console.log(req.params)
	const agg = await [
		{
			$lookup: {
				from: 'pages',
				localField: 'page',
				foreignField: 'pageTitle',
				as: 'parentPage',
			},
		},
		{ $unwind: '$parentPage' },

		{
			$project: {
				title: '$title',
				description: '$description',
				artists: '$artists',
				page: '$page',
				shipping: '$shipping',
				quantity: '$quantity',
				pricing: '$pricing',
				productImages: '$productImages',
				thumbnail: '$thumbnail',
				parentPage: '$parentPage',
				live: '$parentPage.live',
			},
		},
		{
			$match: { page: req.params.category, live: true },
		},
	]

	let db_connect = db.getDb('emptyhouseclub')

	await db_connect
		.collection('products')
		.aggregate(agg)
		.toArray(function (err, result) {
			if (!result) {
				res.status(404).json('p not found')
			} else if (result.length < 1) {
				res.status(404).json('not found')
			} else {
				// console.log(result)
				res.status(200).json(result)
			}
		})
	// for await (const doc of aggCursor) {

	// }
})

router.get('/:category/:id', async (req, res) => {
	const id = await req.params.id

	function checkId(ids) {
		if (ObjectId.isValid(`${ids}`)) {
			return ObjectId(ids)
		} else res.status(404).json('poo')
	}

	let newId = ''
	// if (!ObjectId.isValid(`${id}`)) {
	// 	res.status(404).json('invalid id')
	// }
	const agg = [
		{
			$lookup: {
				from: 'pages',
				localField: 'page',
				foreignField: 'pageTitle',
				as: 'parentPage',
			},
		},
		{
			$match: { page: req.params.category, _id: checkId(id) },
		},
		{ $unwind: '$parentPage' },
	]

	let db_connect = db.getDb('emptyhouseclub')

	// const query = { page: req.params.category, _id: ObjectId(req.params.id) }
	const aggCursor = await db_connect.collection('products').aggregate(agg)
	for await (const doc of aggCursor) {
		if (!doc.parentPage.live) {
			res.status(404).json('p not found')
		} else if (doc) {
			// console.log(doc)
			res.status(200).json(doc)
		}
	}
	// console.log(db_connect.collection('products').aggregate(agg))
	// db_connect.collection('products').findOne(query, function (err, result) {
	// 	if (err) throw err
	// 	console.log(err)
	// 	if (!result) {
	// 		res.status(404).json({ error: 'page not found' })
	// 	} else {
	// 		console.log(result)
	// 		res.status(200).json(result)
	// 	}
	// })
})
module.exports = router
