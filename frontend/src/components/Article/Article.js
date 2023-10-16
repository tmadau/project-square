import React from 'react';
import ArticleContent from './ArticleContent';
import Header from '../Header/Header';
import './article.scss';
import webDev from './web-dev-icon.svg';
import UXIcon from './UX-icon.svg';
import appDev from './app-dev-icon.svg';
import blockChain from './block-chain-icon.svg';


const articleData = [
  {
    imageURL: webDev,
    title: 'Web development',
    description: 'We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'
  },
  {
    imageURL: UXIcon,
    title: 'User experience & design',
    description: 'Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business'
  },
  {
    imageURL: appDev,
    title: 'Mobile app development',
    description: 'Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'
  },
  {
    imageURL: blockChain,
    title: 'Blockchain solutions',
    description: 'We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'
  }
];

const Article = () => {
  return (
    <section>
      <Header 
        paragraph="What we do"
        heading="We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces" 
      />
      <div className='article-container'>
        {articleData.map((card, index) => (
          <ArticleContent key={index} {...card} /> 
        ))}
      </div>
    </section>
  )
}

export default Article