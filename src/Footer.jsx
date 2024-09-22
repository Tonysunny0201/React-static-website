// footer code 
import React from 'react'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footerchild">
        <h3>Alecta</h3>
        <p>
          Set up your footer quickly using the footer widget areas. With the option of 1-4 footer columns, you can
          be sure that all relevant information will look gorgeous in your footer.
        </p>
        <div className="contact-info">
          <address>
            18 Northumberland Avenue, London
          </address>
          <p>(+44) 871.075.0336</p>
          <p>alecta@qodeinteractive.com</p>
        </div>
      </div>

      <div className="footerchild">
        <h3>Links</h3>
        <ul>
          <li>Creativity is the best way to explore</li>
          <li>Fast organization of your work space ideas</li>
          <li>Set goals and make them possible to achieve</li>
          <li>Minimal design with a hint of a colour splash</li>
          <li>Games are the key for creative work days</li>
        </ul>
      </div>

      <div className="footerchild">
        <h3>Twitter feed</h3>
        <p>Couldn't connect with Twitter</p>
      </div>

      <div className="footerchild">
        <h3>Offices</h3>
        <p>
          Curabitur tincidunt quam ipsum, a dictum dui viverra ut. Donec at odio a justo vulpu.
        </p>
      </div>

      <div className="footer-icons">
        <a href="#">
          <i className="fas fa-user"></i>
        </a>
        <a href="#">
          <i className="fas fa-shopping-cart "></i>
        </a>
        <a href="#">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
