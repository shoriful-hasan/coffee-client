import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;