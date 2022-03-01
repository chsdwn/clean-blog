const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

const pageController = require('./controllers/page')
const postController = require('./controllers/post')

mongoose
  .connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.6a4vv.mongodb.net/pcat-db?retryWrites=true&w=majority`)
  .then(() => console.log('Connected to the MongoDB'))
  .catch((err) => console.error(err.message))

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

app.get('/', postController.getAll)
app.get('/post/:id', postController.get)
app.post('/post', postController.create)
app.put('/post/:id', postController.update)
app.delete('/post/:id', postController.delete)

app.get('/about', pageController.getAboutPage)
app.get('/add', pageController.getAddPostPage)
app.get('/post/edit/:id', pageController.getEditPostPage)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
