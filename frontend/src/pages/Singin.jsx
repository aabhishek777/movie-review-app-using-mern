import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/baseApi";
import { useDispatch } from "react-redux";
import Toastify from 'toastify-js'
const Singin = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg]= useState('')
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const onChangeHaneller = (event) => {
   
    setSigninData((preData) => ({
      ...preData,
      [event.target.name]: event.target.value,
    }));
  };


  const dispatch= useDispatch();
  const onSubmitHaneller = async (event) => {
    event.preventDefault();
    try {
      const result  = await api.post("/user/login", signinData);
     
      if (result) {
        dispatch({type:'user',payload:result?.data?.data});
        localStorage.setItem('auth-token',result?.data?.token)
        console.log((result?.data?.token));
        navigate("/");
      }
      else{
        setErrorMsg(result?.data?.msg);
        console.log(result?.data?.msg);
        console.log(errorMsg);
      }
    } catch (error) {
      console.log(error);
      Toastify({
        text: error?.response?.data?.msg,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "center", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        // onClick: function(){} // Callback after click
      }).showToast();

   
    }
  };
  return (
    <div className="fixed inset-0 bg-primary -z-10 max-w-screen-xl mx-auto flex items-center justify-center">
      <form onSubmit={onSubmitHaneller} className="bg-secondary rounded  p-5">
        <h1 className=" text-white text-center font-semibold">Signin</h1>
        <div className="flex flex-col-reverse">
          <input
            onChange={onChangeHaneller}
            name="email"
            value={signinData.email}
            id="email"
            type="text"
            placeholder="email@email.com"
            className=" bg-transparent p-1
                     rounded border-2
                      border-dark-subtle 
                      focus:border-white
                       w-full text-lg
                        outline-none
                         peer
                         transition
                         focus:text-white
                        "
          />
          <label
            htmlFor="email"
            className=" 
                     font-semibold text-dark-subtle
                    border-dark-subtle 
                     peer-focus:text-white
                     transition
                     self-start
                    
                       "
          >
            Email
          </label>
        </div>

        <div className="flex flex-col-reverse pt-3">
          <input
            onChange={onChangeHaneller}
            name="password"
            value={signinData.password}
            id="password"
            type="text"
            placeholder="password"
            className=" bg-transparent 
                     rounded border-2
                      border-dark-subtle 
                      focus:border-white
                       w-full text-lg
                        outline-none
                         peer
                         transition
                         focus:text-white
                             p-1                        
                        "
          />
          <label
            htmlFor="password"
            className=" 
                     font-semibold text-dark-subtle
                    border-dark-subtle 
                     peer-focus:text-white
                     transition
                     self-start
                       "
          >
            Password
          </label>
        </div>
        <div className="pt-3">
          <button type="submit" className="rounded bg-white w-full p-1 h-8">
            Submit
          </button>
        </div>
        <div className="flex justify-between pt-3">
          <div className=" py text-dark-subtle hover:text-white transition">
            <Link to="/auth/forgot-password">Forget Password</Link>
          </div>
          <div className=" text-dark-subtle  hover:text-white transition">
            <Link to="/auth/signup">Signup</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Singin;
