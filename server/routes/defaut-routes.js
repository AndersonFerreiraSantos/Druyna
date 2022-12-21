const userRoutes = require("../api/user/routes/routes");
const router = require('express').Router();

router.use('/user', require('../api/user/routes/routes'));

module.exports = router