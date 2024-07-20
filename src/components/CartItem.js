import React from 'react';
import { useState } from 'react';

const CartItem = (props) => {
  // get the name of the product from the props
  const cartItemName = JSON.stringify(props.product.name).replace(/"/g, '');


  // console.log("in CartItem.js quantity = " + JSON.stringify(props.quantity));
  // console.log("in CartItem.js quantity = " + JSON.stringify(props.quantity));
  // console.log("in CartItem.js product = " + JSON.stringify(props.product.name));

  /*
  PROBLEM: I need to track the quantity of the product for the users cart
  SOLUTION: i need to make a user account, who has a cart object
  that has a list of products and their quantities
  point of the course is not for semantics, but for UI design
  */

  // this is a hook that will keep track of the quantity of the product
  // [variable name, function to update the variable] = useState(initial value)
  // function ahs form of name(logic to update the variable)
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