import React, { useRef, useState } from "react";
import { validateData } from "../utlis/validate";
import { useDispatch } from "react-redux";
import { toggleState } from "../redux/userSlice";



const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);
   const dispatch = useDispatch();
   

  function handleClick() {
    
      const message = validateData(email.current.value, password.current.value, name.current.value, cpassword.current.value);
      
      setErrorMessage(message);
    
    
    if (!message){
      localStorage.setItem("name",name.current.value);
      localStorage.setItem("password",password.current.value);
      localStorage.setItem("email",email.current.value);
      alert("you have register succefully");
       dispatch(toggleState())
    } 
  }
  
  const handleClick2=()=>{
     console.log("click me")
   const get_email=localStorage.getItem("email");
   const get_password=localStorage.getItem("password");
   if(email.current.value===get_email && password.current.value===get_password)
   {
      alert("You have login succefully");
      dispatch(toggleState())
   }
   else{
    alert("You have entered wrong input");
   }
  }

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="flex justify-center mt-9 mt-10">
    <div className=" text-white w-[30%] bg-black opacity-90 h-[90%] py-2 rounded-md flex justify-center">
      <form
        className=" flex items-center w-[100%] h-[100%] flex-col my-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="self-start ml-6 font-bold text-2xl mb-8 ">
          {toggle ? "Sign Up" : "Sign In"}
        </h1>
        {toggle ? (
          <input
            ref={name}
            className="bg-gray-700 rounded-sm py-3 px-5  w-[95%]"
            type="text"
            placeholder="Name"
          ></input>
        ) : (
          ""
        )}

        <input
          ref={email}
          className="bg-gray-700 rounded-sm py-3 mt-4 px-5  w-[95%]"
          type="email"
          placeholder=" Email"
        ></input>

        <input
          ref={password}
          className=" bg-gray-700 rounded-sm  mt-4 py-3 px-5 w-[95%]"
          type="password"
          placeholder=" password"
        ></input>
        {toggle ? (
          <input
            ref={cpassword}
            className=" bg-gray-700 rounded-sm  mt-4 py-3 px-5 w-[95%]"
            type="password"
            placeholder="Confirm password"
          ></input>
        ) : (
          ""
        )}

        <p className="self-start ml-3 mt-1">{errorMessage}</p>
        <button
          className="rounded-sm mt-3 py-2 px-6 w-[95%] bg-red-600 "
          type="button"
          onClick={toggle?handleClick:handleClick2}
        >
          {toggle ? "Sign Up" : "Sign In"}
        </button>
        <p className="mt-4 w-[95%] cursor-pointer">
          {toggle ? " Already Account?" : "New User"}
          <span className="text-blue-500" onClick={handleToggle}>
            {toggle ? " Sign In" : " Sign up now."}
          </span>
        </p>
        <p className="mt-4  w-[95%]">
          {`This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`}
        </p>
      </form>
      </div>
    </div>
  );
};

export default Login;
