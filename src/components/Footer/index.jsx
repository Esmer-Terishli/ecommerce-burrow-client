import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/_Footer.style.scss";

const Footer = () => {
  return (
    <footer className={`py-9 mt-16`}>
      <h1 className="container mx-auto font-neucha pb-6">BURROW</h1>
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h2 className="text-2xl font-semibold mb-4 pt-4 md:pt-0">Shopping Services</h2>
          <ul>
            <li className="mb-2"><Link to="">Schedule Consultation</Link></li>
            <li className="mb-2"><Link to="">Showrooms</Link></li>
            <li className="mb-2"><Link to="">Trade Program</Link></li>
            <li className="mb-2"><Link to="">Outlet</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h2 className="text-2xl font-semibold mb-4 pt-4 md:pt-0">Resources</h2>
          <ul>
            <li className="mb-2"><Link to="">Look Up Order Status</Link></li>
            <li className="mb-2"><Link to="">Assembly Instructions</Link></li>
            <li className="mb-2"><Link to="">Returns</Link></li>
            <li className="mb-2"><Link to="">Shipping & Delivery</Link></li>
            <li className="mb-2"><Link to="">FAQ</Link></li>
            <li className="mb-2"><Link to="">Refer a Friend</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h2 className="text-2xl font-semibold mb-4 pt-4 md:pt-0">About</h2>
          <ul>
            <li className="mb-2"><Link to="">Our Story</Link></li>
            <li className="mb-2"><Link to="">Reviews</Link></li>
            <li className="mb-2"><Link to="">Careers</Link></li>
            <li className="mb-2"><Link to="">Financing</Link></li>
            <li className="mb-2"><Link to="">Patents</Link></li>
            <li className="mb-2"><Link to="">Our Blog</Link></li>
          </ul>
        </div>
        

        <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
          <h2 className="text-2xl font-semibold mb-4 pt-4 md:pt-0">
            Contact Customer Experience
          </h2>
          <address>
            Email: <a href="mailto:support@burrow.com">support@burrow.com</a>
            <br />
            Telephone number: <a href="sms:2246287769">224-628-7769</a>
            <br />
            Hours:
            <br />
            Monday to Friday — 10a to 6p EST:<br />
            Saturday to Sunday — 10a to 2p EST:<br />
          </address>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; Copyright 2023 Burrow Furniture. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
