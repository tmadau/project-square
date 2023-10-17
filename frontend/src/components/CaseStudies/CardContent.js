import React from 'react';

const CardContent = ({imageURL, title, paragraph}) => {
  return (
    <div className='container'>
      <div className='card'>
        <img src={imageURL} alt={title} />
        <div className='content'>
          <div className='line2'></div>
          <h3>{title}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default CardContent;