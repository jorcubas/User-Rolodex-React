import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    // handleChange =  e => {this.setState({searchField: e.target.value}}
    <input 
    className='search' 
    type='search' 
    placeholder= {placeholder} 
    onChange= {handleChange}/>
)