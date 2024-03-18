import React from 'react';
import Link from 'next/link';
import './../../css/navbar.css';

function Navbar() {
  return (
    <div className='heading'>
      <img className='top-img' src='../images/top_img.png' alt="Top Image" />
      <nav className="navbar">
        <ul className="nav-ul">
          <li className='nav-li'>
            <Link href="/our-story" className="nav-link">
              Our Story
            </Link>
          </li>
          <li className='nav-li'>
            <Link href="/collections" className="nav-link">
              Collections
            </Link>
          </li>
          <li className='nav-li'>
            <Link href="/schemes" className="nav-link">
              Schemes
            </Link>
          </li>
          <li className='nav-li'>
            <Link href="/store-locator" className="nav-link">
              Store Locator
            </Link>
          </li>
          <li className='nav-li'>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
