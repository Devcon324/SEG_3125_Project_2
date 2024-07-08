import destination from './assets/images/destination_icon.svg';
import phone from './assets/images/phone_icon.svg';

const Footer = () => {
  return (
    <footer id="contact">
      <div className='foot'>
        <div className="footerContactInfo">
          <img src={destination} alt="destination_icon" />
          <p>111 Rideau St, Ottawa, ON K1N 9J7</p>
        </div>
        <div className="footerContactInfo">
          <img src={phone} alt="phone_icon" />
          <p>(613) 555-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;