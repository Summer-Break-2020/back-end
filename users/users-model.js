const db = require('../data/db-conn')

module.exports = {
    add,
    find,
    findBy,
    findById
}

async function add(user) {
    try {
        const [id] = await db('users')
            .insert(user, 'id')

        return findById(id)
    }
    catch (error) {
        throw error
    }
}

function find() {
    return db('users')
        .select('id', 'email', 'created_at', 'updated_at')
}

function findBy(filter) {
    return db('users')
        .where(filter)
}

function findById(id) {
    return db('users')
        .where({ id })
        .select('id', 'email', 'created_at', 'updated_at')
}