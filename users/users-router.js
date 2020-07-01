const router = require('express').Router()

const Users = require('./users-model')

//Help FNs
const { hashPassword } = require('./users-service')

//Middleware
const requireAuth = require('../auth/requires-auth')
const { checkExistingUsers } = require('../middleware/validation')

//Returns a list of all users
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

//Returns a specific user
router.get('/:id', requireAuth, (req, res) => {
    const { id } = req.params

    Users.findById(id)
        .then(([user]) => {
            if (user) {
                res.status(200).json(user)
            }
            else {
                res.status(404).json({ message: 'invalid user id' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

//Updates a specific user
router.put('/:id', requireAuth, checkExistingUsers, (req, res) => {
    const { id } = req.params
    const updates = req.body

    if (updates.password) {
        updates.password = hashPassword(updates.password)
    }

    Users.update(updates, id)
        .then(([user]) => {
            if (user) {
                res.status(200).json(user)
            }
            else {
                res.status(404).json({ message: 'invalid user id' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

//Destroys a specific user
router.delete('/:id', requireAuth, (req, res) => {
    const { id } = req.params

    Users.remove(id)
        .then(count => {
            if (count) {
                res.status(204).send()
            }
            else {
                res.status(404).json({ message: 'invalid user id' })
            }
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router