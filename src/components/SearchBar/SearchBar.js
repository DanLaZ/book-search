import React from 'react';
import './searchBar.css';

function SearchBar() {
    return(

        <form className="ks-container text-align-center globalGradient searchBarStyles">

            <div className="search-container">
                <h2 id="search-header">Search For A Book</h2>
                <div id="search">
                    <input type="text" id="search-bar" placeholder="Search By Title"></input>
                </div>
            </div>
        </form>
    )



}

export default SearchBar;