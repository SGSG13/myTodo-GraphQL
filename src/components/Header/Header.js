import React from 'react';
import {useTodoCounts} from "./hooks/useTodoCounts";

function Header() {
    const {doneCount, toDoCount} = useTodoCounts();
    return (
        <div className="header">
            <div className="header__title">
                <h1>ToDo List</h1>
            </div>
            <div>
                <span>
                    {toDoCount} more to do, {doneCount} done
                </span>
            </div>
        </div>
    );
}

export default Header;