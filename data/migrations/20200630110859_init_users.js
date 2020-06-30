
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()

        tbl.string('username', 128).notNullable().unique().index()
        tbl.string('password').notNullable()
        tbl.string('email', 128).notNullable().unique()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
