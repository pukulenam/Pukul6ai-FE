import React from 'react';
import logo from '../../asset/logo/pukulEnam.jpg';
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
    
    return (
        <React.Fragment>
            <div className='sticky top-0 z-20 navbar shadow-md h-24 bg-red-400'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div className='border rounded-lg border-black lg:hidden'>
                            <label tabIndex="0" className="btn bg-transparent border-none hover:bg-transparent lg:invisible swap swap-rotate">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </label>
                        </div>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-orange-300">
                            <li className='rounded'>
                                <a href='https://www.pukulenam.id' className="no-underline hover:bg-yellow-400 active:bg-red-400">
                                    <p className='no-underline text-white'>PukulEnam Newsletter</p>
                                </a>
                            </li>
                            <li className='rounded'>
                                <Link to={`/login`} className="no-underline hover:bg-yellow-400 active:bg-red-400">
                                    <a className='no-underline text-white'>Login</a>
                                </Link>
                            </li>
                            <li className='rounded'>
                                <Link to={`#`} className="no-underline hover:bg-yellow-400 active:bg-red-400">
                                    <a className='no-underline text-white'>About</a>
                                </Link>
                            </li>
                            <li className='rounded'>
                                <Link to={`#`} className="no-underline hover:bg-yellow-400 active:bg-red-400">
                                    <a className='no-underline text-white'>Service</a>
                                </Link>
                            </li>
                            <li className='rounded'>
                                <Link to={`#`} className="no-underline hover:bg-yellow-400 active:bg-red-400">
                                    <a className='no-underline text-white'>Team</a>
                                </Link>
                            </li>
                            <hr/>
                            <li tabIndex="0">
                                <a className='text-white'>
                                    More
                                </a>
                                <ul className="p-2 bg-orange-400">
                                    <Link to={`#`} className="no-underline">
                                        <li>   
                                            <button className='hover:bg-primary-focus hover:bg-opacity-40 text-white font-semibold'>Blog</button>                                      
                                        </li>
                                    </Link>
                                    <Link to={`#action4`} className="no-underline">
                                        <li>
                                            <a className='hover:bg-primary-focus hover:bg-opacity-40 text-white font-medium'>Contact</a>
                                        </li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <label className="btn bg-transparent border-none hover:bg-transparent lg:flex swap swap-rotate">
                        <ul className="menu menu-horizontal p-0 my-0 text-md font-semibold">
                            <li>
                                <Link to={'/'} className="no-underline">
                                    <img className='h-14' alt="" src={logo} />
                                    <a className='lg:text-2xl text-xl no-underline text-white'>PukulEnam.AI</a>
                                </Link>
                            </li>
                        </ul>
                    </label>
                   
                    <div className="lg:flex hidden justify-center ml-auto">
                        <ul className="menu menu-horizontal items-center p-0 my-0 text-base font-semibold">
                            <li className='rounded'>
                                <Link to={`#`} className="no-underline hover:bg-yellow-400 active:bg-red-400">
                                    
                                </Link>
                            </li>
                            <li className='rounded'>
                                <Link to={`#`} className="no-underline hover:bg-yellow-400 active:bg-red-400">
                                    <a className='no-underline text-white'>About</a>
                                </Link>
                            </li>
                            <li className='rounded'>
                                <Link to={`#`} className="no-underline hover:bg-yellow-400 active:bg-red-400">
                                    <a className='no-underline text-white'>Service</a>
                                </Link>
                            </li>
                            <li className='rounded'>
                                <Link to={`#`} className="no-underline hover:bg-yellow-400 active:bg-red-400">
                                    <a className='no-underline text-white'>Team</a>
                                </Link>
                            </li>
                            <li tabIndex="0">
                                <a className='text-white hover:bg-yellow-400 hover:bg-opacity-75 rounded no-underline'>
                                    More
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                                </a>
                                <ul className="p-2 bg-orange-400">
                                    <Link to={`#`} className="no-underline">
                                        <li>   
                                            <button className='hover:bg-primary-focus hover:bg-opacity-40 text-white font-semibold'>Blog</button>                                      
                                        </li>
                                    </Link>
                                    <Link to={`#action4`} className="no-underline">
                                        <li>
                                            <a className='hover:bg-primary-focus hover:bg-opacity-40 text-white font-medium'>Contact</a>
                                        </li>
                                    </Link>
                                </ul>
                            </li>
                            <li className='bg-white rounded h-8'>
                                <input className='text-black h-8' type="text"></input>
                            </li>
                            <li>
                                <button className='hover:bg-yellow-400 border-2 h-9 bg-yellow-400 hover:bg-opacity-75 text-white ml-4'>Search</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='lg:flex hidden justify-center ml-auto'>
                    <ul className="menu menu-horizontal p-0 my-0 text-md font-semibold">
                        <li>
                            <Link className='hover:bg-yellow-500 text-white font-medium' to={'/login'} >
                                <a>Login</a>
                            </Link>
                        </li>
                        <li>
                            <a className='hover:bg-yellow-500 text-white font-medium' href='https://www.pukulenam.id'>Kembali ke PukulEnam Newsletter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;