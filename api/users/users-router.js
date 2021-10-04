const express = require('express');
const router = express.Router()
const { checkId } = require('./users.middleware')
const Users = require('./users.model')

router.get('/', async (req, res) => {
    const allusers = await Users.getAll()
    res.status(200).json(allusers)

})
router.get('/:id', checkId, async (req, res) => {
    res.status(200).json(req.found)

})
router.post('/', async (req, res) => { //eslint-disable-line
    const newuser = await Users.insert(req.body)
    res.status(201).json(newuser)

})
router.put('/:id', checkId, async (req, res) => {
    const id = req.params.id
    const updatedUser = await Users.update(id, req.body)
    res.status(200).json(updatedUser)

})
router.delete('/:id', checkId, async (req, res) => {
    const { id } = req.params
    const user = await Users.getId(id)
    const deleteuser = await Users.remove(id)
    res.status(200).json({ message: deleteuser, deleted_user: user })



})





module.exports = router;