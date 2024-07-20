import React from 'react';
import CartItem from '../components/CartItem';
import products from '../data/Products';

// import styles
import '../styles/Cart.css';

const Cart = (props) => {
  // look at the URL and get the value of the product query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const searchedProductName = searchParams.get('product');

  //use the searchedProductName to filter the products by product.name
  const searchShirtByName = (products) => {
    // returns the product object that matches the searchedProductName
    return products.filter(product => {
      return product.name.toLowerCase().includes(searchedProductName.toLowerCase());
    });
  };
  // const nameedProd = searchShirtByName(products);
  const namedProd = searchShirtByName(products)[0];
  // console.log(searchShirtByName(products));
  // console.log("OBJ NAME " + namedProd);
  // console.log("OBJ NAME " + JSON.stringify(namedProd));

  console.log("OBJ NAME " + JSON.stringify(namedProd));
  const GST = Number((namedProd.price * 1.13).toFixed(2));
  const QST = Number((namedProd.price * 1.10).toFixed(2));
  const total = Number((namedProd.price + GST + QST).toFixed(2));

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

      <div className="cart-details">
        <div className='financial'>
          <div>
            <h3>Subtotal</h3>
            <p>Items:                   ${namedProd.price} </p>
            <p>Shipping & Handling: 	  $0.00</p>
            <p>Estimated GST/HST: 	    ${GST}</p>
            <p>Estimated PST/RST/QST: 	${QST}</p>
            <p>Total: 	                ${total}</p>
          </div>
          <div>
            <button className='purchase-button' onClick={handleOrder}>Order Now!</button>
          </div>
        </div>
        <div className='products-in-cart'>
          <CartItem product={namedProd}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;