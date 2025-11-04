import React from 'react'
import logo from "./assets/OIP.webp"

function App() {
  return (
    <div className='bg-slate-900 grid place-items-center h-screen'>
      <div className='text-center'>
        <div className='p-5 max-w-sm mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-3'>
          <div>
            <img src={logo} alt="" className='h-16 w-16' />
          </div>
          <div>
            <div className='text-2xl font-medium text-black'>
              Tailwind Css
              <p className='text-slate-500 text-base'>By Bilal Sikander</p>
            </div>
          </div>
        </div>
        <button className='bg-sky-500 w-full mt-2 text-white p-2 rounded-xl hover:bg-white hover:text-black cursor-pointer'>Buy Now</button>
        <div className='mt-2'>
          <p className='text-white sm:text-red-500 md:text-green-500 lg:text-blue-500'>Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  )
}

export default App