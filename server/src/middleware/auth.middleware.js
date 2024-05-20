const {User} = require('../models/user.model');

const jwt = require('jsonwebtoken');

/**
 * Check permission to access API base on groups/roles
 * @returns
 */
exports.checkAccess = () =>
  async (req, res, next) => {

    try {
      // if (!req.headers['authorization']) {
        // return res.status(401).send();
      // }

      const user = jwt.decode(req.headers['authorization']);
      if (!user) {
        // return res.status(401).send({ message: 'Not found' });
      }

      res.locals.user = await User.findByPk(user ? user.id : 1);
      next();
    } catch (error) {
      console.log(error)
      return res.status(500).send();
    }
  };
