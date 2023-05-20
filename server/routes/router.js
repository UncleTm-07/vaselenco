const Router = require('express')
const router = new Router()
const meansRouter = require('./meansRouter')
const authRouter = require('./authRouter')


router.use('/means', meansRouter)
router.use('/auth', authRouter)

module.exports = router