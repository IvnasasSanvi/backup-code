import React from 'react'
import { useState } from 'react'

const Button = ({count, setname }) => {
  const [title, setTitle] = useState("My name is sanvi")
    return (
        <div>
       
            <button onClick={()=>setname(count+1)}>count={count}</button>
            <Header title={title}> </Header>
            <Header title="sanvi2"> </Header>
            <Header title="sanvi3"> </Header>
            <Header title="sanvi4"> </Header>
        </div>
    )
}

function Header({title}){
    console.log("rendered")
    return <div>
        {title}
    </div>
}


export default Button