import React from 'react';
import Todo from './Todo';
import Loader from '../Loader';
import {useQueryTodos} from "./hooks/useQueryTodos";
import {useCompleteTodo} from "./hooks/useCompleteTodo";
import {useRemoveTodo} from "./hooks/useRemoveTodo";


function TodoList() {
    const {loading, error, todos} = useQueryTodos();
    const {completeTodo, completeError} = useCompleteTodo();
    const {removeTodo, removeError} = useRemoveTodo();

    if (loading) return <Loader/>;
    const allErrors = error || completeError || removeError;
    const errorMessage = allErrors && <div>Error : {allErrors}</div>;
    const isEmpty = todos.length === 0 && !loading;
    const emptyMessage = isEmpty && <div className="text-center">List is empty :(</div>;
    return (
        <>
            {errorMessage}
            <div className={`todo-list ${isEmpty ? 'todo-list_empty' : ''}`}>
                {emptyMessage}
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
        </>
    );
}

export default TodoList;