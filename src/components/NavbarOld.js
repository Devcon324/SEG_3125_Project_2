import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import SearchBar from './Searchbar';
// import styles
import '../styles/Navbar.css';


const NavbarOld = () => {
  return (
    <nav className="navbar">
      <SearchBar />
      <div className="links">
        <Button variant="secondary" className="mt-2" to="/">Home</Button>
        <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Popular Shirts"
        className="mt-2"
        data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1">ALL SHIRTS</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-1">T-Shirt</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Long-Sleeve Shirt</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Hoodie</Dropdown.Item>
          <Dropdown.Item href="#/action-6">Tank Top</Dropdown.Item>
          <Dropdown.Item href="#/action-9">Dress Shirt</Dropdown.Item>
        </DropdownButton>
        <Button variant="secondary" className="mt-2" href="#examples">Examples</Button>
        <Button variant="secondary" className="mt-2" href="#contact">Contact</Button>
      </div>
    </nav>
  );
}

export default NavbarOld;