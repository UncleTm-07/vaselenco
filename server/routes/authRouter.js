const Router = require('express')
const router = new Router()
const authController = require('../controllers/authController')
const {body} = require('express-validator')


router.post('/registration',
    body('username', "Имя пользователя не может быть пустым").notEmpty(),
    body('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10}),
    authController.registration)
router.post('/login', authController.login)
router.post('/logout', authController.logout)


module.exports = router