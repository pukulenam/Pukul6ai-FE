import React from 'react';
import { useNavigate } from 'react-router-dom';

function RightBar({user}) {
    
    const navigate = useNavigate();

    function logOutHandler() {
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <div className='hidden lg:flex flex-col text-white'>
            {user ? (
                <div className='avatar placeholder flex items-center mt-4 p-3 rounded-lg bg-blue-500'>
                    <div className='bg-black rounded-full w-10 text-white'>
                        <span className='text-2xl'>A</span>
                    </div>
                    <a className='px-4'>{user ? (user.full_name.length > 13 ? user.full_name.slice(0, 13)+'...' : user.full_name) : (null)}</a>
                </div>
            ) : (
                <div className='animate-pulse avatar placeholder flex items-center mt-4 p-3 rounded-lg bg-gray-500'>
                    <div className='bg-black rounded-full w-10 text-white'>
                        <span className='text-2xl'></span>
                    </div>
                </div>
            )}
            
            <div className='border border-white mt-5'></div>
            <div className='bg-orange-400 mt-6 font-semibold rounded-lg border p-3'>
                <a>Profile</a>
            </div>
            <div className='mt-48 mb-4 bg-red-500 hover:bg-gray-500 font-semibold rounded-lg border p-3 cursor-pointer' onClick={logOutHandler}>
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default RightBar;