import { useState } from 'react';
import '../css/signup.css'

import GoBackButton from './GoBackButton'


function SignUp( {handleGoBack , profilePictures , username , setUsername, password , setPassword}){

    return(
        <>
            <div>
                <form className=" container signup_container">

                    <label className="username_label" htmlFor="username"><p>Username</p></label>
                    <input className="username_input" type="text" placeholder="Enter Username" id="username" value={username} onChange={e => setUsername(e.target.value)}></input>

                    <label className="password_label" htmlFor="password"><p>Password</p></label>
                    <input className="password_input" type="text" placeholder="Enter Username" id="password"></input>

                    <div className="signup_ft">
                    <button type="submit" className="btn_SignUpBtn">Sign Up</button>
                    <GoBackButton 
                                handleGoBack = {handleGoBack}/>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default SignUp;