import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading logo-heading">PhysiTask</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/projects">Find Task</a></li>
            <li><a href="/projectsubmission">Hire</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Resources</h3>
          <ul className="footer-links">
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-links">
            <li>Email: support@physitask.com</li>
            <li>Phone: +91 1234567890</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PhysiTask. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
