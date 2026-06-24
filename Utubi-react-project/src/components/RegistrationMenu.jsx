import { useState } from 'react';
import '../css/registrationmenu.css'

import Login from './Login';
import SignUp from './SignUp';
import GoBackButton from './GoBackButton'
import CloseButton from './CloseButton';

function RegistrationMenu({setLogin , showLogin , handleToggle , setSignUp , showSignUp}){

        const handleLogin = () => {
                handleToggle();
                setLogin(!showLogin);
        }

        const handleSignUp = () => {
                handleToggle();
                setSignUp(!showSignUp)
        }
        

        return(
                <>
                        <div>
                                <div className="container registration_container">
                                        <CloseButton handleToggle = {handleToggle}/>
                                        <div>
                                                <button onClick={handleLogin} className ="btn_login">Login</button>
                                                <button onClick={handleSignUp} className ="btn_signUp">Sign Up</button>
                                        </div>
                                </div>
                        </div>
                </>
                )
        }

export default RegistrationMenu;