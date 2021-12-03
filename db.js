const Sequelize = require('sequelize')
const db = new Sequelize('shopdb', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const User = db.define('users', {  /* here const user is class and 'users' is table created */
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }

})

const Product = db.define('product', {  /* here const Product is class and 'products' is table created */
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    manufacturer: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }
})



db.sync()
   .then(() => console.log("Database synced successfully"))
   .catch((err) => console.log("Error syncing with the database"))

exports = module.exports = {
    User,Product
}