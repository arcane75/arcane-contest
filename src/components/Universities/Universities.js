import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import University from '../University/University';
import './Universities.css';

const Universities = () => {
    const [universities, setUniversities] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./universities.JSON')
            .then(res => res.json())
            .then(data => setUniversities(data));
    }, []);

    const handleAddToCart = (university) => {
        const newCart = [...cart, university];
        setCart(newCart);
    }

    return (
        <>
            <div className="university-list">
                <input
                    type="text"
                    placeholder="Search University ..." />
            </div>

            <div className="universities-container">
                <div className="university-container">
                    {
                        universities.map( university => <University
                        key = { university.eiin}
                        university = {university}
                        handleAddToCart={handleAddToCart}
                        >
                        </University> )
                    }
                </div>

                <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
            </div>
        </>
    );
};

export default Universities;
