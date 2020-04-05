const router = require('express').Router()
const {login, register, allUser} = require("../controllers/userController")

//registration rout
//http://localhost:400/api/users/register
router.post('/register',register )


// Login router
//http://localhost:400/api/users/login
router.post('/login', login )
router.get('/all', allUser )

module.exports = router