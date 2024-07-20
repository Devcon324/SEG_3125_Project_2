import React from 'react';
import FilterCheckBox from './FilterCheckBox';
// import { useHistory } from 'react-router-dom';

/**
 ** This component is used to filter products based on categories, prices, and brands.
 * @param {Object} filters - The filters object that contains the selected filters.
 * @param {Function} onFilterChange - The function that is called when a filter is changed.
 * @returns {JSX.Element}
 */
const FacetFilter = ({ filters, onFilterChange }) => {
  return (
    <div className="facet-filter">
      <h3>Type</h3>
      <FilterCheckBox
        filterType={"T-Shirt"}
        filterKey={'categories'}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <FilterCheckBox
        filterType={"Sweater"}
        filterKey={'categories'}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <FilterCheckBox
        filterType={"Tank Top"}
        filterKey={'categories'}
        filters={filters}
        onFilterChange={onFilterChange}
      />

      <h3>Price</h3>
      <FilterCheckBox
        filterType={"$30+"}
        filterKey={'prices'}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <FilterCheckBox
        filterType={"$20-29"}
        filterKey={'prices'}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <FilterCheckBox
        filterType={"Below $20"}
        filterKey={'prices'}
        filters={filters}
        onFilterChange={onFilterChange}
      />

      <h3>Brand</h3>
      <FilterCheckBox
        filterType={"Gildan"}
        filterKey={'brands'}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <FilterCheckBox
        filterType={"Entripy"}
        filterKey={'brands'}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <FilterCheckBox
        filterType={"Hanes"}
        filterKey={'brands'}
        filters={filters}
        onFilterChange={onFilterChange}
      />

      <button className='resetFilterButton' onClick={(e) => {
      e.preventDefault();
      window.location.href='/shop';
      }}>
        Reset Filter
      </button>

    </div>
  );
};

export default FacetFilter;
