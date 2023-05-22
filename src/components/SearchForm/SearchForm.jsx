import React from 'react';
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className='search-form'>
			<div className="search-form__container"> 
      			<input class="search-line" type="text" placeholder="Search"></input>
						<div className="selects"> 
									<div class="select">
										<select name="format" id="format">
											<option selected disabled>Сategories</option>
											<option value="all">All</option>
											<option value="art">Art</option>
											<option value="biography">Biography</option>
											<option value="computers">Computers</option>
											<option value="history">History</option>
											<option value="medical">Medical</option>
											<option value="poetry">Poetry</option>
										</select>
									</div>

									<div class="select">
										<select name="format" id="format">
											<option selected disabled>Sorting by</option>
											<option value="relevance">Relevance</option>
											<option value="newest">Newest</option>
										</select>
									</div>
						</div>
			</div>
    </div>
	
  )
}

export default SearchForm