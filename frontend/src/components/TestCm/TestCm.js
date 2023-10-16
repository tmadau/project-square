import React from 'react';
import  skhoSkho from '../CaseStudies/savings-jar.png';
import './testcm.scss';

const TestCm = () => {
  return (
    <div>
        <div className="case-studies">
      <div className="card-square">
        <div className="card-image">
          <img className="x960-icon" alt="" src={skhoSkho} />
        </div>
        <div className="card-content">
          <div className="card-content-child" />
          <b className="card-title">Skhokho seMali</b>
          <div className="lorem-ipsum-dolor">
            Helping South Africans become #CashCleva with Skhokho and TymeBank.
          </div>
        </div>
      </div>
      <div className="card-square1">
        <div className="card-image1">
          <img className="x960-icon" alt="" src="/1280x9601@2x.png" />
        </div>
        <div className="card-content">
          <div className="card-content-child" />
          <b className="card-title">The Savings Jar</b>
          <div className="lorem-ipsum-dolor">
            Grow your savings treasure and grow your dragon.
          </div>
        </div>
      </div>
      <div className="card-square2">
        <div className="card-image">
          <img className="x960-icon" alt="" src="/1280x9602@2x.png" />
        </div>
        <div className="card-content2">
          <div className="card-content-child" />
          <b className="card-title">The Olympian</b>
          <div className="lorem-ipsum-dolor">{`The only athlete in the world to do her Olympic routine in 2020.              `}</div>
        </div>
      </div>
      <div className="heading">
        <div className="heading-child" />
        <div className="case-studies1">{`Case studies `}</div>
      </div>
    </div>
    </div>
  )
}

export default TestCm