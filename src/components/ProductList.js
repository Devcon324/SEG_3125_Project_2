import React from 'react';
import ProductItem from './ProductItem';

/**
 ** takes in a list of products and displays them using the ProductItem component
 ** ProductItem component takes in a product object and displays the product on a card
 * @param {Object[]} products - The list of products.
 * @returns {JSX.Element}
*/
const ProductList = ({ products }) => (
  <div className="product-list">
    {
      products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))
    }
  </div>
);

export default ProductList;
