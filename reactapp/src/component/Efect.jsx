import React from 'react'
import { useState,useEffect } from 'react'

const Effect = () => {
    const [caunt,setCaunt] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
          setCaunt(caunt+1)
        },1000)
      })
  return (
    <div>
        Aviator:<p>{caunt}</p>
    </div>
  )
}

export default Effect