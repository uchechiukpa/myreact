import React from 'react';
import './Portfolio.css';
import Typing from 'react-typing-animation';

function Portfolio(props) {
    return (
        <div className='Portfolio-header'>
            
            <nav class="navbar navbar-inverse">
             <div class="container-fluid">
             <div class="navbar-header">
              <a class="navbar-brand" href="#">MyPortfolio</a>
        </div>
        {/* <ul class="nav navbar-nav">
             <li class="active"><a href="#">Home</a></li>
             <li><a href="#">Page 1</a></li>
             <li><a href="#">Page 2</a></li>
        </ul> */}
        <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user" style={{ color: 'rgb(255, 255, 0)'}}></span>Home</a></li>
             <li><a href="/project"><span class="glyphicon glyphicon-log-in"></span>Projects</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Contant</a></li>
            </ul>
        </div>
            </nav>
            {/* <--- Body ---> */}
            
            
            <div className ='portfolio-body'>
                <Typing>
                    <div>
                    <div className = 'portfolio-div-text d-flex flex-column justify-content-start text-left pt-5 pb-3 pl-5'>
                        <span>Better WebDevelopment,</span>
                    <Typing.Delay ms={1000} />
                        <span>Better Experiences.</span>
                        </div>
                         <Typing.Delay ms={2000} />
                        <div className= 'portfolio-div-text-2 d-flex flex-column justify-content-start text-left pt-3 pl-5 pb-2 '>
                            <span>My Name is Ukpa Uchechi,</span>
                            <span>I am a Full Stack Developer,</span>
                            <span>As a developer i uncover</span>
                            <span>problems i solve them</span>
                            <span>I enjoy building projects</span>
                            <span>I am passionate of learning</span>
                            <span>New Technologies.</span>
                        </div>
                        
                    </div>
                </Typing>

                
            </div>
        </div>
    );
}

export default Portfolio;