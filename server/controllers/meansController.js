const meansService = require('../services/meansService')
const {validationResult} = require('express-validator')
const ApiError = require('../error/apiError')
const path = require('path')
const uuid = require('uuid')

class MeansController {
    async add(req, res, next){
        try {
            let user = req.user
            console.log(user)
            if (typeof user === 'undefined') {
                return next(ApiError.UnauthorizedError(''))
            }
            const errors = validationResult(req);
            if (!errors.isEmpty()){
                return next(ApiError.BadRequest('Помилка при валідації', errors.array()))
            }
            const {brand, model, transmission_mode, number_of_channels, output_power, frequency_range,
                power_supply, operating_temperature, time_of_continuous_work, weight} = req.body;
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const meanData = await meansService.add(brand, model, transmission_mode, number_of_channels, output_power, frequency_range,
                power_supply, operating_temperature, time_of_continuous_work, weight, fileName);
            return res.json(meanData)
        }catch (e){
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            let user = req.user
            console.log(user)
            if (typeof user === 'undefined') {
                return next(ApiError.UnauthorizedError(''))
            }
            const meansData = await meansService.getAll()
            return res.json(meansData)
        }catch (e){
            next(e);
        }
    }

    async getMean(req, res, next) {
        try {
            let user = req.user
            console.log(user)
            if (typeof user === 'undefined') {
                return next(ApiError.UnauthorizedError(''))
            }
            const id = req.params.id
            const meanData = await meansService.getMean(id)
            return res.json(meanData)
        }catch (e){
            next(e);
        }
    }

    async removeMean(req, res, next) {
        try {
            let user = req.user
            console.log(user)
            if (typeof user === 'undefined') {
                return next(ApiError.UnauthorizedError(''))
            }
            const id = req.params.id
            const meanData = await meansService.removeMean(id)
            return res.json(meanData)
        }catch (e){
            next(e);
        }
    }

    async edit(req, res, next) {
        try {
            let user = req.user
            console.log(user)
            if (typeof user === 'undefined') {
                return next(ApiError.UnauthorizedError(''))
            }
            const id = req.params.id
            const editMean = req.body;
            // const {img} = req.files
            // let fileName = uuid.v4() + ".jpg"
            // await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const meanData = await meansService.edit(id, editMean)
            return res.json(meanData)
        }catch (e){
            next(e);
        }
    }
}

module.exports = new MeansController()