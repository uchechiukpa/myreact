import React from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Deletefile({match}) {
    let history = useHistory();
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.delete(`http://127.0.0.1:8000/stem/bio/${match.params.id}/`)
            .then(res => {
            })
            .catch(err => {
                console.log(err, "failed");
            })
        // history.push('https://google.com')
    }
    return (
        <div>
            <h1>User Deleted now get out</h1>
            <button>->GO</button>
        </div>
    );
}

export default Deletefile;