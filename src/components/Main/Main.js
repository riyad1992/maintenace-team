import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Person from '../Person/Person';
import './Main.css'

const Main = () => {
    const [persons, setStudents] = useState([])
    const [displaySearchMember, setDisplaySearchMember] = useState([])
    const [addMembers, setAddMembers] = useState([])
    useEffect(() => {
        fetch('./person.json')
        .then(res => res.json())
        .then(data => {
            setStudents(data)
            setDisplaySearchMember(data)
        })
    },[])
    //onclick handler function
    const addMemberHandler = (member) => {
        const newMember = [...addMembers, member]
        setAddMembers(newMember)
        console.log(newMember)
    }
    //onchange handler function
    const searchMember = event => {
        const searchText = event.target.value;
        const matchedMember = persons.filter(person => person.Name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplaySearchMember(matchedMember)
    }
    return (
        <div>
            <Header searchMember={searchMember}></Header>
            {/* main section */}
            <div className='container'>
                <div className='row'>
                    <div className="row row-cols-1 row-cols-md-3 g-3 col-9">
                        {
                            displaySearchMember.map(person => <Person 
                                key={person.ID} 
                                addMemberHandler={addMemberHandler} person={person}
                                ></Person>)
                        }
                    </div>
                    {/* cart section  */}
                    <div className='col-3 g-4'> 
                        <Cart addMembers={addMembers}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;