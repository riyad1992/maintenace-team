import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    //person object destructure
    const {Name, img, Gender, Age, Position, Salary} = props.person;
    return (
        <div>
            <div className="person">
                <div className="col">
                    <div className="card shadow">
                        <div className='person-img-div'>
                            <img src={img} className="card-img-top person-img" alt="..." />
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Name: {Name}</h6>
                            <p className="card-text">Gender: {Gender}</p>
                            <p className="card-text">Age: {Age}</p>
                            <p className="card-text">Position: {Position} </p>
                            <p className="card-text">Salary: ${Salary}</p>
                            <button onClick={() => props.addMemberHandler(props.person)} className='btn btn-info w-100 text-white'><span className="me-2"><FontAwesomeIcon icon={faUser} /></span>Select Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;