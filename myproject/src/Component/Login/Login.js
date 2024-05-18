import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div><header className="header-login">
    </header>
        <form action="" className='form-login'>
            <div className="container1-login">
               
                <h1>Login</h1>
                <label for="email"><b>Email</b></label>
                <input id="eml-login" type="email" placeholder="Enter Email"/>
    
               <div className="con2-login"> <label for="psw"><b>Password</b></label>
                <input id="eml-login" type="password" placeholder="Enter Password"/></div>
    
               
    
                <div className="con2-login"> <label>
                  <input type="checkbox" id='remember'/>Remember Me
              </label></div>
              <hr/>
               
    
                
                <div className="con1-login">
                    
                    <button type="submit" className="signupbtn-login">Login</button>
                </div>
            </div>
    
           </form>
        
    
    </div>
  )
}

export default Login;