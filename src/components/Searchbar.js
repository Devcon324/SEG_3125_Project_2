import React, { useState } from 'react';
import products from '../data/Products';
import { Button } from 'react-bootstrap';

// import styles
import '../styles/SearchBar.css';

const items = products;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    setFilteredItems(
      value
        ? items.filter(
            (item) =>
              item.name &&
              item.name.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const handleResultClick = (item) => {
    setSearchTerm(item.name);
    setFilteredItems([]);
  };

  const handleEnterShop = (event) => {
    event.preventDefault();
    const value = event.target.value;
    // send the user to the shop page with the search term as a query parameter
    window.location.href = `/shop?search=${value}`;
    console.log("Entering shop with value:", value);
  };

  return (
    <div className='barButton'>
      <div className='searchBar'>
        <input
          type="text"
          placeholder="Search our stuff!"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {filteredItems.length > 0 && (
          <ul className="search-results">
            {filteredItems.map((item) => (
              <li key={item.name} onClick={() => handleResultClick(item)}>
                <div className="search-result-item">
                  {/* Use the actual image URL from the item object */}
                  <span className="result-text">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
    </div>
    <Button
              variant="outline-success"
              onClick={handleEnterShop}
              value={searchTerm}
              >Search
            </Button>
    </div>
  );
};

export default SearchBar;