import React, { useEffect, useState } from 'react'
import { icone } from '../preacticedata/UseEffectData'

function UseEffect() {

    const [pet, setPet] = useState(icone)
    useEffect(() =>{
      const delay = 5000
     setTimeout( () =>{   // set state bahr use krne se error ata hai esliy useEffect main dalte hai
         setPet("dog")
     },delay)
    },[]) // dependnecy arry dalne se code useEffect ka ek bar hi run hoga
 
  return (
    <div className='main flex flex-col justify-center items-center h-screen'>
      {/* {pet} */}
         <div >
             <div className=' border border-blue-800 flex justify-center bg-slate-200 py-3 border-none'>{pet}</div>
            <button className="btn  p-1 px-4  border border-black mt-2" onClick={() =>setPet("cat")}>cat</button>
            <button className="btn  p-1 px-4 border border-black ml-2 " onClick={() =>setPet("parrot")}>parrot</button>
          </div>
        
    </div>
  )
}

export default UseEffect;
