import React from 'react'
import icon  from '../icon.svg' 
import {signInWithPopup} from 'firebase/auth'
import { auth, google_provider } from '../firebase'
import { useNavigate } from 'react-router-dom'


function Login({isAuth,setIsAuth}) {
  const navigate=useNavigate();
  
  const sign_In_With_Google=()=>{
       signInWithPopup(auth,google_provider).then((result)=>{
       localStorage.setItem('isAuth',true); //permite guardar o valor localmente, fechar o browser e ler o valor local 
       setIsAuth(true);
       //console.log(result.user);
       navigate('/'); 
      })
  }

  return (
    <div className='flex flex-col justify-start items-center p-8'>
      <div className='card-style'>
         
       <h1 className='text-3xl my-6'>Sign with Google to Continue </h1>
        <button className='button-style' onClick={()=>sign_In_With_Google()}>
          <span className='text-2xl font-semibold'>Sign In </span>  
          <img src={icon} alt=''/> 
        </button>
      
      </div>
    </div>
  )
}

export default Login