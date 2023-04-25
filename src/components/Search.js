import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Search () {
  return (
    <div className='my-4'>
      <form class="form-inline d-flex justify-content-center">
        <input 
          class="form-control mx-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{maxWidth: 300}}  
          />
        <button class="btn btn-warning my-2 my-sm-0" type="submit">Ok</button>
      </form>
    </div>
  )
}
export default Search;
