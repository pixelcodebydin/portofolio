import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, col }) {
    return (
        <div className={col}>
            <input type="text" className="form-control" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    );
}

export default SearchBar;
