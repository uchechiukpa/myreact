import React,{useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

function GetFiles(props) {
    const [userdetails, setUserdetails] = useState([])


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/stem/bio')
            .then(res => {
                console.log(res.data)
                setUserdetails(res.data)

            })
            .catch(err => {
                console.log(err, "failed");

            })
    }, []);
    return (
        <div>
            <ul>
                {
                userdetails.map(userdetail => <li key={userdetail.id} className='list-unstyled'>
                    <div>
                        <Link to={`/getfile/${userdetail.id}`}>
                            <h3>{userdetail.title}</h3>
                        </Link>
                        
                        <h6>{userdetail.article}</h6>
                    </div>
                </li>
                )
               }
            </ul>
           
        </div>
    )
}

export default GetFiles;