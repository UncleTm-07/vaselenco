const {Means} = require("../models/db_models")
const ApiError = require('../error/apiError')

class MeansService {
    async add(brand, model, transmission_mode, number_of_channels, output_power, frequency_range,
              power_supply, operating_temperature, time_of_continuous_work, weight, fileName){
        if(!brand || !model || !transmission_mode || !number_of_channels || !output_power || !frequency_range ||
            !power_supply || !operating_temperature || !time_of_continuous_work || !weight || ! fileName){
            return ApiError.BadRequest('Некоректні данні');
        }
        return await Means.create({brand, model, transmission_mode, number_of_channels, output_power, frequency_range,
            power_supply, operating_temperature, time_of_continuous_work, weight, img: fileName});
    }
    async getAll() {
        const means = await Means.findAll()
        if (!means){
            throw ApiError.BadRequest('Засоби відсутні в БД');
        }
        return means;
    }
    async getMean(id) {
        const mean = await Means.findByPk(id)
        if (!mean){
            throw ApiError.BadRequest('Засіб не був знайдений');
        }
        return mean;
    }
    async removeMean(id) {
        const mean = await Means.destroy({where: {id}})
        if (!mean){
            throw ApiError.BadRequest('Засіб не був видалений');
        }
        return mean;
    }

    async edit(id, new_mean) {

        const mean = await Means.findByPk(id)
        if (!mean){
            throw ApiError.BadRequest('Засіб не був знайдений!');
        }
        await mean.update(new_mean)
        return mean;
    }

}

module.exports = new MeansService()