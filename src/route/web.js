const express = require('express')
const router = express.Router()
const {getHomepage,getDefault,getEjspg} = require('../controller/homeController')

// router.methd ('/route', handler)
router.get('/', getDefault)
router.get('/hp', getHomepage)
router.get('/ejstest', getEjspg)


module.exports = router;