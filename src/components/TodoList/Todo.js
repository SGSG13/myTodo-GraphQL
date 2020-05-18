import React from 'react';

function Todo(props) {
    const {id, title, done, doneItem, removeItem} = props;
    const handleDone = id => () => doneItem(id);
    const handleRemove = id => () => removeItem(id);
    return (
        <li className="todo-list__item">
            <div className="flex-fill">
                <span
                    className={`todo-list__title ${done ? 'todo-list__title_done' : ''}`}
                    onClick={handleDone(id)}
                >
                {title}
            </span>
            </div>
            <div className="flex-fit">
                <button
                    className="button"
                    onClick={handleRemove(id)}
                >
                    X
                </button>
            </div>
        </li>
    );
}

export default Todo;