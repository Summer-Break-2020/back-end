const router = require('express').Router()
const bcrypt = require('bcryptjs')

//Middleware
const { validateRegister, checkExistingUsers, validateLogin } = require('../middleware/validation')

//Users Model
const Users = require('../users/users-model')

//Helper FNs
const { hashPassword, generateToken } = require('../users/users-service')

//Register a new user
router.post('/register', validateRegister, checkExistingUsers, (req, res) => {
    const userInfo = req.body

    //Hash the password before adding user to DB
    userInfo.password = hashPassword(userInfo.password)

    Users.add(userInfo)
        .then(([user]) => {
            res.status(201).json(user)
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

//Login an existing user
router.post('/login', validateLogin, (req, res) => {
    const { email, password } = req.body

    Users.findBy({ email })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)

                res.status(200).json({ token })
            }
            else {
                res.status(401).json({ message: 'Access denied - invalid credentials!' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router