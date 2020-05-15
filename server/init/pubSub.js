const { PubSub } = require('apollo-server-express');
const pubSub = new PubSub();

const events = Object.freeze({
    CHANGE_TODOS: 'CHANGE_TODOS'
});

module.exports = {
    events,
    pubSub
};

