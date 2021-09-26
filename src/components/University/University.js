import React from 'react';
import './University.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

const University = (props) => {
    const { name, address, vc, img, type, founded, motto, teamfee } = props.university;
    return (
        <div className="university-style">
            
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Address: {address}</p>
            <p>VC: {vc}</p>
            <p>Type: {type}</p>
            <p> Founded: {founded}</p>
            <p>motto: {motto}</p>
            <p>Team fee: {teamfee}</p>

            <button
                onClick={() => props.handleAddToCart(props.university)}
                className="btn-regular"
            ><FontAwesomeIcon icon={faPeopleArrows} /> Participate</button>
        </div>
    );
};

export default University;