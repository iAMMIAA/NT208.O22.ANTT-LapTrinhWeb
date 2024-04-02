const { Router } = require('express');
const { create } = require('../controllers/post.controller')

const route = Routes;

route.post('', create)
