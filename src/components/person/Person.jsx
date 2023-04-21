import React from 'react';
import './Person.css'

const Person = (props) => {
    const{authorImg,authorName, read, date} = props.user;
    return (
        <div className='container'>
            <div className='user'>
                <section style={{backgroundImage:`url(${authorImg})`}}></section>
                <div className='name'>
                    <h6>{authorName}</h6>
                    <p>{date}</p>
                </div>
            </div>
            <div className='time'>
                <p>{read}</p>
            </div>
        </div>
    );
};

export default Person;