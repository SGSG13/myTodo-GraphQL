import React from 'react';
import {useFilter} from "./hooks/useFilter";

function Search() {
    const {searchTitle, setFilter} = useFilter();
    const handleChangeSearch = ev => {
        setFilter({
            filterName: 'searchTitle',
            value: ev.target.value
        })
    };
    return (
        <div className="flex-fill">
            <input
                className="input"
                type="text"
                name="search"
                placeholder="Search"
                value={searchTitle}
                onChange={handleChangeSearch}
            />
        </div>
    );
}

export default Search;