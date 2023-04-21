import React from 'react';
import './Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    const{authorImg,authorName, read, date} = props.user;
    return (
        <div className='container'>
            <div className='user'>
                <section style={{backgroundImage:`url(${authorImg})`}}></section>
                <div className='name'>
                    <div>{authorName}</div>
                    <p>{date}</p>
                </div>
            </div>
            <div className='time'>
                <p>{read} min read <FontAwesomeIcon icon={faBookmark} /></p>
            </div>
        </div>
    );
};

export default Person;