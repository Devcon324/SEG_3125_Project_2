import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './Searchbar';
import shoppingCart from '../assets/images/shoppingCart.svg';
import { Tooltip } from 'react-tooltip'

// import styles
import '../styles/Navbar.css';


const NavScrollExample = () => {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className='title'><h1>Style Wear</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '750px' }}
            navbarScroll
          >
            <Nav.Link href="/"
              data-tooltip-id="home-tooltip"
              data-tooltip-content="Our main page"
              data-tooltip-place="top"
              >Home
              <Tooltip id="home-tooltip" />
            </Nav.Link>
            <Nav.Link href="/shop"
              data-tooltip-id="shop-tooltip"
              data-tooltip-content="shop for our products"
              data-tooltip-place="top"
              >Shop
              <Tooltip id="shop-tooltip" />
            </Nav.Link>
            <Nav.Link href="/faq"
              data-tooltip-id="faq-tooltip"
              data-tooltip-content="Frequently Asked Questions"
              data-tooltip-place="top"
            >FAQ
              <Tooltip id="faq-tooltip" />
            </Nav.Link>
            <Nav.Link href="/contact"
              data-tooltip-id="contact-tooltip"
              data-tooltip-content="Contact Us"
              data-tooltip-place="top"
              >Contact
              <Tooltip id="contact-tooltip" />
            </Nav.Link>
          </Nav>
          <div className='d-flex'>
            <Nav.Link>
              {/* Cart does not go to other cart because we need a database, hard coding is not the point of the SEG 3125 course */}
              <img src={shoppingCart}
              alt="cart"
              className='cartIcon'
              data-tooltip-id="cart-tooltip"
              data-tooltip-content="Shopping Cart"
              data-tooltip-place="bottom"
            /></Nav.Link>
            <Tooltip id="cart-tooltip" />
            < SearchBar />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;