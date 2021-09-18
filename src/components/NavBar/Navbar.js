import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Agustina.woff'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className='navbarX sticky'>
        <a href="#mainX" className='navbar-logoX' onClick={closeMobileMenu}>
          Durai
        </a>
        <div className='menu-iconX' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menuX activeX' : 'nav-menuX'}>
          <li className='nav-itemX'>
            <Link to='/' className='nav-linksX' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className='nav-itemX'>
            <Link
              to='/'
              className='nav-linksX'
              onClick={closeMobileMenu}
            >
              About Me
            </Link>
          </li>

          <li className='nav-itemX'>
            <Link
              to='/s'
              className='nav-linksX'
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className='nav-itemX'>
            <Link
              to='/s'
              className='nav-linksX'
              onClick={closeMobileMenu}
            >
              Contact Me
            </Link>
          </li>

        </ul>

      </nav>
    </div>)
}

export default Navbar;
