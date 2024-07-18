import React, { useState } from 'react';
// import styles
import '../styles/EmailForm.css';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  const sendMessage = () => {
    setName('');
    setEmail('');
    setMessage('');
    alert('Message sent!');
  };

  return (
    <div className='emailForm'>
      <div className='content'>
        <h1>Contact Us</h1>
        <p>Send us a message and we will get back to you as soon as possible.</p>
        <form className='emailForm' onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <br />
          <button type="submit"onClick={sendMessage}>Confirm Message</button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;