import React from 'react';
import CategoryCard from '../../components/category/CategoryCard';

const HomeScreen = () => {

    const tabCat=[
        {id:"1", title:"Hommes", description:"La mode pour hommes", image:"./images/imghomme.jpg"},
        {id:"2", title:"Femmes", description:"La mode pour Femmes", image:"./images/imgFemme.jfif"},
        {id:"3", title:"Hommes", description:"La mode pour enfants", image:"./images/kids.jpg"},
        {id:"4", title:"Bébés", description:"La mode pour bébés", image:"./images/bebe.jpg"},
    ];

    const catElement = tabCat.map(categorie => 
        <div className='cat w-100' key={categorie.id}>
          <CategoryCard title={categorie.title} description={categorie.description} image={categorie.image} />
        </div>
      ); 


    return (
        <div>
            <h1 className='text-center bg-dark text-light pb-1 '>La boutique de DEROZIER Zoé</h1>
            {/* <div className='d-flex'>
            <CategoryCard title={"Homme"} image={"./images/imghomme.jpg"} description={"La mode pour les hommes"}/>
            <CategoryCard title={"Femme"} image={"../images/imgFemme.jfif"} description={"La mode pour les Femmes"}/> */}
            <div className="row ">
                {catElement}
            </div>
            {/* </div> */}
        </div>
    );
};

export default HomeScreen;