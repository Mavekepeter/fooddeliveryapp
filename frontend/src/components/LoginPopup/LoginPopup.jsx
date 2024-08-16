import {useContext, useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"


const LoginPopup = ({setshowLogin}) => {
  const {url,setToken } = useContext(StoreContext)

  const [currentState, setcurrentState] = useState('sign up')
   const [data,setData] = useState({
     name:"",
     email:"",
     password:""

   })
   const onchangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
   }
   const OnLogin = async (event)=>{
    event.preventDefault()
    let newUrl = url;
    if (currentState==="Login") {
      newUrl += "/api/user/login"  
    }
    else{
      newUrl +="/api/user/register"
    }
    const response = await axios.post(newUrl,data)
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setshowLogin(false)
    }
    else{
      alert(response.data.message)
    }

   }
  
  return (
    <div className='login-popup'>
      <form onSubmit={OnLogin} className="loginpopup-container">
        <div className="loginpopup-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="loginpopup-input">
          {currentState==="Login"?<></>:
          <input name='name' onChange={onchangeHandler} value={data.name} type="text" placeholder='your name' required/>
          }
          
          <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='enter email' required />
          <input name='password' onChange={onchangeHandler} value={data.password} type="pasword" placeholder='enter password' />
          
        </div>
        <button type='submit'>{currentState==="sign up"?"Create account":"Login"}</button>
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