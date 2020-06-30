
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()

        tbl.string('username', 128).notNullable().unique().index()
        tbl.string('password').notNullable()
        tbl.string('email', 128).notNullable().unique().index()
        tbl.timestamp('created_at', { useTz: false }).defaultsTo(knex.fn.now())
        tbl.timestamp('updated_at', { useTz: false }).defaultsTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
