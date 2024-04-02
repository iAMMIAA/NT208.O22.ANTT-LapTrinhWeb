const { Router } = require('express');

const postRoute = require('./post.route');

const routes = Router();

routes.use('/posts', postRoute)
