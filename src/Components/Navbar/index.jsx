import React from 'react'
import '../../App.css'
function Navbar() {
  
  return (
    <div className='nav flex justify-start items-center text-start'>
        <div className="flex gap-2 items-center w-full h-24">
	           <h4 className='text-2xl font-bold text-[#678275] text-start'>Nature Website </h4>	
                <span style={{fontSize:'13px'}}>[ Your slogan text goes here ]</span>
        </div>
    </div>
  )
}

export default Navbar