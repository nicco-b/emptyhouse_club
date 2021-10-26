const { MongoClient } = require('mongodb')
const db = process.env.DB_URI
const client = new MongoClient(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

var _db

module.exports = {
	connectToServer: async function (callback) {
		client.connect(function (err, db) {
			// Verify we got a good "db" object
			if (db) {
				_db = db.db(process.env.DB_NAME)
				console.log('mongoDb good')
			}
			return callback(err)
		})
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
