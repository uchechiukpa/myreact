import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Blog.css'

function Blog(props) {

    const [userbios, setUserbio] = useState([])


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/stem/bio')
            .then(res => {
                console.log(res.data)
                setUserbio(res.data)

            })
            .catch(err => {
                console.log(err, "failed");

            })
    }, []);
    return (
        <div>
            <ul className="nav nav-pills nav-fill align-items-center bg-dark">
                <li className="nav-item">
                    <h1 className="nav-link blog-header-h1">MyBlog</h1>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Articles</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/search/search.js"> Create</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">How-To</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contant</a>
                </li>
            </ul>
            <ul className="nav nav-pills nav-fill align-items-center m-0 border-bottom">
                <li className="nav-item">
                    <span className="nav-link blog-h1">FIND ARTICLES</span>
                </li>
                <li className="nav-item">
                    <button className="btn btn-online-dark">Subscribe</button>
                </li>
                
            </ul>


            
            <div className="row d-flex">

                <div className="col-md-2">
                 


                </div>

                <div className="col-md-8">
                   
                    <div className='d-flex flex-column justify-content-start text-left mt-5 ml-5 mb-2 '>
                        <span className='topic-h1 text-left'>HERE ARE SOME RELATED ARTICLES YOU MAY</span>
                            <div className = 'd-flex justify-content-between'>
                                <span className='topic-h1'>FIND INSTERESTING</span>
                                <span className= 'create-h1 d-flex align-items-end'>Want to Contribute Content to myblog.com? <a href = '#'>Click here</a> </span>
                            </div>
                           
                    </div>


                    <ul>
                        {
                            userbios.map(userbio => <li key={userbio.id} className='list-unstyled'>
                                <div>
                                    {/* <Link to={`/getfile/${userdetail.id}`}>
                                        </h3>
                                    </Link> */}

                                    <h6></h6>

                                    <div class="card mb-3 ml-5">
                                        <div class="row no-gutters ">
                                            <div class="col-md-4" style={{
                                                maxHeight: '171px',
                                                boxSizing: 'border-box'
                                            }}>
                                                <img src={require('./yes.jpg')} class="card-img img-responsive fit-image" alt="... " style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                <h5 class="card-title">{userbio.title}</h5>
                                                    <p class="card-text">{userbio.article}</p>
                                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </li>
                            )
                        }
                    </ul>
   
                   </div>


                <div className='col-md-2'>
                                        
                </div>
            </div> 
        </div>
    );
}

export default Blog;