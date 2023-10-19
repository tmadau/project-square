import React from 'react';

const FooterLinks = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </>
  )
}

export default FooterLinks