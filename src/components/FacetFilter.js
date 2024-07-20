import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const FacetFilter = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (e, type) => {
    const { name, checked } = e.target;
    onFilterChange(name, checked, type);
  };

  const history = useHistory();

  const handleClick = () => {
      history.push("/shop");
  }

  return (
    <div className="facet-filter">
      <div>
        <h3>Type</h3>
        <div>
          <input
            type="checkbox"
            name="T-Shirt"
            checked={filters.categories.includes('T-Shirt')}
            onChange={(e) => handleCheckboxChange(e, 'categories')}
          />
          <label>T-Shirt</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Sweater"
            checked={filters.categories.includes('Sweater')}
            onChange={(e) => handleCheckboxChange(e, 'categories')}
          />
          <label>Sweater</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Tank Top"
            checked={filters.categories.includes('Tank Top')}
            onChange={(e) => handleCheckboxChange(e, 'categories')}
          />
          <label>Tank Top</label>
        </div>
      </div>

      <h3>Price</h3>
      <div>
        <input
          type="checkbox"
          name="$30+"
          checked={filters.prices.includes('$30+')}
          onChange={(e) => handleCheckboxChange(e, 'prices')}
        />
        <label>$30+</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="$20-29"
          checked={filters.prices.includes('$20-29')}
          onChange={(e) => handleCheckboxChange(e, 'prices')}
        />
        <label>$20-29</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Below $20"
          checked={filters.prices.includes('Below $20')}
          onChange={(e) => handleCheckboxChange(e, 'prices')}
        />
        <label>Below $20</label>
      </div>

      <h3>Brand</h3>
      <div>
        <input
          type="checkbox"
          name="Gildan"
          checked={filters.brands.includes('Gildan')}
          onChange={(e) => handleCheckboxChange(e, 'brands')}
        />
        <label>Gildan</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Entripy"
          checked={filters.brands.includes('Entripy')}
          onChange={(e) => handleCheckboxChange(e, 'brands')}
        />
        <label>Entripy</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="Hanes"
          checked={filters.brands.includes('Hanes')}
          onChange={(e) => handleCheckboxChange(e, 'brands')}
        />
        <label>Hanes</label>
      </div>

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
