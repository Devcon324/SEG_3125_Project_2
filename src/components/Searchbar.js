import React, { useState } from 'react';
// import styles
import '../styles/SearchBar.css';

const items = [
  { name: 'T-Shirt' },
  { name: 'Long-Sleeve'},
  { name: 'Tank Top'},
  { name: 'Dress Shirt'},
  { name: 'Polo Shirt' },
  { name: 'Hoodie' },
  { name: 'Sweatshirt' },
  { name: 'Button-Down Shirt' },
  { name: 'V-Neck Shirt' },
  { name: 'Henley Shirt' },
  { name: 'Flannel Shirt' },
  { name: 'Graphic Tee' },
  { name: 'Oxford Shirt' },
  { name: 'Pullover' },
  { name: 'Sleeveless Shirt' },
  { name: 'Raglan Shirt' },
  { name: 'Peplum Top' },
  { name: 'Crop Top' },
  { name: 'Off-Shoulder Top' },
  { name: 'Wrap Shirt' },
];

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

  return (
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
  );
};

export default SearchBar;