export function filterTodos (todos, filters) {
    if(!filters) return todos;
    const {statusFilter, searchTitle} = filters;
    function filterItemsByStatus(todos, status) {
        if (todos.length < 1) return todos;
        if (status === 'all') {
            return todos;
        } else if (status === 'active') {
            return todos.filter(todo => (!todo.done));
        } else if (status === 'done') {
            return todos.filter(todo => todo.done);
        }
    }
    function filterItemsBySearch(todos, search) {
        if (search.length === 0 || todos.length < 1) return todos;
        return todos.filter((todo) => {
            return todo.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    }
    return filterItemsBySearch(filterItemsByStatus(todos, statusFilter), searchTitle)
}