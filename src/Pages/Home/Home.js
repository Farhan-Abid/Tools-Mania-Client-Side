import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools/Tools';

const Home = ({setProduct}) => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Tools setProduct={setProduct}></Tools>
            <h1 className='text-center mt-9 mb-9 text-4xl text-primary uppercase font-bold '>Business Summary</h1>
            <Summary></Summary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;