const router = require('express').Router()

const Users = require('./users-model')

const requireAuth = require('../auth/requires-auth')

router.get('/', requireAuth, (req, res) => {
    Users.find()
        .then(users => {
            if (users.length) {
                res.status(200).json(users)
            }
            else {
                res.status(404).json({ message: 'no users found' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router