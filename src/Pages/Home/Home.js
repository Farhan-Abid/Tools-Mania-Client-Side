import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer';
import Phone from './Phone/Phone';
import Reviews from './Reviews';
import Summary from './Summary';
import Sweeper from './Sweeper/Sweeper';
import Tools from './Tools/Tools';

const Home = ({setProduct}) => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Tools setProduct={setProduct}></Tools>
            <h1 className='text-center mt-9 mb-9 text-4xl text-primary uppercase font-bold '>Business Summary</h1>
            <Summary></Summary>
            <Sweeper></Sweeper>
            <Reviews></Reviews>
            <Phone></Phone>
            <Footer></Footer>
        </div>
    );
};

export default Home;