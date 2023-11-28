import React, { useState } from "react";

import { Link } from "react-router-dom";
const Singin = () => {
  const [email, setEmail] = useState({
    email: "",
  });

  const onChangeHaneller = (event) => {
   
    console.log(event.target.value);
    setEmail((preData) => ({
      ...preData,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmitHaneller = (event) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <div className="fixed inset-0 bg-primary -z-10 max-w-screen-xl mx-auto flex items-center justify-center">
      <form
       onSubmit={onSubmitHaneller}
       className="bg-secondary rounded  p-5">
        <h1 className=" text-white text-center font-semibold">Forgot Password</h1>
        <div className="flex flex-col-reverse">
          <input
            onChange={onChangeHaneller}
            name="email"
            value={email.email}
            id="email"
            type="text"
            placeholder="email@email.com"
            className=" bg-transparent p-1
                     rounded border-2
                     focus:text-white
                      border-dark-subtle 
                      focus:border-white
                       w-full text-lg
                        outline-none
                         peer
                         transition
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

       
        <div className="pt-7">
          <button type="submit" className="rounded bg-white w-full p-1 h-8">
            Send Link
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

export default Singin;
