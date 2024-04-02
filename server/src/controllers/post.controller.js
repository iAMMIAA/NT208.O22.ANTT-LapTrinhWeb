const Post = require('../models/post.model');

const create = async (req, res) => {
    await Post.create({ content: 'test' })
    return res.status(200).send({
        message: 'ok'
    })
}