import React from 'react';
import { useState } from 'react';

const CartItem = (props) => {
  const cartItemName = JSON.stringify(props.product.name).replace(/"/g, '');


  // console.log("in CartItem.js quantity = " + JSON.stringify(props.quantity));
  // console.log("in CartItem.js quantity = " + JSON.stringify(props.quantity));
  // console.log("in CartItem.js product = " + JSON.stringify(props.product.name));

  // function to increment or decrement the quantity of the product
  // let itemCount = 1;

  // Resolution: i need ot make a cart object and keep updating it
  // point of the course is not for semantics, but for UI design
  //

  const [quantity, setItemCount] = useState(1);
  const incrementQuantity = () => {
      setItemCount(quantity + 1)
  }
  const decrementQuantity = () => {
    if (quantity !== 0) {
      console.log("Decrementing quantity");
      setItemCount(quantity - 1)
    }
  }

  return (
    <div className='product-info'>
      <img
        className='product-image'
        src={props.product.image}
        alt='Product Name'
      />
      <p>{cartItemName}</p>
      <div className='quantity'>
        <button onClick={decrementQuantity}>-</button>
        <p>{quantity}</p>
        <button onClick={incrementQuantity}>+</button>
      </div>
    </div>
  );
}

export default CartItem;