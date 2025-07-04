import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxRate = 0.05;
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2 className="checkout-title">🧾 Checkout</h2>

        <div className="checkout-content-grid"> {/* Main grid for form and summary */}
          {/* Left Column: Form with nested 2-column layout for Shipping/Payment */}
          <form className="checkout-form-main"> {/* Overall form container */}

            {/* Inner Grid for Shipping and Payment sections */}
            <div className="form-sections-two-columns">
              <div className="shipping-details-section">
                <h3 className="form-section-title">Shipping Information</h3>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input type="email" id="emailAddress" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input type="text" id="streetAddress" placeholder="Street Address" required />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" placeholder="City" required />
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input type="text" id="postalCode" placeholder="Postal Code" required />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input type="text" id="country" placeholder="Country" required />
                </div>
              </div>

              <div className="payment-details-section">
                <h3 className="form-section-title">Payment Details</h3>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input type="text" id="cardNumber" placeholder="**** **** **** 1234" required />
                </div>
                <div className="form-group">
                  <label htmlFor="nameOnCard">Name on Card</label>
                  <input type="text" id="nameOnCard" placeholder="Name on Card" required />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
                  <input type="text" id="expiryDate" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" placeholder="CVV" required />
                </div>
              </div>
            </div> {/* End form-sections-two-columns */}

            <button type="submit" className="place-order-btn">Place Order</button>
          </form>

          {/* Right Column: Summary */}
          <div className="cart-summary-box">
            <h3 className="summary-section-title">Order Summary</h3>
            <div className="cart-summary-line">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-line">
              <span>Taxes (5%):</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="cart-total-line">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div> {/* End checkout-content-grid */}
      </div>
    </div>
  );
};

export default CheckoutPage;