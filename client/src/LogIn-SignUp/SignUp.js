import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './css/SignUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


function SignUp({openLogIn, closeSignUp, onSubmit}) {
    const [formSignUp, setFormSignUp] = useState({
        username: '',
        useremail: '',
        userpassword: '',
        confirm_password:''
    });
    const handleInput = (event) => {
        const{name, value} = event.target;
        setFormSignUp({ ...formSignUp, [name]: value });
    }

    const handleSignUp = () => {
        onSubmit(formSignUp);
    }

    // const requestSignUp = () => {
    //     axios.post('http://localhost:3001/signup', formSignUp)
    //         .then(response => {
    //             const message = response.data;
    //             if(message === 'Data inserted successfully') {
    //                 alert("Đăng ký thành công! Vui lòng đăng nhập.");
    //                 closeSignUp();
    //                 window.location.href = 'http://localhost:3000';
    //             }
    //         })
    // }

    
    return (
        <div className="signup">
            <div className='form_signup'>
                <div className="close_sign_form" style={{alignItems: "flex-end"}}>
                    <FontAwesomeIcon onClick = {closeSignUp} icon={faClose} style={{ color: 'rgb(70, 90, 110)', fontSize: '20px' }} />
                </div>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='username'>Full name</label>
                        <input onChange={handleInput} placeholder='Username' name="username" className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input onChange={handleInput} placeholder='Email' name="useremail" className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='pass'>Password</label>
                        <input onChange={handleInput} placeholder='Password' name="userpassword" className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='confirm_password'> Confirm Password</label>
                        <input onChange={handleInput} placeholder='Confirm password' name="confirm_password" className='form-control rounded-0' />
                    </div>
                    <button onClick={handleSignUp} className='btn btn-success w-100'><strong>Sign up</strong></button>
                    <p></p>
                    <Link onClick={openLogIn} className='btn btn-default border w-100 text-decoration-none'>Sign in</Link>
                </form>
            </div>            
        </div>
        
    );
}

export default SignUp;