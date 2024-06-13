import React from 'react'

import { GoSearch } from "react-icons/go";

function Search() {
    return (
        <div id='search'>
            <div className='search__inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>검색</span>
                </label>
                <input 
                    type='search' name='searchInput' id='searchInput' 
                    autoComplete='off' className='search__input'
                    placeholder='검색'
                ></input>
                <button className='search__btn'>
                    <GoSearch />
                </button>
            </div>
        </div>
    )
}

export default Search