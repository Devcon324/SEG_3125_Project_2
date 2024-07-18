import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import { NavLink } from "react-router-dom";
import SearchBar from './Searchbar';

function NavScrollExample() {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='title'><h1>Style Wear</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '750px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            {/* <NavDropdown title="Popular Designs" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">ALL SHIRTS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">T-Shirt</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Long-Sleeve Shirt</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Hoodie</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Tank Top</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Dress Shirt</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <div className='d-flex'>
            < SearchBar />
            <Button variant="outline-success">Search</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;