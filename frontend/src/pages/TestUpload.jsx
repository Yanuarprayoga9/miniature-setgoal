import { useState } from "react";
import axios from 'axios';

const TestUpload = () => {
    const [file, setFile] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('uploaded_file', file[0]); // Assuming you want to send only the first file
    
        axios.post('http://localhost:5500/stats', formData)
            .then(response => {
                // Handle the response
                console.log(response.data);
            })
            .catch(error => {
                // Handle errors
                console.error(error);
            });
    };

    return (
        <form action="/stats" encType="multipart/form-data" method="post" onSubmit={submitHandler}>
            <div className="form-group">
                <input type="file" className="form-control-file" name="uploaded_file" onChange={e => setFile(e.target.files)} multiple />
                <input type="submit" value="Get me the stats!" className="btn btn-default" />
            </div>
        </form>
    );
}

export default TestUpload;
