import { async } from '@firebase/util';
import { collection, deleteDoc, doc, getDocs, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'

import icon  from '../icon_1.svg' 
function Home({isAuth}) {
  
  const [posts,setPosts]=useState([])
  
  const posts_collection_ref=collection(db,'posts'); // collection os posts 

  useEffect(()=>{
    const getUsers=async()=>{
          const data=await getDocs(posts_collection_ref);
          setPosts(
             data.docs.map(doc=>({id: doc.id,...doc.data()}))
          )
    }

    getUsers();
  },[])

  console.log(posts);


  const deletePost=async(id) =>{
    console.log(id);
    await deleteDoc( doc(db,'posts',id) ); //delete doc(db,collection_Name,document_ID)
  }

  return (
    <div className='flex flex-col items-center justify-center mt-16' >
          {
             posts.map( post=>(
            
              <div className='w-[555px] h-[320px] bg-slate-100 shadow-2xl p-10 rounded-xl my-6' key={post.id}>
                  
                  <div className='flex justify-between'>
                   <h1 className='text-xl font-bold italic'> {post.title} </h1>   
                    
                    { isAuth && post.author.id===auth.currentUser.uid &&(
                        <button onClick={()=>deletePost(post.id)}>
                          <img src={icon} alt=''/>   
                        </button>
                    )
                    }   
                  </div> 
                 
                   
                  <div className='my-4 overflow-y-auto h-44' >
                     {post.postText}
                  </div>
                  <h3 className=''>@{post.author.name}</h3>
              </div>
             ))
          }
    </div>
  )
}

export default Home




/*
AS MUDANÇAS QUE ACONTENCEM NA BD É REFLECTIDO LOGO NA APP, NAO HA NECESSIDADE DE FAZER RELOAD DA PAGINA

         onSnapshot( posts_collection_ref, snapshot =>{
            snapshot.forEach( doc=>{
              console.log({id:doc.id,...doc.data()})
            })
         })
*/

         
         
  /*
   PREENCHE OS DADOS DA BD NO HOOK POSTS, QUALQUER ALTERAÇÃO É ACTUALIZADA NO HOOK E REFLECTIDA NA APP       
  onSnapshot(posts_collection_ref, snapshot=>{        
    setPosts(
      snapshot.docs.map( doc=>
        ({id: doc.id,...doc.data()})
                )
            )
         })
         
  */

  /**
   * VERIFICA SE ESTA AUTENTICADO, SE O AUTOR DO POST É O MESMO QUE FEZ AUTH ID 
   * isAuth && post.author.id===auth.currentUser.uid 
   * 
   */