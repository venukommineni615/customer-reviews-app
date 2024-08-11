const Sequelize = require('sequelize');
const sequelize = require('../utils/database')
const review = sequelize.define('reviews',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pros:{
        type: Sequelize.STRING(500),
        allowNull: false
    },
    cons:{
        type: Sequelize.STRING(500),
        allowNull: false
    },
    company:{
        type: Sequelize.STRING(250),
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
})

module.exports = review;