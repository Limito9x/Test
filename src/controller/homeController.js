const getHomepage = (req, res) => {
    res.send('Hello World! This is homepage (controller)');
}
const getDefault = (req, res) => {
    res.send('Hello World! I am Thuan');
}
const getEjspg = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage,getDefault,getEjspg
}