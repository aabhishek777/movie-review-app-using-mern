import React, { useState } from "react";

import { Link } from "react-router-dom";

import OtpInput from 'react-otp-input';

const EmailVerification= ()=>{
 const [otp, setOtp] = useState('');
console.log(otp);

  return (
    <div className="fixed inset-0 bg-primary -z-10 max-w-screen-xl mx-auto flex items-center justify-center">
      <form
       
       className="bg-secondary rounded  p-5">
        <h1 className=" text-white text-center font-semibold">Please enter OTP to verify your account</h1>
      <p className="text-dark-subtle  pt-3 text-center">OTP has been sent to your mail</p>
     

  
     <OtpInput
     value={otp}
     onChange={setOtp}
     numInputs={6}
     containerStyle="flex  justify-center items-center  mt-10"
     inputStyle='mr-2 bg-transparent text-center font-semibold text-white  focus:border-white rounded border-2 '
   
     
     renderInput={(props) => <input  {...props} />}
     />


       
        <div className="pt-9">
          <button type="submit" className="rounded bg-white w-full p-1 h-8">
           Verify OTP
          </button>
        </div>
        <div className="flex justify-between pt-5">
          <div className=" py text-dark-subtle hover:text-white transition"><Link to='/auth/signin'>Signin</Link></div>
          <div className=" text-dark-subtle  hover:text-white transition"><Link to='/auth/signup'>Signup</Link></div>
       
        </div>
      </form>
    </div>
  );
};

export default EmailVerification;
