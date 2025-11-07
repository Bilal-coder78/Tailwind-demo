import React from 'react'

function Myweb() {
    return (
        <div className='bg-slate-900 h-screen'>
            <nav className='w-full h-14 bg-indigo-200 flex justify-between items-center px-4'>
                <div className='font-bold text-xl text-indigo-700'>BS Academy</div>
                <ul className='md:flex hidden font-semibold gap-5'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
                <div className='hidden md:block font-bold bg-indigo-700 text-white px-2 py-2 rounded cursor-pointer'>Login/SignUp</div>
                <a className='text-4xl md:hidden' href="#">&#8801;</a>
            </nav>

            <header className='w-full h-auto'>
                <img className='object-cover bg-center h-[90vh] w-full' src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg" alt="" />
                <img src="" alt="" />
            </header>
        </div>
    )
}

export default Myweb