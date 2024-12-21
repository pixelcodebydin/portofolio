import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
            <input type="text" className="form-control" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    );
}

export default SearchBar;
