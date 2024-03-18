import { useState } from "react";

export default function ListUser () {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value }));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        console.log(inputs);
    }

    return (
        <div>
        <h1>List User</h1>
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