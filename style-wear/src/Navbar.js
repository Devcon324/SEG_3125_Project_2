import destination from './assets/images/destination_icon.svg';
import phone from './assets/images/phone_icon.svg';
import facebook from './assets/images/facebook_icon.svg';
import twitter from './assets/images/twitter_icon.svg';
import instagram from './assets/images/instagram_icon.svg';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

import SearchBar from './Searchbar';

const Navbar = () => {
    return (
    <div className="header">
      <div className="title">
        <h1>Style Wear</h1>
      </div>
      <div className="contactInfo">
        <div className='streetPhone'>
          <img src={destination} alt="destination_icon" />
          <p>111 Rideau St, Ottawa, ON K1N 9J7</p>
          <img src={phone} alt="phone_icon" />
          <p>(613) 555-5555</p>
        </div>
        <div className="socialMedia">
          <img src={facebook} alt="facebook_icon" />
          <img src={instagram} alt='instagram_icon' />
          <img src={twitter} alt="twitter_icon" />
        </div>
      </div>
      <nav className="navbar">
        <SearchBar />
        <div className="links">
          <Button variant="secondary" className="mt-2" href="/">Home</Button>
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
    </div>
  );
}

export default Navbar;