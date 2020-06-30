
exports.up = function (knex) {
    return knex.schema.createTable('roles', tbl => {
        //Primary key  
        tbl.increments()

        tbl.string('role', 128).unique().index()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('roles')
};
