const server = require('./api/server')

const port = 2222

server.listen(port, () => {
	console.log(`listening on port ${port}`)
})
