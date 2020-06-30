module.exports = {
    validateRegister,
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

function validateLogin(req, res, next) {
    const credentials = req.body

    if (!credentials.username || !credentials.password) {
        res.status(400).json({ message: 'please provide login credentials' })
    }
    else {
        next()
    }
}