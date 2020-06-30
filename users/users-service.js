const bcrypt = require('bcryptjs')
const salt = require('../config/constants').hash_salt

module.exports = {
    hashPassword
}

function hashPassword(password) {
    return bcrypt.hashSync(password, salt)
}