import React from 'react';
import './Division.css'
import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom'
// import Typical from 'react-typical'

    
function Division(props) {
    return (
        <div>
            
            <div className="row w-100 h-100 m-0 d-flex">
                
                <a className="col-md-6 left-blog d-flex justify-content-center align-items-center" href = '/blog' style ={{textDecoration: 'none'}}>
                    
                        
                            <h1 className= 'left-blog-h1'>BLOG</h1>
                       
                   
                   

                    </a>
                    
                <a className="col-md-6 right-portfolio d-flex justify-content-center align-items-center" href='/portfolio' style={{ textDecoration: 'none' }} >
                  
                      
                            <h1 className='right-portfolio-h1'>PORTFOLIO</h1>
                    </a>
                   
         
            </div> 
        </div>
    );
}

export default Division;