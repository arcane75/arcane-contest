import React from 'react';
import './Header.css';
import logo from '.././Header/prog-cup.jpg'


const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <h1>Inter University Programming Contest</h1>
                <h2 className="budget">Budget: 10000 Dollar</h2>
            </div>

            <div>
                <img src={logo} alt="" />
            </div>
        </div>

    );
};

export default Header;