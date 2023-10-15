import React from 'react';
import Header from '../Header/Header';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <Header
        paragraph="Contact us"
        heading="Have a project in mind? Let make it happen" 
      />
      <ul>
        <li><a href='/'>Link1</a></li>
        <li><a href='/'>Link2</a></li>
        <li><a href='/'>Link3</a></li>
      </ul>
      <ul>
        <li><a href='/'>Link1</a></li>
        <li><a href='/'>Link2</a></li>
        <li><a href='/'>Link3</a></li>
      </ul>
      <ul>
        <li><a href='/'>Link1</a></li>
        <li><a href='/'>Link2</a></li>
        <li><a href='/'>Link3</a></li>
      </ul>
      <ul>
        <li><a href='/'>Link1</a></li>
        <li><a href='/'>Link2</a></li>
        <li><a href='/'>Link3</a></li>
      </ul>
      <ul>
        <li><a href='/'>Link1</a></li>
        <li><a href='/'>Link3</a></li>
      </ul>
    </footer>
  )
}

export default Footer;