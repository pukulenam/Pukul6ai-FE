import React, { useState } from 'react';
import p6logo from '../asset/logo/pukulEnam.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function LeftBar({user}) {
    
    const location = useLocation();

    const [click, setClick] = useState(false);

    const navigate = useNavigate();

    function logOutHandler() {
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <React.Fragment>
            <div className='sticky lg:hidden flex z-20 items-center gap-2 border-black text-white bg-slate-800 shadow-lg'>
                <Link to={'/'}>
                    <div className='p-4 bg-slate-900'>
                        <a className='font-semibold'>PukulEnam AI</a>
                    </div>
                </Link>
                <Link to={'/dashboard'}>
                    <div>
                        Dashboard
                    </div>
                </Link>
                <Link to={'/project'}>
                    <div>
                        Project
                    </div>
                </Link>
                <div>
                    schedule
                </div>
                <div className='bg-blue-700 p-1 rounded-lg' onClick={() => setClick(!click)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
            </div>
            {click ? (
                <div className='block lg:hidden absolute right-4 animate-fadein p-3 border border-gray-600 w-auto bg-orange-200'>
                    <div>
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
                    </div>
                    <div className='border border-black mt-5'></div>
                    <div className='bg-orange-300 mt-6 font-semibold rounded-lg border p-3'>
                        <a>Profile</a>
                    </div>
                    <div className='mt-48 mb-4 bg-red-500 hover:bg-gray-500 font-semibold rounded-lg border p-3 cursor-pointer' onClick={logOutHandler}>
                        <button>Log Out</button>
                    </div>
                </div>
            ) : null}
            <div className='sticky hidden left-0 z-20 lg:flex flex-col p-4 text-white text-left'>
                <Link to={'/'}>
                    <div className='flex items-center w-full bg-red-500 rounded-lg p-4 border border-white'>
                        <img className='h-14 rounded-full mr-4 w-auto border' alt='' src={p6logo} />
                        <a className='font-bold text-2xl'>PukulEnam AI</a>
                    </div>
                </Link>
                <div className='border border-white bg-white mt-7 mb-6'></div>
                <Link to={'/dashboard'}>
                    <div className={`flex ${location.pathname === '/dashboard' ? `bg-orange-400` : `bg-gray-400`} hover:bg-orange-300 font-semibold rounded-lg border border-white p-3 cursor-pointer`}>
                        Dashboard
                    </div>
                </Link>
                <Link to={'/project'}>
                    <div className={`flex ${location.pathname === '/project' ? `bg-orange-400` : `bg-gray-400`} hover:bg-orange-300 font-semibold rounded-lg border border-white p-3 mt-2 cursor-pointer`}>
                        Projects
                    </div>
                </Link>
                <Link to={'/schedule'}>
                    <div className={`flex ${location.pathname === '/schedule' ? `bg-orange-400` : `bg-gray-400`} hover:bg-orange-300 font-semibold rounded-lg border border-white p-3 mt-2 cursor-pointer`}>
                        Schedules
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default LeftBar;