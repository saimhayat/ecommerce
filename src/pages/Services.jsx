import React from 'react';

export const Services = () => {
  return (
    <div className="main-content-page">
      <div className="container">
        <h2 className="page-title">Our Services</h2>
        <p className="page-description">
          Zappy-Mart is more than just an online store; we offer a suite of services designed to make your shopping journey smooth and satisfying.
        </p>
        <ul className="services-list">
          <li>
            <h3 className="service-item-title">Fast & Reliable Shipping</h3>
            <p className="service-item-description">
              Enjoy prompt delivery right to your doorstep with our trusted logistics partners. We offer various shipping options to suit your needs.
            </p>
          </li>
          <li>
            <h3 className="service-item-title">24/7 Customer Support</h3>
            <p className="service-item-description">
              Our dedicated customer service team is available around the clock to assist you with any queries or concerns.
            </p>
          </li>
          <li>
            <h3 className="service-item-title">Hassle-Free Returns</h3>
            <p className="service-item-description">
              Not completely satisfied? Our easy return policy ensures a smooth process for exchanges or refunds.
            </p>
          </li>
          <li>
            <h3 className="service-item-title">Secure Payment Gateway</h3>
            <p className="service-item-description">
              Shop with confidence knowing that your transactions are protected by state-of-the-art encryption and secure payment processing.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};