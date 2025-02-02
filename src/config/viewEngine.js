const express = require('express')
const path = require('path')

const configViewEngine = (app) => {
    app.use(express.static(path.join('./src', 'public'))) //Cau hinh thu muc tinh
    app.set('views', path.join('./src', 'view')) // Tao template ben trong thu muc view (src/view)
    app.set('view engine', 'ejs')
}


module.exports = configViewEngine;