import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Navbars from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;