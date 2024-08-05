import {useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setshowLogin}) => {
  const [currentState, setcurrentState] = useState('sign up')
  return (
    <div className='login-popup'>
      <form className="loginpopup-container">
        <div className="loginpopup-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="loginpopup-input">
          {currentState==="Login"?<></>:
          <input type="text" placeholder='your name' required/>
          }
          
          <input type="email" placeholder='enter email' required />
          <input type="pasword" placeholder='enter password' />
          
        </div>
        <button>{currentState==="sign up"?"Create account":"Login"}</button>
        <div className="loginpopup-condition">
          <input type="checkbox" required />
          <p>By continuing I agree to the terms of use & privacy policy</p>
        </div>
        {currentState==="Login"
        ? <p>Create a new account? <span onClick={()=>setcurrentState("Sign Up")}>Click here</span></p>
        : <p>Already have an account?<span onClick={()=>setcurrentState("Login")}>Login here</span></p>}
      </form>

    </div>
  )
}

export default LoginPopup