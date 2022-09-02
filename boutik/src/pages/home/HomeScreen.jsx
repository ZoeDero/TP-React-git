import React from 'react';
import CategoryCard from '../../components/category/CategoryCard';

const HomeScreen = () => {
    return (
        <div>
            <h1 className='text-center'>La boutique de DEROZIER Zoé</h1>
            <div className='d-flex'>
            <CategoryCard title={"Homme"} image={"./images/imghomme.jpg"} description={"La mode pour les hommes"}/>
            <CategoryCard title={"Femme"} image={"../images/imgFemme.jfif"} description={"La mode pour les Femmes"}/>
            </div>
        </div>
    );
};

export default HomeScreen;