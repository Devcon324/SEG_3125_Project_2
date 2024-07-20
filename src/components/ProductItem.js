import React from 'react';
import { Link } from 'react-router-dom';

/**
 ** This component displays a product item.
 ** takes in a product object and displays the product on a card
 * @param {Object} product - The product object.
 * @returns {JSX.Element}
 */
const ProductItem = ({ product }) => (

  <div className="product-item">
    <h4>{product.name}</h4>
    <img
      className='product-image'
      src={product.image}
      alt={product.name}
    />
    <div className="product-details">
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <p>Type: {product.type}</p>
    </div>
    <Link to={`/cart?product=${product.name}`}>
    <button
      className='purchase-button'
      onClick={
        () => {
          console.log(product.name);
        }
      }>
      Purchase
    </button>
    </Link>
  </div>
);

export default ProductItem;
