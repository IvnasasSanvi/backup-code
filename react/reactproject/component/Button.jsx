import React from 'react'
import { useState } from 'react'

const Button = ({count, setname }) => {
  
    return (
        <div>
       
            <button onClick={()=>setname(count+1)}>count={count}</button>
            
        </div>
    )
}


export default Button