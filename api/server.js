const express = require('express');

const UserRouter = require('./users/users-router');

const server = express();
server.use(express.json());

server.use('/api/users', UserRouter);

server.get('/', (req, res) => {
    res.status(200).send('hello world');
});

server.use('*', handleError);

module.exports = server;

function handleError(err, req, res, next) {  // eslint-disable-line
    res.status(500).json({
        message: err.message,
        Error: 'something we very wrong',
    });
}
