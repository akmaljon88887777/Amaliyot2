import React from 'react'
import '../../App.css'
function Container() {
  return (
    <div className='App3 flex w-full h-[230px] justify-center rounded-xl rasm items-end '>
        <div className='Button flex items-center  justify-start -ml-96 gap-2 -mb-1.5 '>
          <button className='btnimg mx-10 px-10  flex items-center justify-center text-[#05ACFF]'>
            <p className='font-medium mt-1' style={{fontSize:'11px'}}>Home</p>
          </button>
          <button className='btnimg mx-10 px-10  flex items-center justify-center hover:text-[#05ACFF]'>
            <p className='font-medium mt-1' style={{fontSize:'11px'}}>Products</p>
          </button>
          <button className='btnimg mx-10 px-10  flex items-center justify-center hover:text-[#05ACFF]'>
            <p className='font-medium mt-1' style={{fontSize:'11px'}}>Services</p> 
          </button>
          <button className='btnimg mx-10 px-10  flex items-center justify-center hover:text-[#05ACFF]'>
            <p className='font-medium mt-1' style={{fontSize:'11px'}}>Clients</p>
          </button>
          <button className='btnimg mx-10 px-10  flex items-center justify-center hover:text-[#05ACFF]'>
            <p className='font-medium mt-1' style={{fontSize:'11px'}}>About</p>
          </button>

          <div className='mt-10'>
          <button className='btnimg mx-10  items-center w-full justify-center block -mb-10 hover:text-[#05ACFF]'>
            <p className='font-medium mt-1.5 hover:text-[#05ACFF]' style={{fontSize:'11px'}}>Contact</p>
          </button>
          </div>
        </div>
        
    </div>
  )
}

export default Container