import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://www.greatfrontend.com/api/questions/contact-form'
      , {
        name,
        email,
        message,
      });
      setData({ success: true, message: response.data });
    } catch (error) {
      setData({ success: false, message: 'An error occurred' });
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>

      {data && (
        <div>
          {data.success ? (
            <p>Request successful: {data.message}</p>
          ) : (
            <p>Request failed: {data.message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
