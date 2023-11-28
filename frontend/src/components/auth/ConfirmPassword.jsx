import React, { useState } from "react";
import { Link } from "react-router-dom";
const ConfirmPassword = () => {
  const [signinData, setSigninData] = useState({
    confirmPassword: "",
    password: "",
  });

  const onChangeHaneller = (event) => {
   
    console.log(event.target.value);
    setSigninData((preData) => ({
      ...preData,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmitHaneller = (event) => {
    event.preventDefault();
    console.log(signinData);
  };
  return (
    <div className="fixed inset-0 bg-primary -z-10 max-w-screen-xl mx-auto flex items-center justify-center">
      <form
       onSubmit={onSubmitHaneller}
       className="bg-secondary rounded  p-5">
        <h1 className=" text-white text-center font-semibold">Enter the new Password</h1>
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



        <div className="flex flex-col-reverse mt-3">
          <input
            onChange={onChangeHaneller}
            name="confirmPassword"
            value={signinData.confirmPassword}
            id="confirmPassword"
            type="text"
            placeholder="confirmPassword"
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
            htmlFor="confirmPassword"
            className=" 
                     font-semibold text-dark-subtle
                    border-dark-subtle 
                     peer-focus:text-white
                     transition
                     self-start
                    
                       "
          >
           Confirm password
          </label>
        </div>

      
        <div className="mt-5">
          <button type="submit" className="rounded bg-white w-full p-1 h-8">
            Confirm Password
          </button>
        </div>
      
      </form>
    </div>
  );
};

export default ConfirmPassword;
