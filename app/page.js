"use client"
import React, { useState } from 'react'



const page = () => {

  const [task,settask] = useState("")

  const [list,setlist] = useState([])
  

  let rendertask = <h5>No Task Available</h5>

  const deletelist = (i)=>{
           let c = [...list]

           c.splice(i,1);
           setlist(c)
  }

  const editlist = (i)=>{
    
    let c = [...list]
    console.log(c)
    let p = prompt('Write the task!')
    c.splice(i,1,p);
    console.log(c)
    setlist(c)
}
  
  
  if(list.length>0){
    rendertask = list.map((t,i)=>{
    
      return (
        <>
        <li className="w-full justify-between flex border-b border-gray-200 rounded-t-lg p-5">
        <div className="flex items-center ps-3">
            <input type="checkbox" className=" w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-600 dark:border-gray-500"/>
            <label className="w-full py-3 ms-2 text-3xl font-medium text-black">{t.task}</label>
        </div>
        <div className='flex space-x-5'><button className='rounded text-2xl text-white px-2 py-2 bg-blue-400 font-bold' onClick={()=>{
        editlist(i)
       }}>Edit</button>
        <button className='rounded text-2xl text-white px-2 py-2 bg-red-400 font-bold' onClick={()=>{
        deletelist(i)
       }}>Delete</button></div>
       
     
       </li>

       
       </>
       );
    
   
  })
  }
 
  return (
   <>
   <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'> MY TODO LIST </h1>

   <form className='text-center' onSubmit={(e)=>{
    e.preventDefault();
   
      setlist([...list,{task}])
      settask("")

    
  
    
    
   }}>
    
    <input type='text' className='px-4 py-2 text-3xl m-8 border-4 border-zinc-800' placeholder='Write Task Here' value={task}
    onChange={(e)=>{
      
      settask(e.target.value)
    }}
    
    />
    <button className='rounded text-3xl bg-black text-white px-4 py-2 m-5'>Add Task</button>
   </form>
   <hr/>

   <div className='p-8 bg-slate-200 m-20'>
    <ul className='list-none'>
       {rendertask}
    </ul>
   </div>
   </>
  )
  }

export default page
