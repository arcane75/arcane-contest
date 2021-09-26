import React, { useEffect, useState } from 'react';
import University from '../University/University';
import './Universities.css';

const Universities = () => {
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        fetch('./universities.JSON')
            .then(res => res.json())
            .then(data => setUniversities(data));
    }, []);


    return (
        <>
            <div className="university-list">
                <input
                    type="text"
                    placeholder="Search University" />
            </div>

            <div className="universities-container">
                <div className="university-container">
                    {
                        universities.map( university => <University
                        key = { university.eiin}
                        university = {university}
                        >
                        </University> )
                    }
                </div>

                <div className="cart-container">

                </div>
            </div>
        </>
    );
};

export default Universities;
