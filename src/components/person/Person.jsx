import React from 'react';
import './Person.css'

const Person = (props) => {
    const{authorImg,authorName, read} = props.user;
    return (
        <div className='container'>
            <div className='user'>
                <p style={{backgroundImage:`url(${authorImg})`}}></p>
                <p>{authorName}</p>
            </div>
            <div className='time'>
                <p>{read}</p>
            </div>
        </div>
    );
};

export default Person;