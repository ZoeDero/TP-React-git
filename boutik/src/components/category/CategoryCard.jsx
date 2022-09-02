import React from 'react';
import './categoryCard.css'

const CategoryCard = () => {
    return (

    <div className="card w-25 d-flex flex-column align-items-center m-auto">
        <img src="https://picsum.photos/200/300" className="card-img-top " alt="..."/>
    <div className="card-body text-center">
        <h5 className="card-title">Produit 1</h5>
        <p className="card-text">4M €</p>
        <a href="#" className="btn btn-primary">Add to cart</a>
    </div>
    </div>

    );
};

export default CategoryCard;