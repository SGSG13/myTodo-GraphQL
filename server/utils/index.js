function normalizedData(todo) {
    return {
        id: todo._id,
        title: todo.title,
        done: todo.done
    }
}

module.exports = {
    normalizedData
};