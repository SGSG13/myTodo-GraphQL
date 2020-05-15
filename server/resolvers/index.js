const Todo = require('../models/todo');
const { pubSub, events } = require('../init/pubSub');

const publishEvent = () => {
    pubSub.publish(events.CHANGE_TODOS, {
        todos: Todo.getTodos()
    });
};

const resolvers = {
    Query: {
        todos: () => Todo.getTodos()
    },
    Mutation: {
        addTodo: async (_, { todo }) => {
            const newTodo = await Todo.addTodo(todo);
            publishEvent();
            return newTodo;
        },
        completeTodo: async (_, { id }) => {
            const updatedTodo = await Todo.completeTodo(id);
            publishEvent();
            return updatedTodo;
        } ,
        removeTodo: async (_, { id }) => {
            const removedTodo = await Todo.deleteTodo(id);
            publishEvent();
            return removedTodo;
        },
    },
    Subscription: {
        todos: {
            subscribe: () => pubSub.asyncIterator([events.CHANGE_TODOS])
        }
    }
};

module.exports = resolvers;