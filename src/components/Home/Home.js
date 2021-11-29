import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;