import { useState } from 'react';
import '../css/login.css'

import GoBackButton from './GoBackButton'



function Login({loginState , setAdminLogin , handleGoBack , username , setUsername, password , setPassword , profiles , adminProfile , getDatabase , loginBehaviour}){
    
    return(
        <>
            <div>
            
                <form className="container login_container">

                    <label className="username_label" htmlFor="username"><p>Username</p></label>
                    <input className="username_input" type="text" placeholder="Enter Username" id="username" value={username} onChange={e => setUsername(e.target.value)} ></input>

                    <label className="password_label" htmlFor="password"><p>Password</p></label>
                    <input className="password_input" type="text" placeholder="Enter Username" id="password" value={password} onChange={e => setPassword(e.target.value)} ></input>
                    
                    <div className="login_ft">
                            <button onClick={(e) => loginBehaviour(username , password)} type="button" className="btn_LoginBtn">Login</button> 
                            <GoBackButton 
                                handleGoBack = {handleGoBack}/>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default Login;