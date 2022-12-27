const userRoutes = require("../api/user/routes/routes");
const router = require('express').Router();

router.use('/user', require('../api/user/routes/routes'));
router.use('/chat', require('../api/chat/routes/routes'));
router.use('/field', require('../api/maps/fields/routes/routes'));

module.exports = router