const { Exchange } = require('../models/exchange.model');
const { ExchangeComment } = require('../models/comment.model');
const { ValidationError, fn} = require("sequelize");
const {ExchangeLike} = require("../models/like.model");

exports.create = async (req, res) => {
    try {
        const { content } = req.body;
        const data = await Exchange.create({content, createdBy: 1}) // FIXME: get userId from jwt token
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

exports.update = async (req, res) => {
    try {
        const [count, rows] = await Exchange.update(req.body, {returning: true});
        if (!count) {
            return res.status(404).send({
                message: 'Not Found',
            })
        }
        return res.status(200).send(rows[0]);
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
        const data = await Exchange.findByPk(req.params.id)
        return res.status(200).send(data)
    } catch (e) {
        return res.status(500).send({
            message: e.message || 'Internal Server Error'
        })
    }
}

exports.list = async (req, res) => {
    try {
        const data = await Exchange.findAll({
            include: ['user', {
                model: ExchangeLike,
                required: false,
                as: 'like',
                where: { userId: 1 }, // FIXME: get userId from jwt token
            }],
            order: [['createdAt', 'DESC']]
        })
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
        const data = await ExchangeComment.create({
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

exports.like = async (req, res) => {
    try {
        const exchangeId = req.params.id;
        const like = await ExchangeLike.findOne({
            where: {
                exchangeId,
                userId: 1, // TODO: get userId từ jwt token
            },
            attributes: ['id'],
        })

        if (like) {
            await like.destroy();
            await Exchange.update({
                likeNumber: Exchange.sequelize.literal('likeNumber - 1')
            }, {
                where: {id: exchangeId}
            });
            return res.status(200).send({
                message: 'Unlike successfully'
            })
        }

        const data = await ExchangeLike.create({
            exchangeId,
            userId: 1, // TODO: get userId từ jwt token
        })
        await Exchange.update({
            likeNumber: Exchange.sequelize.literal('likeNumber + 1')
        }, {
            where: {id: exchangeId}
        });
        return res.status(200).send(data)
    } catch (e) {
        return res.status(500).send({
            message: e.message || 'Internal Server Error'
        })
    }
}

exports.countComment = async (req, res) => {
    try {
        const data = await ExchangeComment.findAll({
            group: ['exchangeId'],
            attributes: ['exchangeId', [fn('COUNT', 'exchangeId'), 'value']],
        })
        return res.status(200).send(data)
    } catch (e) {
        console.log('error', e)
        return res.status(500).send({
            message: e.message || 'Internal Server Error'
        })
    }
}