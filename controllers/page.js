const Post = require('../models/post')

exports.getAboutPage = (req, res) => {
  res.render('about')
}

exports.getAddPostPage = (req, res) => {
  res.render('add_post')
}

exports.getEditPostPage = async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render('edit_post', { post })
}
