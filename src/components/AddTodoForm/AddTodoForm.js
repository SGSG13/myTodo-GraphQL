import React, {useState} from 'react';
import {useAddTodo} from "./hooks/useAddTodo";

function AddItemForm() {
    const [title, setTitle] = useState('');
    const { addTodo } = useAddTodo();
    const handleChangeTitle = ev => setTitle(ev.target.value);
    const handleAddItem = () => {
        if (title.length < 1) return;
        addTodo({ title });
        setTitle('')
    };

    return (
        <div className="add-form">
            <div className="flex-fill">
                <input
                    type="text"
                    name="title"
                    className="input"
                    value={title}
                    onChange={handleChangeTitle}
                />
            </div>
            <div className="flex-fit">
                <button
                    className="button"
                    onClick={handleAddItem}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddItemForm;