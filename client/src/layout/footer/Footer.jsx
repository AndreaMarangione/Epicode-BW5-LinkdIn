import React from 'react';
import LinkedinLogo from '../../components/linkedinlogo/LinkedinLogo';
import './footer.css';

const Footer = () => {
  const links = [
    'About',
    'Accessibility',
    'User Agreement',
    'Privacy Policy',
    'Cookie Policy',
    'Copyright Policy',
    'Brand Policy',
    'Guest Controls',
    'Community Guidelines'
  ]
  return (
    <footer className='footer-size'>
      <div className='container px-4 py-4'>
        <div className='items-container d-flex align-items-center flex-wrap gap-3'>
          <div className='d-flex align-items-center gap-1'>
            <LinkedinLogo width={56} height={14} />
            <span className='copyright-font-size'>© 2024</span>
          </div>
          <ul className='navbar-nav d-flex flex-row flex-wrap gap-3'>
            {
              links.map((link, index) =>
                <li
                  key={index}
                  className='nav-link link-font-size p-0'>
                  {link}
                </li>
              )}
          </ul>
        </div>
      </div>
    </footer >
  )
}

export default Footer