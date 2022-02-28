const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/add', (req, res) => {
  res.render('add_post')
})
app.get('/add/:id', (req, res) => {
  res.render('post')
})

const port = 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
