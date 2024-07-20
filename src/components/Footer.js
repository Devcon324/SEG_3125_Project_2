import destination from '../assets/images/destination_icon.svg';
import phone from '../assets/images/phone_icon.svg';
import facebook from '../assets/images/facebook_icon.svg';
import twitter from '../assets/images/twitter_icon.svg';
import instagram from '../assets/images/instagram_icon.svg';
// import styles
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <footer id="contact">
        <div className='foot'>
          <div className="footerContactInfo">
            <img src={destination} alt="destination_icon" />
            <address>111 Rideau St, Ottawa, ON K1N 9J7</address>
          </div>
          <div className="footerContactInfo">
            <img src={phone} alt="phone_icon" />
            <phone>(613) 555-5555</phone>
          </div>
            <img src={facebook} alt="facebook_icon" />
            <img src={instagram} alt='instagram_icon' />
            <img src={twitter} alt="twitter_icon" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;