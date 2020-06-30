const Users = require('../users/users-model')

module.exports = {
    validateRegister,
    checkExistingUsers,
    validateLogin
}

function validateRegister(req, res, next) {
    const userInfo = req.body

    if (!userInfo.username || !userInfo.password || !userInfo.email) {
        res.status(400).json({ message: 'Bad Request - please provide username, password and/or email' })
    }
    else {
        next()
    }
}

async function checkExistingUsers(req, res, next) {
    try {
        const [username] = await Users.findBy({ username: req.body.username })
        const [email] = await Users.findBy({ email: req.body.email })

        if (!username && !email) {
            next()
        }
        else {
            res.status(400).json({ message: `${username ? `username: ${username.username} already exists!` : ''} ${email ? `email: ${email.email} already exists!` : ''}` })
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }



}

function validateLogin(req, res, next) {
    const credentials = req.body

    if (!credentials.username || !credentials.password) {
        res.status(400).json({ message: 'please provide login credentials' })
    }
    else {
        next()
    }
}