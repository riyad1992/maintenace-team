import React from 'react';
import Member from './Member/Member';
import './Cart.css'

const Cart = (props) => {
    const {addMembers} = props;

    //get total salary for team
    let totalSalary = (prevs, members) => parseInt(prevs) + parseInt(members.Salary) 
    let total = addMembers.reduce(totalSalary, 0)

    return (
        <div className='shadow p-2'>
            <h4>Total Members: {addMembers.length}</h4>
            <p>Team Total Salary: ${total}</p>
            <ul>
                {/* add member for cart  */}
                {   
                    addMembers.map(addMember => <li>{<Member addMember={addMember}></Member>}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;