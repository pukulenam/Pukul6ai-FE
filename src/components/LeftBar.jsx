import React from 'react';
import p6logo from '../asset/logo/pukulEnam.jpg';

function LeftBar() {
    
    return (
        <React.Fragment>
            <div className='sticky left-0 z-20 flex flex-col p-4 text-white text-left'>
                <div className='flex items-center w-full bg-red-300 rounded-lg border p-4'>
                    <img className='h-14 rounded-full mr-4 w-auto' alt='' src={p6logo} />
                    <a className='font-bold text-2xl'>PukulEnam AI</a>
                </div>
                <div className='border border-black mt-7'></div>
                <div className='flex bg-gray-400 hover:bg-orange-300 font-semibold rounded-lg border mt-8 p-3 cursor-pointer'>
                    Dashboard
                </div>
                <div className='flex bg-gray-400 hover:bg-orange-300 font-semibold rounded-lg border p-3 cursor-pointer'>
                    Projects
                </div>
                <div className='flex bg-gray-400 hover:bg-orange-300 font-semibold rounded-lg border p-3 cursor-pointer'>
                    Schedules
                </div>
            </div>
        </React.Fragment>
    )
}

export default LeftBar;