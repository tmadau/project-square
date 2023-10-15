import React from 'react';
import Header from '../Header/Header';
import './case-studies.scss';
import theOlympian from './the-olympian.png';
import skhoSkho from './skho-skho.png';
import savingsJar from './savings-jar.png';

const CaseStudies = () => {
  return (
    <section>
      <Header 
        paragraph="Case Studies"
        heading=""
      />
      <img src={theOlympian} alt=''/>

      <img src={savingsJar} alt=''/>
      <img src={skhoSkho} alt=''/>
    </section>
  )
}

export default CaseStudies;