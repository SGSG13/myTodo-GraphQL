const Mongoose = require('mongoose');
const { normalizedData } = require('../utils');

const todoSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

class Todo {

    static async getTodos() {
        let todos = await this.find().exec();
        return todos.reverse().map(todo => {
            return normalizedData(todo)
        });
    }

    static async completeTodo(id) {
        const todo = await this.findByIdAndUpdate(id, {done: true}, {new: true});
        return normalizedData(todo)
    }

    static async deleteTodo(id) {
        const todo = await this.findOneAndRemove({_id: id});
        return normalizedData(todo)
    }

    static async addTodo(todo) {
        const newTodo = this({
            ...todo,
            done: false
        });
        const savedTodo = await newTodo.save();
        return normalizedData(savedTodo)
    }
}

todoSchema.loadClass(Todo);

module.exports = Mongoose.model('Todo', todoSchema);