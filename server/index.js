require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` })

const server = require('./api/server')

const port = 2222

server.listen(port, () => {
	console.log(`open on port ${port}`)
})
