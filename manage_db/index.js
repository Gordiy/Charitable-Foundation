const AdminJS = require('adminjs')
const AdminJSSequelize = require('@adminjs/sequelize')
const {sequelize} = require('./models');


AdminJS.registerAdapter(AdminJSSequelize)


const run = async () => {
	await sequelize.sync()
	const authDb = await sequelize.authenticate()
	
	const adminJs = new AdminJS({
		databases: [authDb]
	})
	console.log(adminJs)
}

run()
