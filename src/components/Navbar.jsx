import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth,signOut} from 'firebase/auth'

function Navbar({isAuth,setIsAuth}) {
  
  const navigate=useNavigate();

  const sign_Out=()=>{
    const auth=getAuth();
     
    signOut(auth).then(()=>{
      console.log('Saiu da Aplicação');
      localStorage.clear();
      setIsAuth(!isAuth);
      navigate('/login');
    })
  }
  
  return (
    <div className='flex items-center justify-center w-full h-[60px] bg-gray-500 shadow-md '>
        <div className='flex flex-row w-[300px] text-white text-xl font-semibold items-center justify-evenly'>
            <Link to='/'> Home</Link>
            {
             isAuth && <Link to='/createpost'> Create Post</Link>
            }
            
            { !isAuth ? 
              <Link to='/login'> Login</Link>
              :
              <button className='bg-white text-black p-2 rounded-lg text-sm' onClick={()=>sign_Out()}> Sign Out</button>
            }
            
            
        </div>
    </div>
  )
}

export default Navbar