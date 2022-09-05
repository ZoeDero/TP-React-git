import React from 'react';
import './categoryCard.css'

const CategoryCard = ({title, image, description}) => {

     
    return (

    <div className="card col-6 d-flex flex-column align-items-center m-auto mt-5">
        <img src={image} className="card-img-top " alt="..."/>
    <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-dark">visiter</a>
    </div>
    </div>

    );
};

export default CategoryCard;