import React, { useState } from 'react'
import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';


export default function Register() {

    const [joiErrors, setJoiErrors] = useState({});
    const navigate = useNavigate();
    const [dataUser, setDataUser] = useState({
        email: "",
        password: "",
    });

    function getDataUsr(e) {
        const input_Value = e.target.value;
        const propertyName = e.target.id;
        setDataUser({ ...dataUser, [propertyName]: input_Value });
        setJoiErrors('')
    };

    async function apiRegister() {
        const response = await axios.post('https://reqres.in/api/register', dataUser);
    
        if (response?.data?.id) {
            alert("User has been registered successfully!");
            navigate('/login');
        } else {
            alert("Registration failed: " + (response?.data?.error || "Invalid data"));
        }
    }

function onSubmit(e){
    e.preventDefault();
    const allowedEmails = ['peter@reqres.in', 'john@reqres.in', 'eve.holt@reqres.in'];
    const schema = Joi.object({
        email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().valid(...allowedEmails),
        password : Joi.string().min(4).max(10).required(),
    });
    const joiResponse = schema.validate(dataUser, { abortEarly: false });

    if(joiResponse.error == undefined){
        apiRegister()
    }else{
        const errorsList = joiResponse.error.details
        setJoiErrors(errorsList)
        
    }
}

function getErrors(key){
    for (let i = 0; i < joiErrors.length; i++) {
        if(joiErrors[i].context.key == key)
        return joiErrors[i].message;
    }
    return ''
}

return (
    <>
        <section className='container w-50'>
            <form  onSubmit={onSubmit} className='m-auto my-5 py-5'>
                <h2>Register Form</h2>

                <label htmlFor="email" className="pb-2">Email</label>
                <input onChange={getDataUsr} type="email" className='form-control' id="email" value={dataUser.email}/>
                <p style={{ color: "red", marginTop: "5px" }}>{getErrors('email')}</p>
                <label htmlFor="password" className="pb-2 mt-4">Password</label>
                <input onChange={getDataUsr} type="password" className='form-control' id="password" value={dataUser.password}/>
                <p style={{ color: "red", marginTop: "5px" }}>{getErrors('password')}</p>
                <button className='btn btn-success mt-3  me-2'>Register</button>
            </form>
        </section>
    </>
)
}
