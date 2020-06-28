import React, { useState } from 'react';
import axios from 'axios'

function Createfile(props) {
    const [files, setFiles] = useState({title:'', article: ''})


    const handleChange = e => {
         setFiles ({...files, [e.target.name]: e.target.value})
    }
    const uploadfiles = async (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/stem/bio/', files)
            .then(async function (res) {
                console.log(res.data)
                // history.push(`/OneUserProfile/${res.data.name_id}`)

            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        // <div className = 'd-flex d-flex-row justify-content-center align-content-center'>
          
           
        // </div>
        <form>
        <div className='d-flex justify-content-center'>
            <div className="d-flex flex-column ">
              
                    <input type='text' onChange={e => setFiles({ ...files, title: e.target.value })} />
                    <textarea type='text' onChange={e => setFiles({ ...files, article: e.target.value })}></textarea>
                <button onClick ={uploadfiles} >submit</button>
{/* 
                <h1>{files.title}</h1>
                    <h1>{files.article}</h1>
                 */}
            </div>
            </div>
        </form>
       
    );
}

export default Createfile;