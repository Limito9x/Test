const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'tempfolder'))) //Cau hinh thu muc tinh
app.set('views', path.join(__dirname,'view')) // Tao template ben trong thu muc view (src/view)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ejstest', (req, res) => {
  res.render('sample.ejs')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})