import React, { useState } from 'react';
import FacetFilter from '../components/FacetFilter';
import ProductList from '../components/ProductList';
import products from '../data/Products';

// import styles
import '../styles/Shop.css';

const Shop = (props) => {
  const [filters, setFilters] = useState({
    categories: [],
    prices: [],
    brands: [],
  });

  const handleFilterChange = (filter, value, type) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (value) {
        newFilters[type].push(filter);
      } else {
        newFilters[type] = newFilters[type].filter(f => f !== filter);
      }
      return newFilters;
    });
  };

  // const router = useRouter()
  // const searchedProductName = router.query.value

  // const filteredProducts = products.filter(product => {
  //   return product.name.toLowerCase().includes(searchedProductName.toLowerCase());
  // });
  const searchParams = new URLSearchParams(window.location.search);
  const searchedProductName = searchParams.get('search');

  //use the searchedProductName to filter the products by product.name
  const searchShirtByName = (products) => {
    if (searchedProductName === null) {
      return products;
    }
    return products.filter(product => {
      return product.name.toLowerCase().includes(searchedProductName.toLowerCase());
    });
  };


  const applyFilters = (products) => {
    const filteredProducts = searchShirtByName(products);
    return filteredProducts.filter(product => {
      const typeMatch = filters.categories.length === 0
        || filters.categories.includes(product.type);

      const priceMatch = filters.prices.length === 0
        || (filters.prices.includes('$30+') && product.price >= 30)
        || (filters.prices.includes('$20-29') && product.price >= 20 && product.price <= 29.99)
        || (filters.prices.includes('Below $20') && product.price < 20);

      const brandMatch = filters.brands.length === 0
        || filters.brands.includes(product.brand);

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