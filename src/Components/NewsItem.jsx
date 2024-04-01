import React from 'react';
import image from "../assets/News.jpg"




const NewsItem = ({ title, description, src, url }) => {
 
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" 
   style={{maxWidth:"345px" }}>
      <img src={src?src:image} className="card-img-top " style={{height:"200px"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,150)}</h5>
        <p className="card-text">{description?description.slice(0,100):"Unfortunately, no news articles were found Please check back later for updates."}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
