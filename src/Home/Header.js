import React from 'react';
import { Spring } from 'react-spring/renderprops';
import './Header.css'

function Header(props) {
    return (
        // <Spring>
        //     { props => {
                // <div>
                //     <div className='d-flex flex-row justify-content-between'>
                //         <div className='m-3'>
                //             <h1 className='portfolio mr-3'>Portfolio</h1>
                //         </div>
                //         <div className='m-3 '>
                //             <span className='right-row p-2 active'>Home</span>
                //             <span className='right-row p-2'>Portfolio</span>
                //             <span className='right-row p-2'>Blog</span>
                //             <button className='right-row  right-button p-2' style={{ backgroundColor: "transparent" }}>Get Started</button>

                //         </div>
                //     </div>
                // </div>
            // }
                
        //     }
        // </Spring>
        <div>
            <nav className="navbar navbar-light">
                <h1 className="navbar-brand portfolio" style={{ color: 'rgb(28, 121, 138)', fontSize: '2rem' }} >Portfolio</h1>
                <form className="form-inline">
                    <button className="btn btn-outline-dark my-2 my-sm-0 rounded-pill" type="submit">Subscribe</button>
  </form>
</nav>
        </div>
        
    );
}

export default Header;