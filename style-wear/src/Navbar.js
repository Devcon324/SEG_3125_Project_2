import destination from './assets/images/destination_icon.svg';
import phone from './assets/images/phone_icon.svg';
import facebook from './assets/images/facebook_icon.svg';
import twitter from './assets/images/twitter_icon.svg';
import instagram from './assets/images/instagram_icon.svg';


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
        <div className="links">
          <a href="/">Home</a>
          <a href="/shirts">Shirts</a>
          <a href="/pants">Pants</a>
          <a href="/shoes">Shoes</a>
          <a href="/examples">Examples</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;