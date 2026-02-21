const router = require('express').Router();


// @route  GET api/profile
// @desc   test route
// @access Public

router.get('/', (req, res) => {
    res.send('Profile page');
});


module.exports = router;