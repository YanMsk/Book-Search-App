import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
        <header className='header'>
            <div className='header-container'>
                <h2 className='header-title'>search for books</h2><br />
                <p className='header-text'>This service will help you find the books you are interested in and read their descriptions.</p>
								<SearchForm/>
            </div>
						 
        </header>
  )
}

export default Header