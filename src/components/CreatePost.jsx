import { async } from '@firebase/util';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db,auth } from '../firebase';

function CreatePost({isAuth}) {

  const [title,setTitle]=useState('');
  const [post,setPost]=useState('');

  const post_Collection_Ref= collection(db,'posts');
  const navigate= useNavigate();

  const createPost=async ()=>{
      await addDoc(post_Collection_Ref, {
        title:title, 
        postText: post, 
        author:{  
                 name: auth.currentUser.displayName, 
                 id:auth.currentUser.uid
               },
        time: Timestamp.now()         
      })
      navigate('/');
  }  

  //VERIFICA SE FEZ LOGIN CASO CONTRARIO FAZ REDIRECT PARA PAGINA DE LOGIN, PROTECTED ROUTE
  useEffect(()=>{
      if(!isAuth){
        navigate('/login');
      }
  },[])

  return (
    <div className='flex flex-col items-center justify-center py-32'>
        <div className='card-post'>

                <h2 className='py-4 text-white text-2xl font-bold mt-4'>Create a Post</h2>
                <div className='flex flex-col m-2 gap-1'>
                  <p className='text-white font-semibold text-[20px]'> Title:</p>
                  <input className='card-post-input' type='text' placeholder='Title...' onChange={(e)=>setTitle(e.target.value)}/>
                </div>

                <div className='flex flex-col m-2 gap-1'>
                  <p className='text-white text-[20px] font-semibold'> Post: </p>
                  <textarea className='card-post-text-area' placeholder='Post...' onChange={(e)=>setPost(e.target.value)}/>
                </div>

              <button className='card-post-button' onClick={()=>createPost()}> Submit Post </button>
        </div>
    </div>
  )
}

export default CreatePost