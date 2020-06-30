const router = require('express').Router()

//Middleware
const { validateRegister } = require('../middleware/validation')

//Users Model
const Users = require('../users/users-model')

router.post('/register', validateRegister, (req, res) => {
    const userInfo = req.body

    Users.add(userInfo)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router