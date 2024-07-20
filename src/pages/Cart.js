import React from 'react';
import CartItem from '../components/CartItem';
import products from '../data/Products';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
// import styles
import '../styles/Cart.css';

const Cart = (props) => {
  // look at the URL and get the value of the product query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const searchedProductName = searchParams.get('product');

  /*
    use the searchedProductName to filter the products by product.name
    obj.filter returns an array of objects that match the condition
    */
  const searchShirtByName = (products) => {
    // returns the product object that matches the searchedProductName
    return products.filter(product => {
      return product.name.toLowerCase().includes(searchedProductName.toLowerCase());
    });
  };

  // get the first element of the array
  const namedProduct = searchShirtByName(products)[0];

  // console.log(searchShirtByName(products));
  // console.log("OBJ NAME " + namedProduct);
  // console.log("OBJ NAME " + JSON.stringify(namedProduct));

  // calculate the GST, QST, and total
  const GST = Number((namedProduct.price * 1.13).toFixed(2));
  const QST = Number((namedProduct.price * 1.10).toFixed(2));
  const total = Number((namedProduct.price + GST + QST).toFixed(2));

  // alert the user that the order has been made when pressing the button
  const handleOrder = () => {
    alert("Order has been made!");
  };

  return (
    <div className='cart'>
      <div className="cartTitle">
        {/* <p style={{color: 'white'}}>You are buying {searchedProductName}</p> */}
        <p
          style={{
            color: 'white',
            fontSize: '50px',
            textAlign: 'center',
            marginTop: '5px'
          }}
        >
          Cart
        </p>
      </div>

        <NavLink
        className='backButton'
        to='/shop'
        data-tooltip-id="back-tooltip"
        data-tooltip-content="go back to the shop"
        data-tooltip-place="top"
        >Back to Shop</NavLink>
        <Tooltip id="back-tooltip" />

      <div className="cart-details">
        <div className='financial'>
          <div>
            <h3>Subtotal</h3>
            <p>Items:                   ${namedProduct.price} </p>
            <p>Shipping & Handling: 	  $0.00</p>
            <p>Estimated GST/HST: 	    ${GST}</p>
            <p>Estimated PST/RST/QST: 	${QST}</p>
            <p>Total: 	                ${total}</p>
          </div>
          <div>
            <button
            className='purchase-button'
            onClick={handleOrder}
            data-tooltip-id="purchase-tooltip"
            data-tooltip-content="make the purchase"
            data-tooltip-place="bottom"
            >Order Now!</button>
            <Tooltip id="purchase-tooltip" />
          </div>
        </div>
        <div className='products-in-cart'>
          <CartItem product={namedProduct}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;