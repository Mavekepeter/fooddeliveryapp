import { useNavigate, useSearchParams } from 'react-router-dom'
import './verify.css'
import { useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchparams,setsearchparams] = useSearchParams();
    const success= searchparams.get("success")
    const orderId= searchparams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    const verifyPayment = async () =>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if (response.data.success) {
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[])
  return (
    <div className='verify'>
        <div className="spinner">

        </div>
        
    </div>
  )
}

export default Verify