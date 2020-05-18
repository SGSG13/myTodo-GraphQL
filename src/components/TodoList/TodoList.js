import React from 'react';
import Todo from './Todo';
import Loader from '../Loader';
import {useQueryTodos} from "./hooks/useQueryTodos";
import {useCompleteTodo} from "./hooks/useCompleteTodo";
import {useRemoveTodo} from "./hooks/useRemoveTodo";


function TodoList() {
    const {loading, error, todos} = useQueryTodos();
    const {completeTodo} = useCompleteTodo();
    const {removeTodo} = useRemoveTodo();

    if (error) return <div>Error : {error}</div>;
    if (loading) return <Loader/>;
    const isEmpty = todos.length === 0 && !loading;
    const emptyList = <div className="text-center">List is empty :(</div>;

    return (
        <div className={`todo-list ${isEmpty ? 'todo-list_empty' : ''}`}>
            {isEmpty && emptyList}
            <ul>
                {
                    todos.map(todo => (
                        <Todo
                            key={todo.id}
                            doneItem={completeTodo}
                            removeItem={removeTodo}
                            {...todo}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;