import React from 'react';

const FilterCheckBox = ({filterType, filterKey, filters, onFilterChange}) => {

      /**
     ** This function is called when a checkbox is changed. It updates the filters object.
    * @param {*} e - The event object.
    * @param {*} type - The type of filter.
    */
    const handleCheckboxChange = (e, type) => {
      const { name, checked } = e.target;
      onFilterChange(name, checked, type);
    };

    // displays a category filter checkbox
    if (filterKey === 'categories') {
      return (
        <div>
          <input
            type="checkbox"
            name={filterType}
            checked={filters.categories.includes(filterType)}
            onChange={(e) => handleCheckboxChange(e, 'categories')}
          />
          <label>{filterType}</label>
        </div>
      );
    }

    // displays a price filter checkbox
    if (filterKey === 'prices') {
      return (
        <div>
          <input
            type="checkbox"
            name={filterType}
            checked={filters.prices.includes(filterType)}
            onChange={(e) => handleCheckboxChange(e, 'prices')}
          />
          <label>{filterType}</label>
        </div>
      );
    }

    // displays a brand filter checkbox
    if (filterKey === 'brands') {
      return (
        <div>
          <input
            type="checkbox"
            name={filterType}
            checked={filters.brands.includes(filterType)}
            onChange={(e) => handleCheckboxChange(e, 'brands')}
          />
          <label>{filterType}</label>
        </div>
      );
    };
}

export default FilterCheckBox;