const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! I am Thuan')
})
router.get('/ejstest', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;