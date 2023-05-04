import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

function Search () {
  return (
    <div className='my-4'>
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        Filter car by category
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item type="checkbox" href="#/action-1">Convertible</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Coupe</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Hatchback</Dropdown.Item>
        <Dropdown.Item href="#/action-3">sedan</Dropdown.Item>
        <Dropdown.Item href="#/action-3">SUV</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Utility</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Van</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Wagon</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}
export default Search;
