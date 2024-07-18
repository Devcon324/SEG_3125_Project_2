import React, { useState } from 'react';

const ShirtView = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Function to handle filter selection
  const handleFilterSelection = (filter) => {
    // Check if the filter is already selected
    if (selectedFilters.includes(filter)) {
      // Remove the filter from selectedFilters
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      // Add the filter to selectedFilters
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <div>
      {/* Left-hand side checklist filter */}
      <div>
        <h2>Filter</h2>
        <ul>
          <li>
            <input
              type="checkbox"
              id="filter1"
              checked={selectedFilters.includes('filter1')}
              onChange={() => handleFilterSelection('filter1')}
            />
            <label htmlFor="filter1">Filter 1</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="filter2"
              checked={selectedFilters.includes('filter2')}
              onChange={() => handleFilterSelection('filter2')}
            />
            <label htmlFor="filter2">Filter 2</label>
          </li>
          {/* Add more filters as needed */}
        </ul>
      </div>

      {/* Right-hand side shop */}
      <div>
        <h2>Shop</h2>
        {/* Add your shop content here */}
      </div>
    </div>
  );
};

export default ShirtView;