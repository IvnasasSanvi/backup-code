import React, { useState } from 'react'

const NavBar = () => {
  const [value, setvalue]= useState("")
  return (
    <div>
      <div>
        <img src="" alt="" />
        <h4>cartwhatever</h4>
      </div>
      <div>
        <h4>Wilson</h4>
        <h4>Case Study</h4>
        <h4>Resource</h4>
        <h4>Pricing</h4>
        <input type="text" key={value} placeholder="Search"/>
      </div>
      <div>
        <button>login</button>
        <button>Hire Me</button>
      </div>
    </div>
  )
}

export default NavBar