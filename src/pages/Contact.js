import EmailForm from "../components/EmailForm";
// import styles
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="ContactUs">
      <p style={{
          color: 'white',
          fontSize: '50px',
          textAlign: 'center',
          marginTop: '5px'
        }}>Contact Us</p>
      <EmailForm />
    </div>
  );
};

export default Contact;