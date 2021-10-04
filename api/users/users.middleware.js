const User = require('./users.model');
//eslint-disable-next-line

const checkId = async (req, res, next) => {
    const id = req.params.id;
    const found = await User.getId(id);
    try {
        if (!found) {
            res.status(404).json({ Error: `did not find the id ${id}` });
        } else {
            req.found = found;
            next();
        }
    } catch (error) {
        next(error);
    }
};




module.exports = {
    checkId,
};
