import React from 'react';
import './University.css';

const University = (props) => {
    const {name, address, vc, img, type, founded, motto} = props.university;
    return (
        <div>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>address: {address}</p>
            <p>vc: {vc}</p>
            <p>type: {type}</p>
            <p> founded: {founded}</p>
            <p>motto: {motto}</p>
        </div>
    );
};

export default University;