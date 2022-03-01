const Post = require('../models/post')

exports.getAll = async (req, res) => {
  const posts = await Post.find({})
  res.render('index', { posts })
}

exports.get = async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render('post', { post })
}

exports.create = async (req, res) => {
  await Post.create(req.body)
  res.redirect('/')
}

exports.update = async (req, res) => {
  console.log(req.params.id, req.body)
  const id = req.params.id
  const post = await Post.findById(id)
  post.title = req.body.title
  post.detail = req.body.detail
  await post.save()

  res.redirect(`/post/${id}`)
}

exports.delete = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id)
  res.redirect('/')
}
