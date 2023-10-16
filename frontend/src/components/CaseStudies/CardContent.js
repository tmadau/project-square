import React from 'react';

const CardContent = ({imageURL, title, paragraph}) => {
  return (
    <div className='card'>
      <img src={imageURL} alt={title} />
      <div>
        <div className='line2'></div>
        <h3>{title}</h3>
      </div>
      <p>{paragraph}</p>
    </div>
  )
}

export default CardContent;