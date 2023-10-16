import React from 'react';
import './header.scss';

const Header = ({ paragraph, heading }) => {
  return (
    <div className='header-container'>
      <div className='featured-spacer'>
        <div className='line'></div>
        <p>{paragraph}</p>
      </div>
      <h2>{heading}</h2>
    </div>
  )
}

export default Header;