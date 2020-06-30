module.exports = {
    validateRegister
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