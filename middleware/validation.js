const Users = require('../users/users-model')

module.exports = {
    validateRegister,
    checkExistingUsers,
    validateLogin
}

function validateRegister(req, res, next) {
    const userInfo = req.body

    if (
        !userInfo.email ||
        !userInfo.password ||
        !userInfo.f_name ||
        !userInfo.l_name ||
        !userInfo.location ||
        !userInfo.role_id
    ) {
        res.status(400).json({ message: 'Bad Request - please provide required fields' })
    }
    else {
        next()
    }
}

async function checkExistingUsers(req, res, next) {
    if (req.body.email) {
        try {
            const [email] = await Users.findBy({ email: req.body.email })

            if (!email) {
                next()
            }
            else {
                res.status(400).json({ message: `email: ${email.email} already exists!` })
            }
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    else {
        next()
    }

}

function validateLogin(req, res, next) {
    const credentials = req.body

    if (!credentials.email || !credentials.password) {
        res.status(400).json({ message: 'please provide login credentials' })
    }
    else {
        next()
    }
}