import React from 'react';
import Header from '../Header/Header';
import FooterLinks from './FooterLinks';
import './footer.scss';

const Footer = () => {
  const termsLinks = [
    { url: '/', text: 'Terms of service' },
    { url: '/', text: 'Privacy policy' },
    { url: '/', text: 'Impressum' },
  ];

  const socialLinks = [
    { url: '/', text: 'Facebook' },
    { url: '/', text: 'Instagram' },
    { url: '/', text: 'Twitter' },
  ];

  const companyLinks = [
    { url: '/', text: 'Github' },
    { url: '/', text: 'Linkedin' },
    { url: '/', text: 'Teams' },
  ];

  const moreLinks = [
    { url: '/', text: 'Youtube' },
    { url: '/', text: 'Behance' },
    { url: '/', text: 'Dribble' },
  ];

  return (
    <footer>
      <div className='contact-container'>
        <div>
          <Header
            paragraph="Contact us"
            heading="Have a project in mind? Let's make it happen" 
          />
        </div>
        <div className='address-details'>
          <p>
            22 Street Name, Surburb, 8000, Cape Town, South Africa +27 21 431 0001
          </p>
          <a href=''>enquirie@website.co.za</a>
        </div>
        <div className='links-container'>
          <div>
            <FooterLinks links={termsLinks} />
          </div>
          <div>
            <FooterLinks links={socialLinks} />
          </div>
          <div>
            <FooterLinks links={companyLinks} />
          </div>
          <div>
            <FooterLinks links={moreLinks} />
          </div>
        </div>
        <div>        
          <li><a href='/'>Explore open jobs</a></li>
          <p>&copy; 2000&minus;2023 Company Name</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer;