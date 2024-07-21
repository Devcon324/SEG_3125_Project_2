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
    if (!name || !email || !message) {
      alert('Please fill out all fields');
      return;
    }
    else if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address');
      return;
    }
    else if (message.length < 10) {
      alert('Message must be at least 10 characters long');
      return;
    }
    else {
      sendMessage();
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  const sendMessage = () => {
    // CLEAR FORM
    setName('');
    setEmail('');
    setMessage('');
    alert('Message sent successfully');
  };

  return (
    <div className='emailForm'>
      <div className='content'>
        <p>Send us a message and we will get back to you as soon as possible.</p>
        <form className='emailForm' onSubmit={handleSubmit}>
          <label>
            Name:
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your message"
            />
          </label>
          <br />
          <label>
            Email:
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            />
          </label>
          <br />
          <button
            className='submitButton'
            type="submit"
            onClick={handleSubmit}
          >Confirm Message</button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;