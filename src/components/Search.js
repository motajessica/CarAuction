import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Search () {
  return (
    <div className="search">
      <input 
        className="mb-2 mx-2 mr-sm-2 "
        type="search"
        placeholder='Search'  
        onChange={() => {}}
      />
      <button className="btn my-2 my-sm-0 btn-sm btn-warning">Ok</button>
    </div> 
  )
}
export default Search;
