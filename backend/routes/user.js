const router = require('express').Router();


// @route  GET api/user
// @desc   test route
// @access Public

router.get('/', (req, res) => {
    res.send('User profile page');
});


module.exports = router;