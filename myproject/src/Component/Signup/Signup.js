import React from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
        <header className="header-signup">
</header>
    <form action="" className='fro-signup'>
        <div className="container1-signup">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>

            <label for="email"><b>Email</b></label>
            <input id="eml-signup" type="email" placeholder="Enter Email"/>

           <div className="con2"> <label for="psw"><b>Password</b></label>
            <input id="eml-signup" type="password" placeholder="Enter Password"/></div>

           <div className="con2-signup"><label for="repeat psw"><b>Repeat Password</b></label>
            <input id="eml-signup" type="password" placeholder="Repeat Password"/></div> 

            <div className="con2-signup"> 
              <input type="checkbox" className='checkb-signup' />Remember Me
          </div>
           
          <p>By creating an account you agree to our <a href="" className='dodger-signup'>Terms & Privacy</a></p>
            

            <div className="con1-signup">
                <button type="button" className="cancelbtn-signup">Cancel</button>
                <button type="submit" className="signupbtn-signup">Sign Up</button>
            </div>
        </div>

        <div className="container3-signup">
          <span>Already an account</span>
          <button className='white-signup' type="button"><NavLink to='/Login'>Login</NavLink></button>
        </div>
    </form>


    </div>
  )
}

export default Signup;