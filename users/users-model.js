const db = require('../data/db-conn')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
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
    return db('users as u')
        .join('roles as r', 'u.role_id', 'r.id')
        .select('u.id', 'u.email', 'u.f_name', 'u.l_name', 'u.location', 'u.avatar', 'u.hourly_rate', 'r.role', 'u.created_at', 'u.updated_at')
}

function findBy(filter) {
    return db('users')
        .where(filter)
}

function findById(id) {
    return db('users as u')
        .where('u.id', id)
        .join('roles as r', 'u.role_id', 'r.id')
        .select('u.id', 'u.email', 'u.f_name', 'u.l_name', 'u.location', 'u.avatar', 'u.hourly_rate', 'r.role', 'u.created_at', 'u.updated_at')
}

function update(updates, id) {
    return db('users')
        .where('id', id)
        .update(updates)
        .then(count => {

            if (count) {
                return findById(id)
            }
            else {
                return count
            }
        })
}

function remove(id) {
    return db('users').where('id', id).del()
}