import React, { useState } from 'react';
import axios from 'axios'
import './search.css'

function Search(props) {

    const [details, setdetails] = useState({
        name: '',
        text: '',
        cloudinary_id: '',
        image_url: ''
    }) 

    // useful for images

    
    // const uploadImage = async e => {
    //     const reader = new FileReader();
    //     reader.onload = async () => {
    //         if (reader.readyState === 2) {
    //             await setImage(reader.result)
    //         }
    //     }
    //     reader.readAsDataURL(e.target.files[0])


    //     const files = e.target.files[0]
    //     const data = new FormData()
    //     data.append('file', files)
    //     data.append('upload_preset', 'uchechi')


    //     axios.post('https://api.cloudinary.com/v1_1/deasaxdzz/image/upload', data

    //     )
    //         .then(res => {
    //             setdetails({ ...details, cloudinary_id: res.data.asset_id, image_url: res.data.secure_url })
    //         })
    //         .catch(err => console.log(err));

    // } 


    const uploadProfile = async (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/stem/bio/', details)
            .then(async function (res) {
                // await setdetails(res.data.name_id + userInfo)
                // history.push(`/OneUserProfile/${res.data.name_id}`)

            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div className ='outline'>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setdetails({ ...details, name: e.target.value })}  />
                        {/* <small id="emailHelp" className="form-text text-muted">input a title</small> */}
  </div>
                    {/* <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div> */}
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setdetails({ ...details, text: e.target.value })} ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" onClick={uploadProfile}>Submit</button>
</form>
        </div>
    );
}

export default Search;