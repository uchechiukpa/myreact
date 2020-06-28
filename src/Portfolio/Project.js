import React, { useState, Fragment } from 'react';
import './project.css';
import axios from 'axios';

function Project(props) {
    const [article, setarticle] = useState({
        title: '',
        text: '',
        cloudinary_id: '',
        image_url: ''
    }) 
    const [Image, setImage] = useState('https://pecb.com/conferences/wp-content/uploads/2017/10/no-profile-picture.jpg');
 
        const uploadImage = async e => {
        const reader = new FileReader();
        reader.onload = async () => {
            if (reader.readyState === 2) {
                await setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])


        const files = e.target.files[0]
        const data = new FormData()
        data.append('file', files)
        data.append('upload_preset', 'uchechi')


        axios.post('https://api.cloudinary.com/v1_1/deasaxdzz/image/upload', data

        )
            .then(res => {
                setarticle({ ...article, cloudinary_id: res.data.asset_id, image_url: res.data.secure_url })
            })
            .catch(err => console.log(err));

    } 
    const uploadArticle = async (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/stem/portfolio', article)
            .then(async function (res) {
                // await setUserInfo(res.data.name_id + userInfo)
                  console.log(res.data)
                  setarticle({
                    title: '',
                    text: '',
                    cloudinary_id: '',
                    image_url: ''
                }) 

            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div>
            <nav className="navbar navbar-inverse mb-0 " style={{ backgroundColor: 'black' }}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">MyPortfolio</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user" style={{ color: 'rgb(255, 255, 0)' }}></span>Home</a></li>
                        <li><a href="/project"><span className="glyphicon glyphicon-log-in"></span>Projects</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span>Contant</a></li>
                    </ul>
                </div>
            </nav>
            <div className="project-container m-0 d-flex w-100 ">
                {/* <div className="card mb-3 d-flex" style= {{maxWidth: '600px'}}>
                    <div className="row no-gutters  d-flex justify-content-center">
                        <div className="col-md-6 img-container"> 
                            <img className='' style={{ width: "100%", height: "250" }} src={Image}/>
                            <div className='centered'>
                            <label htmlFor='input' clasName='image-upload'>
                                <i className='material-icons' style={{ color: 'black' }}>add_photo_alternate</i>
                            </label>
                                <input type='file' className='mt-2' id='input' name='image-upload' accept="image/*" style={{ display: 'none' }} onChange={uploadImage}/>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <input type='text' className="card-title" onChange={e => setarticle({ ...article, title: e.target.value })}/>
                                <input type='text' className="card-text pt-5" onChange={e => setarticle({ ...article, text: e.target.value })} />
                                <button className='btn btn-primary' onClick={uploadArticle}>Post</button>
                                <p className="card-text pt-5"><small className="text-muted ">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div> */}

                
                <div className='d-flex column'>
                    <div className="mb-5 mt-5 ml-5 d-flex justify-content-center align-items-center" style={{maxWidth: '600px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-6">
                                <img className='' style={{ width: "100%", height: "250px", maxHeight: '250px', ObjectFit: 'cover' }} src={require('./Screenshot (52).png')} />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">Game review</h5>
                                    <p className="card-text">A game review online website built with react,  Fully Responsive Advertisement card built with Tailwind CSS framework, HTML. Deployed using Netlify. Continuous integrations, testing and delivery configured with Circle CI</p>
                                    <p className="card-text pt-5"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                    <div className="mb-5 mt-3 d-flex justify-content-end" style={{ maxWidth: '600px' }}>
                        <div className="row no-gutters d-flex justify-content-end">
                            <div className="col-md-6">
                                <img className='' style={{ width: "100%", height: "250px", maxHeight: '250px', ObjectFit: 'cover' }} src={require('./Screenshot (54).png')} />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">User crud application</h5>
                                    <p className="card-text">A user crud application buily with react, Fully Responsive Advertisement card built with Tailwind CSS framework, HTML. Deployed using Netlify. Continuous integrations, testing and delivery configured with Circle CI</p>
                                    <p className="card-text pt-5"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
               


            {/* </div> */}
        </div>
    );
}

export default Project;