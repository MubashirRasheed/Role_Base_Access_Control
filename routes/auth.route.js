const router = require('express').Router();


router.get('/login' , async (req, res, next) =>{
    res.send("Login")
})

router.get('/register' , async (req, res, next) =>{
    res.send("register")
})

router.get('/logout' , async (req, res, next) =>{
    res.send("Logout")
})

router.post('/login' , async (req, res, next) =>{
    res.send("Login post")
})

router.post('/register' , async (req, res, next) =>{
    res.send("register post")
})





module.exports = router;