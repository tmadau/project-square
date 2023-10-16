import React from 'react';
import '../TestCm/testcm.scss';

const CardContent = ({imageURL, title, paragraph}) => {
  // const cardStyle = {
  //   background: `url(${imageURL})`, // Set the background image
  //   backgroundSize: 'cover',        // Adjust background size as needed
  // };

  return (
    <div className='card'>
      <div>
        <div>
          <img src={imageURL} alt={title} />
        </div>
        <div>
          <div className='line2'></div>
          <h3>{title}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default CardContent;