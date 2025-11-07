import React from 'react'
import logo from "../assets/OIP.webp"

function Cards() {
  return (
     <div className='bg-slate-900 grid place-items-center h-screen'>
          <div>
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
              <p className='text-white text-center sm:text-red-500 md:text-green-500 lg:text-blue-500'>Lorem, ipsum dolor.</p>
            </div>
            <div className='mt-3'>
                <div className='max-w-sm bg-white rounded-xl mx-auto overflow-hidden md:max-w-2xl'>
                  <div className='md:flex'>
                    <div>
                      <img className='h-48 w-full object-cover md:h-full md:w-48' src="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg" alt=""/>
                    </div>
                    <div className='p-8 max-w-sm'>
                      <div className='uppercase text-sm text-indigo-500 font-semibold'>An awesome card</div>
                      <a className='text-wrap text-black hover:text-blue-600' href="#">Tailwind CSS is amzing once you understand the <span className='bg-yellow-400 p-[2px] px-[12px] font-semibold'>power</span> of it</a>
                      <p className='text-slate-500 text-sm mt-2'>Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Cards