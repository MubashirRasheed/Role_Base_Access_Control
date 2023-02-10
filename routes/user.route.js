const router = require('express').Router();


router.get('/profile', async(req, res) => {
    res.send('User Profile');
})

module.exports = router;