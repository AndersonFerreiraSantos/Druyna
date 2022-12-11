const userRoutes = require("../api/user/user-routes");
const router = require('express').Router();

router.use('/user', require('../api/user/user-routes'));

module.exports = router