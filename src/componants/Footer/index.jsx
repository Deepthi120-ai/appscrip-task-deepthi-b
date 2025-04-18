
export const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="subscribe">
            <h4>BE THE FIRST TO KNOW</h4>
            <p>Sign up for updates from mettā muse.</p>
            <form>
              <input type="email" placeholder="Enter your e-mail..." />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
  
          <div className="footer-contact">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
  
            <h4>CURRENCY</h4>
            <div className="currency">
              <img src={`${process.env.PUBLIC_URL}/usa.png`} alt="usa"/>
              <p>USA</p>
            </div>
            <small>
              Transactions will be completed in Euro and a currency reference is available on hover.
            </small>
          </div>
        </div>
  
        <div className="footer-links">
          <div className="footer-column">
            <h5>mettā muse</h5>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>QUICK LINKS</h5>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>FOLLOW US</h5>
            <div className="social-icons">
              <img src={`${process.env.PUBLIC_URL}/instagram.png`} alt="instagram-img"/>
              <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="linkedin-img"/>
            </div>
  
            <h5>mettā muse ACCEPTS</h5>
            <div className="payment-icons">
              <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" />
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="MasterCard" />
              <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
              <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" />
              <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" />
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
