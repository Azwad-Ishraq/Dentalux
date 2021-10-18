import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Services></Services>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;