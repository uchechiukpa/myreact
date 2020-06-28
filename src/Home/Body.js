import React from 'react';
import './Body.css'
import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom'


function Body(props) {
    return (
        <div>
            <div className='d-flex flex-column justify-content-center align-items-center style-content '>
                <div className= ' d-flex flex-column style-content pb-5 '>
                    <span>welcome,</span>
                    
                        <Typing className=' d-flex flex-column'>
                            <span>you want to see something insteresting?</span>
                            <span>let's get started</span>
                        </Typing>

                   
                    
                </div>
                <Link to='/started'>
                    <button className='btn btn-dark'>Get started</button>
                </Link>
            </div>
        </div>
    );
}

export default Body;