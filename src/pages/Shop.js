import React, { useState } from 'react';
import FacetFilter from '../components/FacetFilter';
import ProductList from '../components/ProductList';
import products from '../data/Products';

// import styles
import '../styles/Shop.css';


/**
 ** This is the shop page that displays the products and the facet filter.
  * @returns {JSX.Element}
 */
const Shop = () => {
  /**
   ** This function is called when a filter is changed. It updates the filters object.
    * @var {Object} filters - The object that contains the filters.
    * @var {Function} setFilters - The function that is called to update the filters object.
   */
  const [filters, setFilters] = useState({
    categories: [],
    prices: [],
    brands: [],
  });

  /**
   ** This function is called when a filter is changed. It updates the filters object.
    * @param {Object} filter - The object that contains the filter information.
    * @param {boolean} checked - The value of the filter ex. true or false.
    * @param {string} type - The type of filter ex. categories, prices, brands.
  */
  const handleFilterChange = (filter, checked, type) => {
    /**
     ** This function takes the previous filters and updates the filters object.
      * @param {Object} prevFilters - The previous filters object.
      * @returns {Object} The new filters object
     */
    setFilters(prevFilters => {
      // we spreads the object into a new object so that we can modify it
      const newFilters = { ...prevFilters };
      if (checked) {
        newFilters[type].push(filter);
      } else {
        newFilters[type] = newFilters[type].filter(f => f !== filter);
      }
      return newFilters;
    });
  };


  /**
   ** This grabs the search query from the URL and stores it in the searchedProductName variable.
    * @var {Object} searchParams - The object that contains the search query.
  */
  const searchParams = new URLSearchParams(window.location.search);
  const searchedProductName = searchParams.get('search');

  /**
   ** This takes the products and filters them by the searchedProductName.
    * @param {Object} products - The object that contains the products.
    * @returns {Map} The list of products that match the searchedProductName
  */
  const searchShirtByName = (products) => {
    if (searchedProductName === null) {
      return products;
    }
    return products.filter(product => {
      return product.name.toLowerCase().includes(searchedProductName.toLowerCase());
    });
  };

  /**
   ** takes the products array and filters them based on the filters object.
    * @param {Object} products - The object that contains the products.
    * @returns {Map} The list of products that match the filters object.
  */
  const applyFilters = (products) => {
    // filter the products by the searchedProductName
    const filteredProducts = searchShirtByName(products);
    /**
     ** filters the products by the categories, prices, and brands.
      * @param {Object} product - The object that contains the product.
      * @returns {Map} The list of products that match the filters object.
    */
    return filteredProducts.filter(product => {

      // if the filters object is empty, return all the products
      // if the product type is in the filters object, return the product
      const typeMatch = filters.categories.length === 0
        || filters.categories.includes(product.type);

      // if the filters object is empty, return all the products
      // if the product price is in the filters object, return the product
      const priceMatch = filters.prices.length === 0
        || (filters.prices.includes('$30+') && product.price >= 30)
        || (filters.prices.includes('$20-29') && product.price >= 20 && product.price <= 29.99)
        || (filters.prices.includes('Below $20') && product.price < 20);

      // if the filters object is empty, return all the products
      // if the product brand is in the filters object, return the product
      const brandMatch = filters.brands.length === 0
        || filters.brands.includes(product.brand);

      // return all the products that match the filters
      return typeMatch && priceMatch && brandMatch;
    });
  };


  return (
    <div className="shop">
      <p style={{color: 'white'}}>{searchedProductName}</p>
      <p
        style={{
          color: 'white',
          fontSize: '50px',
          textAlign: 'center',
          marginTop: '5px'
        }}
      >
        Shop
      </p>
      <div className="app">
        <FacetFilter filters={filters} onFilterChange={handleFilterChange} />
        <div className='grid'>
          <ProductList products={applyFilters(products)} />
        </div>
      </div>
    </div>
  );
};

export default Shop;