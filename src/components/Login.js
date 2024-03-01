import React, { useRef, useState } from 'react'
import Header from './Header'
import { validationCheck } from '../utils/validation';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignIn,setIsSignIn] = useState("true"); 
  const[data,setData] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const ans=validationCheck(email.current.value,password.current.value);
    setData(ans);
    if(ans) return;  // is ans ! null then return there is error
    if(!isSignIn){   // for signup form
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: "Ravi Kiran", photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        setIsSignIn(true);
        //navigate("/browse")
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setData(errorMessage);
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setData(errorMessage);
        });
      }
  }

  const toggleThis = () =>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div >
      <Header />
      <div>
        <img className='w-full object-cover absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg' alt='logo'></img>
      </div>   
      <form onSubmit={(e)=> e.preventDefault()}  className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn?"Sign In" : "Sign Up"}</h1>
        {data && (
          <p className='text-red-500 font-bold text-lg py-2'>{data}</p>
        )}
        {!isSignIn && (
          <input type='text' placeholder='User Name' className='p-4 my-4 w-full bg-gray-700'></input>
        )}
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}> {isSignIn?"Sign In" : "Sign Up"}</button>
        {isSignIn && (
          <h1 className='cursor-pointer'> Forgot Password</h1>
        )}
        <p className='py-4 cursor-pointer' onClick={toggleThis}>{isSignIn? "New to Netflix? Sign Up Now" : "Sign In" }</p>
      </form>
    </div>
  )
}

export default Login