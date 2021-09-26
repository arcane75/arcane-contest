import React from 'react';
import './University.css';

const University = (props) => {
    const {name, address, vc, img, type, founded, motto} = props.university;
    return (
        <div className="university-style">
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>Address: {address}</p>
            <p>VC: {vc}</p>
            <p>Type: {type}</p>
            <p> Founded: {founded}</p>
            <p>motto: {motto}</p>
        </div>
    );
};

export default University;