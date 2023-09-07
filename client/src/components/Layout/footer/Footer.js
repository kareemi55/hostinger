/* eslint-disable react/jsx-no-target-blank */
import "./style.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "./images/logo.png";
import paymentCards1 from "./images/american-express-curved-64px.png";
import paymentCards2 from "./images/discover-curved-64px.png";
import paymentCards3 from "./images/mastercard-curved-64px.png";
import paymentCards4 from "./images/paypal-curved-64px.png";
import paymentCards5 from "./images/visa-curved-64px.png";
import paymentCards6 from "./images/western-union-curved-64px.png";

const Footer = () => {
  return (
    <footer className=' Footer'>
      <div className='container'>
        {" "}
        <div className='up-Items  d-flex justify-around items-center '>
          <div className='text-sm'>
            
            <span className='font-semibold'>IMAN TILES </span>
          </div>
          <div className='d-flex justify-around space-x-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              className='text-gray-700 hover:text-gray-900'>
              <FaFacebook />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              className='text-gray-700 hover:text-gray-900'>
              <FaTwitter />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              className='text-gray-700 hover:text-gray-900'>
              <FaInstagram />
            </a>
          </div>
        </div>
        
        <div className='copyR text-sm text-center'>
          <a
            className='font-semibold'
            href='https://cloudlem.com/'
            target='_blank'>
            cloudlem private limited 
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
