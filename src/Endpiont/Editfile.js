import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useHistory } from "react-router-dom";

function Editfile({ match }) {
    let history = useHistory();
    
    const [file, setFile] = useState({ title: '', article: '' })
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/stem/bio/${match.params.id}/`)
            .then(res => {
                setFile(res.data)
                // console.log(res.data)
            })
            .catch(err => {
                console.log(err, "failed");

            })
    }, []);
    const handleEdit = async (e) => {
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8000/stem/bio/${match.params.id}/`, file)
            .then(res => {
                console.log(res.data)
                history.push(`/getfile/${res.data.id}`)
            })
            .catch(err => {
                console.log(err, "failed");
            })
    }

    return (
        <div>
            <input type='text' value={file.title} onChange={e => setFile({ ...file, title: e.target.value })} />
            <textarea type='text'value={file.article} onChange={e => setFile({ ...file, article: e.target.value })}></textarea>
            <button onClick={handleEdit} >submit</button>
        </div>
    );
}

export default Editfile;