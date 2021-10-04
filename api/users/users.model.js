const db = require('../../data/connect');
const getAll = async () => {
    return db('users');
};

const getId = async (id) => {
    const singleUser = await db('users').where({ id: id }).first();
    return singleUser;
};

const insert = async ({ name, time }) => {
    const id = await db('users').insert({ name, time }); // return a # which is the new id
    const newUser = await getId(id);
    return newUser;
};

const update = async (id, { name, time }) => {
    await db('users').where({ id: id }).update({ name, time }); // return a # which the number of effected 
    const updatedUser = await getId(id);
    return updatedUser
};

const remove = async (id) => {
    // const user = await getId(id)
    await db('users').where({ id: id }).del()
    return "delete completed";
};

module.exports = {
    getAll,
    getId,
    insert,
    update,
    remove,
};
