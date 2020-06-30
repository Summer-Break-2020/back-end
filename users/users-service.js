const bcrypt = require('bcryptjs')
const salt = require('../config/constants').hash_salt

const jwt = require('jsonwebtoken')
const jwt_key = require('../config/constants').jwt_key

module.exports = {
    hashPassword,
    generateToken
}

function hashPassword(password) {
    return bcrypt.hashSync(password, salt)
}

function generateToken(user) {
    payload = {
        sub: user.id,
        username: user.username
    }

    options = {
        expiresIn: '8h'
    }

    return jwt.sign(payload, jwt_key, options)
}