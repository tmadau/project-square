import React from "react";

const CardContent = ({ imageURL, title, paragraph }) => {
  const customImageWidth = "100%"; // Define your custom image width here

  const imageStyle = {
    width: customImageWidth,
  };

  return (
    <div className="container">
      <div className="card">
        <div>
          <img src={imageURL} al={title} style={imageStyle} />
        </div>
        <div className="content">
          <div className="line2"></div>
          <h3>{title}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
