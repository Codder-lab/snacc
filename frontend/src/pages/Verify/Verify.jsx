import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        try {
            const response = await axios.post(url + "/api/order/verify", { success, orderId });
            if (response.data.success) {
                toast.success("Payment successful!!!");
                setTimeout(() => navigate("/userorders"), 1500); // 👈 gives time for toast
            } else {
                toast.error("Payment error!!");
                setTimeout(() => navigate("/"), 1500);
            }
        } catch (error) {
            toast.error("Something went wrong!");
            setTimeout(() => navigate("/"), 1500);
        }
    }

    useEffect(() => {
        verifyPayment();
    }, [])

    console.log(success, orderId);

  return (
    <div className='verify'>
        <ToastContainer position='top-right' autoClose={3000} />
        <div className="spinner"></div>
    </div>
  )
}

export default Verify