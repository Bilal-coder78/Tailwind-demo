import React from 'react'
import logo from "./assets/OIP.webp"

function App() {
  return (
    <div className='bg-slate-900 grid place-items-center h-screen'>
      <div>
        <div className='p-5 max-w-sm mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-3'>
          <div>
            <img src={logo} alt="" className='h-16 w-16'/>
          </div>
          <div>
            <div className='text-2xl font-medium text-black'>
              Tailwind Css
              <p className='text-slate-500 text-base'>By Bilal Sikander</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App