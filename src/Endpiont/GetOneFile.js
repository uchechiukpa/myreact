import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function GetOneFile({match}){
    const [file, setfile] = useState({})
    console.log(match)

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/stem/bio/${match.params.id}/`)
            .then(res => {
                console.log(res.data)

                setfile(res.data)

            })
            .catch(err => {
                console.log(err, "failed");

            })
    }, []);
    return (
        <div>
            <h1>{file.title}</h1>
            <hi>{file.article}</hi>
            <Link to={`/editfile/${file.id}`}>
                <button>Edit</button>
            </Link>
            
            <Link to={`/deletefile/${file.id}`}>
                <button>Delete</button>
            </Link>
          
        </div>
    );
}

export default GetOneFile;