
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        //Primary Key
        tbl.increments()

        tbl.string('email', 128).notNullable().unique().index()
        tbl.string('password').notNullable()
        tbl.string('f_name', 128).notNullable()
        tbl.string('l_name', 128).notNullable()
        tbl.string('location', 128).notNullable()
        tbl.string('avatar')
        tbl.decimal('hourly_rate', 2).defaultsTo(0)

        //Foreign Key role_id => roles.id
        tbl.integer('role_id')
            .notNullable()
            .unsigned()
            .references('roles.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        //Timestamps
        tbl.timestamp('created_at', { useTz: false }).defaultsTo(knex.fn.now())
        tbl.timestamp('updated_at', { useTz: false }).defaultsTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
