import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser () {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value }));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        axios.post('http://localhost:81/api/user/save', inputs)
        .then(function(response) {
            console.log(response.data);
            navigate('/');
        })
       
    }

    return (
        <div>
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
            <table cellSpacing="10">
                    <tbody>
                        
                        <tr>
                            <th>  
                                <label>Name :</label>
                            </th>
                            <td>
                            <input type="texte" name="name" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                 <label>Email :</label>
                            </th>
                            <td>
                            <input type="texte" name="email" onChange={handleChange}/>
                            </td>
                        </tr>

                        <tr>
                            <th>
                            <label>Mobile :</label>
                            </th>
                            <td>
                            <input type="texte" name="mobile" onChange={handleChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2" align="right">
                            <button>Save</button>
                            </td>
                        </tr>
                  
                    </tbody>
            </table>

        </form>
    </div>
       
    )
}