import React from 'react';

export const Contact = () => {
  return (
    <div className="main-content-page">
      <div className="container">
        <h2 className="page-title">Contact Us</h2>
        <p className="page-description">
          We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to give us feedback, feel free to reach out.
        </p>
        <div className="contact-info">
          <p><strong>Email:</strong> support@ZappyMart.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 E-commerce Street, Digital City, WEB 98765</p>
        </div>
        <div className="contact-form-wrapper">
          <h3 className="form-title">Send us a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};