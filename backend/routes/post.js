const router = require('express').Router();


// @route  GET api/post
// @desc   test route
// @access Public

router.get('/', (req, res) => {
    res.send('Post page');
});


module.exports = router;