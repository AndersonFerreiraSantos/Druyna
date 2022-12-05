const router = require('express').Router();

const routesProduction = require('../buildings/production/production-routes')

router.get('/tavern', routesProduction.tavern.getTavern)
router.get('/bakehouse', routesProduction.bakehouse.getBakehouse)

module.exports = router