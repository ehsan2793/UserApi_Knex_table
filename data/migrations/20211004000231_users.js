
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('name')
        table.timestamp("time").defaultTo('oct 1 ,2021');

    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')

};
