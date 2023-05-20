const Router = require('express')
const router = new Router()
const meansController = require('../controllers/meansController')
const {body} = require('express-validator')


router.post('/', meansController.add)
router.get('/', meansController.getAll)
router.get('/:id', meansController.getMean)
router.delete('/:id', meansController.removeMean)
router.put('/:id', meansController.edit)


module.exports = router