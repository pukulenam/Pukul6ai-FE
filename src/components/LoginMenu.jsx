import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_USER } from '../redux/sliceData';
import { useNavigate } from 'react-router-dom';

function LoginMenu({choose}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [error, setError] = useState(false);
    const [details, setDetails] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);

    function submitHandler() {
        setLoading(true);
        axios.post("http://localhost:8000/api/login", details)
        .then(res => {
            dispatch(ADD_USER(res.data.user));
            sessionStorage.setItem("token", res.data.token );
            setLoading(false);
            navigate('/dashboard');
        })
        .catch(err => {
            setError(true);
            console.log('error not auth');
            setLoading(false);
        })
    }

    return (
        <React.Fragment>
            <div className='relative p-4 lg:py-8 lg:px-28 rounded flex-col flex items-center'>

                {loading ? (
                    <div className='absolute flex flex-col items-center bg-blue-200 border-blue-500 border-2 rounded-lg p-2 w-3/4 mt-10'>
                        <svg className='animate-spin text-white w-auto h-11' xmlns='http://www.w3.org/2000/svg' fill="none" viewBox='0 0 24 24'>
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Authenticating...
                    </div>
                ) : null}

                {error && !loading ? (
                    <div className='absolute bg-red-200 border-red-500 border-2 rounded-lg p-2 w-3/4 mt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="" fill="red" className="mx-4 hover:bg-orange-300" viewBox="0 0 16 16" onClick={() => setError(false)}>
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <div className='flex flex-col items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="" fill="red" className="flex" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                            </svg>
                            <p className='flex text-[#cc3300]'>You Are Not Authenticate</p>
                        </div>
                    </div>
                ) : null}

                <a className='text-3xl flex mb-28'>Welcome to PukulEnam AI</a>
                <a className='text-xl mb-4'>Login</a>
                <div className='border mb-6 border-black bg-black w-full'></div>

                <label className='text-xl'>Username</label>
                <input className='border-blue-900 border-2 w-2/3 rounded p-2 focus:bg-slate-100' placeholder='Username..' type='text' name='username' id='username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />

                <label className='text-xl'>Password</label>
                <input className='border-blue-900 border-2 w-2/3 rounded p-2 focus:bg-slate-100' placeholder='Password..' type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />

                <button className='flex mt-6 bg-blue-600 opacity-100 hover:bg-orange-700 text-white font-bold py-2 px-9 rounded mb-2' onClick={submitHandler} >
                    Login
                </button>

                <a className='mb-2'>Belum Punya Akun?</a>
                <button className='flex bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded' onClick={() => choose('signup')}>Sign Up here</button>
            </div>
        </React.Fragment>
    )
}

export default LoginMenu;