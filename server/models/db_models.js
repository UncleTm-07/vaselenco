const sequelize = require("../config/dataBase")
const {DataTypes} = require("sequelize")


const Means = sequelize.define('means', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    brand: {type: DataTypes.STRING, required: true},
    model: {type: DataTypes.STRING, required: true},
    transmission_mode: {type: DataTypes.STRING, required: true},
    number_of_channels: {type: DataTypes.INTEGER, required: true},
    output_power: {type: DataTypes.STRING, required: true},
    frequency_range: {type: DataTypes.STRING, required: true},
    power_supply: {type: DataTypes.STRING, required: true},
    operating_temperature: {type: DataTypes.STRING, required: true},
    time_of_continuous_work: {type: DataTypes.STRING, required: true},
    weight: {type: DataTypes.STRING, required: true},
    img: {type: DataTypes.STRING, allowNull: false},
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, required: true},
    password: {type: DataTypes.STRING, required: true},
})

module.exports = {
    Means,
    User
}