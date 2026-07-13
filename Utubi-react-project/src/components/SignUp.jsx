import { useState } from 'react';
import '../css/signup.css'

import CloseRgtMenus from './CloseRgtMenus'
import GoBackButton from './GoBackButton'
import VisibilityButton from './VisibilityButton'

function SignUp({handleGoBack , 
                profilePictures , 
                username , 
                setUsername, 
                password , 
                setPassword ,
                signupBehaviour,
                closeRgtMenus,
                showPassword, 
                setShowPassword, 
                visibilityOn, 
                visibilityOff}){

    return(
        <>
            <div>
                <form className=" container signup_container">

                    <div className="signup_container__usernameDiv">
                        <label className="username_label" htmlFor="username"><p>Username</p></label>
                        <CloseRgtMenus 
                            closeRgtMenus = {closeRgtMenus}/>
                    </div>
                    <input className="username_input" type="text" placeholder="Enter Username" id="username" value={username} onChange={e => setUsername(e.target.value)}></input>

                    <label className="password_label" htmlFor="password"><p>Password</p></label>
                    <div className="div_password_input">
                        <input className="password_input"  type={showPassword ? "text" : "password"} placeholder="Enter Username" id="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        <VisibilityButton
                                        showPassword={showPassword}
                                        setShowPassword={setShowPassword}
                                        visibilityOn={visibilityOn}
                                        visibilityOff={visibilityOff}
                            />
                    </div>
                    <div className="signup_ft">
                    <button type="button" className="btn_SignUpBtn" onClick={() => signupBehaviour(username , password)}>Sign Up</button>
                    <GoBackButton 
                                handleGoBack = {handleGoBack}/>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default SignUp;