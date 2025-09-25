import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Home() {

  const [dataa,setData]  = useState("");

  useEffect(() =>{

    fetch("https://fullstact-host.vercel.app/home")
  .then((res) => res.json())
  .then((data) => 
    
    setTimeout (() => {
      setData(data)
    },2000)

    )
  .catch((err) => console.log(err))

  

  },[])

  console.log(dataa)


  return (
    <div className=' font-bold text-3xl flex flex-col justify-center items-center h-screen'>
      <h1 className=''>home from frontend</h1>
      {dataa ? dataa.message : "Loading..."}
    </div>
  )
}

export default Home
