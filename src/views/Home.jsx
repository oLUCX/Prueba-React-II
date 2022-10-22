import '../styles/Home.css'
import React from 'react'
import Productos from '../components/Productos'
import Banner from '../components/Banner'

const Home = () => {
  return (
      <div className="home">
      <Banner></Banner>
      <Productos></Productos>
      </div>
  );
};

export default Home