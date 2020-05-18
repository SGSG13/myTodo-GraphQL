import React from 'react';
import {useFilter} from "./hooks/useFilter";

const buttons = [
    {label: 'All', name: 'all'},
    {label: 'Done', name: 'done'},
    {label: 'Active', name: 'active'},
];

function StatusFilter() {
    const {statusFilter, setFilter} = useFilter();
    const handleChangeStatus = name => () => setFilter({
        filterName: 'statusFilter',
        value: name
    });
    return (
        <div className="flex-fit">
            {
                buttons.map(button => {
                    return (
                        <button
                            className={`button ${statusFilter === button.name ? 'button_active' : ''}`}
                            onClick={handleChangeStatus(button.name)}
                            key={button.name}
                        >
                            {button.label}
                        </button>
                    )
                })
            }
        </div>
    );
}

export default StatusFilter;