import React from 'react';
import './Member.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Member = (props) => {
    const {img, Name} = props.addMember
    return (
        <div className='d-flex add-member mb-2 p-1 align-items-center rounded-3 justify-content-between'>
            <img className='cart-img me-2' src={img} alt=""/>
            <h6 className='member-name'>{Name}</h6>
            <button className='border border-0 text-danger'><FontAwesomeIcon icon={faTrash} /></button>
        </div> 
    );
};

export default Member;