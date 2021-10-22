// //MONGODB
// const { MongoClient } = require('mongodb')
// const env = process.env.NODE_ENV || 'development';
// const uri =
// 	'mongodb+srv://niccob:Goldlight1!@realmcluster.olens.mongodb.net/?retryWrites=true&w=majority'
// // const client = new MongoClient(uri)

// // async function run() {
// // 	try {
// // 		// Connect the client to the server
// // 		await client.connect()

// // 		// // Establish and verify connection
// // 		// await client.db('emptyhouseclub').command({ ping: 1 })
// // 		console.log('Database Connected')
// // 		await listDatabases(client)
// // 	} finally {
// // 		// Ensures that the client will close when you finish/error
// // 		await client.close()
// // 	}
// // }
// // async function listDatabases(client) {
// // 	databasesList = await client.db().admin().listDatabases()

// // 	console.log('Databases:')
// // 	databasesList.databases.forEach(db => console.log(` - ${db.name}`))
// // }

// // run().catch(console.dir)

// function connect(callback){
//     MongoClient.connect(uri, (err, db) => {
//         mongodb = db;
//         callback();
//     });
// }
// function get(){
//     return mongodb;
// }

// function close(){
//     mongodb.close();
// }

// module.exports = {
//     connect,
//     get,
//     close
// }
const { MongoClient } = require('mongodb')
const Db = process.env.DB_URI
const client = new MongoClient(Db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

var _db

module.exports = {
	connectToServer: function (callback) {
		client.connect(function (err, db) {
			// Verify we got a good "db" object
			if (db) {
				_db = db.db('emptyhouseclub')
				console.log('mongoDb good')
			}
			return callback(err)
		})
	},
	disconnectDB: function () {
		return _db.close()
	},
	getDb: function () {
		return _db
	},
	listDatabases: function () {
		databasesList = client.db().admin().listDatabases()

		console.log('Databases:')
		databasesList.databases.forEach(db => console.log(` - ${db.name}`))
	},
}
