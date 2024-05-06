const { Post } = require('../models/post.model');
const { ValidationError } = require("sequelize");

exports.create = async (req, res) => {
    try {
        const data = await Post.create(req.body)
        return res.status(200).send(data)
    } catch (e) {
        console.error(e);
        if (e instanceof ValidationError) {
            return res.status(400).send({
                message: e.errors[0].message || e.message
            })
        }
        return res.status(500).send({
            message: e.message || 'Internal Server Error'
        })
    }
}

exports.show = async (req, res) => {
    try {
        const data = await Post.findByPk(req.params.id)
        return res.status(200).send(data)
    } catch (e) {
        return res.status(500).send({
            message: e.message || 'Internal Server Error'
        })
    }
}

exports.list = async (req, res) => {
    try {
        const data = await Post.findAll()
        return res.status(200).send(data)
    } catch (e) {
        return res.status(500).send({
            message: e.message || 'Internal Server Error'
        })
    }
}

exports.createComment = async (req, res) => {
    try {
        const postId = req.params.id;
        const data = await Comment.create({
            postId,
            userId: 1, // TODO: get userId từ jwt token
            content: req.body.content,
        })
        return res.status(200).send(data)
    } catch (e) {
        return res.status(500).send({
            message: e.message || 'Internal Server Error'
        })
    }
}