import React from 'react';
import './header.scss';

const Header = ({ paragraph, heading }) => {
  return (
    <>
      <p>{paragraph}</p>
      <h2>{heading}</h2>
    </>
  )
}

export default Header;