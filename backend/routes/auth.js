const router = require('express').Router();


// @route  GET api/auth
// @desc   test route
// @access Public

router.get('/', (req, res) => {
    res.send('Auth page');
});


module.exports = router;