import React from 'react';
import { useToggle } from '../../assets/hooks/useToggle';
import './searchBar.css';

export const SearchBar = ({handleFormToggle}) => {

    const {isVisible, handleToggle} = useToggle("search-bar_fields--display");

    return (
        <div className = "container searchBar">
            <div className = "search-bar_button-container">
                <input type="button" value="Toogle search" className='accept-button toggle-button' onClick={handleToggle} />
                <input type="button" value="Add new Product" className='accept-button toggle-button'onClick={handleFormToggle}/>
                <input type="button" value="Toogle search" className='accept-button toggle-button'  />
            </div>
            <div className = {isVisible}>
                <div>
                    <p>Código</p>
                    <input type="text" name="Code" id="" />
                </div>
                <div>
                    <p>Name</p>
                    <input type="text" name="Name" id="" />
                </div>
                <div>
                    <p>Type</p>
                    <input type="text" name="type"/>
                </div>
            </div>
        </div>
    )

}