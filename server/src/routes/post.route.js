const { Router } = require('express');
const { create } = require('../controllers/post.controller')

const route = Router();

route.post('', create)
