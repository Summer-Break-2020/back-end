const router = require('express').Router()

//Middleware
const { validateRegister } = require('../middleware/validation')

//Users Model
const Users = require('../users/users-model')

//Helper FNs
const { hashPassword } = require('../users/users-service')

//Register a new user
router.post('/register', validateRegister, (req, res) => {
    const userInfo = req.body

    //Hash the password before adding user to DB
    userInfo.password = hashPassword(userInfo.password)

    Users.add(userInfo)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router