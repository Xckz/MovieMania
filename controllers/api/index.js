const router = require('express').Router();
const userApiRoutes = require('./user-api-routes');
const favoriteRoutes = require('./favorite-api-routes');

router.use('/favorites', favoriteRoutes);
router.use('/user', userApiRoutes);

module.exports = router;