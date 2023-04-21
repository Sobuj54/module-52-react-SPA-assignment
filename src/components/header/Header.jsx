import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Knowledge Cafe</h2>
            {/* <img src="newcomer-get-know-teammates-pleased-good-looking-businesswoman-transparent-glasses-blue-collar-shirt-smiling-broadly-assuring-good-quality-product-gray-wall" alt="" /> */}
            <p style={{backgroundImage:`url('https://www.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1157693.htm#query=people&position=1&from_view=search&track=sph')`}}></p>
        </div>
    );
};

export default Header;