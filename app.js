const express = require('express')
const mongoose = require('mongoose')
const Post = require('./models/post')

mongoose.connect('mongodb://localhost/cleanblog-test-db')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.render('index', { posts })
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
app.post('/post', async (req, res) => {
  await Post.create(req.body)
  res.redirect('/')
})

const port = 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
