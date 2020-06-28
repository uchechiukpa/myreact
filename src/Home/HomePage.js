import React from 'react';
import './HomePage.css'
import Header from './Header';
import Body from './Body';

function HomePage(props) {
    return (
        <div className='container-div-homepage'>
            <div className = 'bg-text'>
                <Header />
            </div>
           
            
            <Body />
        </div>
    );
}

export default HomePage;