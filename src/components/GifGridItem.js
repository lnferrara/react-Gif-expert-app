import React from "react";

export const GifGridItem = ({ id, url, title }) => {
  console.log(url, id, title);
  return (
    <div className="card animate__animated animate__fadeInDown">
      <img src={url} alt={title} />
      
    </div>
  );
};

export default GifGridItem;
