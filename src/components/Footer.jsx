export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-brand-title">ZappyMart</h3>
            <p className="footer-brand-slogan">Premium e-commerce experience</p>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Contact</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} ZappyMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};