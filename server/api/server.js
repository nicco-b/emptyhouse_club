const express = require('express')
const cors = require('cors')
const server = express()
const db = require('../db')
const favicon = require('serve-favicon')
const path = require('path')
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})
server.use(express.static(path.join(__dirname, 'assets')))
server.use(favicon(path.join(__dirname, 'assets', 'assets.emptyhouseclub.svg')))
server.use(express.json())

server.all('*', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
	)
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
})
db.connectToServer(function (err) {
	if (err) console.error(err)
})
//ROUTES
const pagesRouter = require('./pages/pages-router')
const shopRouter = require('./shop/shop-router')
const payment = require('./shop/payment')
const orders = require('./orders/orders')
const artists = require('./artists/artists')

const { application } = require('express')

server.use(
	'/api/pages',
	cors({
		origin: '*',
	}),
	pagesRouter
)
server.use(
	'/api/shop',
	cors({
		origin: '*',
	}),
	shopRouter
)
//hi
server.use(
	'/api/payment',
	cors({
		origin: '*',
	}),
	payment
)
server.use(
	'/api/orders',
	cors({
		origin: '*',
	}),
	orders
)

server.use(
	'/api/artists',
	cors({
		origin: '*',
	}),
	artists
)
server.get('/', (req, res) => {
	res.status(200).json('assets.emptyhouseclub.com v1.02')
})

server.use('*', (req, res, next) => {
	next({ status: 404, message: 'not found!' })
})
server.use((err, req, res, next) => {
	// eslint-disable-line
	res.status(err.status || 500).json({
		message: err.message,
		stack: err.stack,
	})
})

module.exports = server
