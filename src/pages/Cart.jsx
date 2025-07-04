import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxRate = 0.05;
  const taxes = subtotal * taxRate;
  const total = subtotal + taxes;

  const handleCheckout = () => {
    toast.success('Redirecting to checkout...', {
      position: 'top-center',
      autoClose: 1200,
    });

    // Delay navigation slightly for the toast
    setTimeout(() => {
      navigate('/checkout');
    }, 1300);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">🛒 Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>

                    <div className="cart-item-quantity-controls">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-from-cart-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Box */}
            <div className="cart-summary-box">
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

              {/* ✅ Trigger toast + animation navigation */}
              <button onClick={handleCheckout} className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>

            <p className="cart-footer-message">
              🧾 Thank you for shopping with us!
            </p>
          </>
        )}
      </div>
    </div>
  );
};
