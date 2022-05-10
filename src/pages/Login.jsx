import React, { useEffect, useState } from 'react';
import LoginCover from '../components/LoginCover';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import LoginMenu from '../components/LoginMenu';
import SignupMenu from '../components/SignupMenu';

function Login() {
    
    const [cond, setCond] = useState("login");
    const navigate = useNavigate();

    function handleChange(e) {
        setCond(e);
    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) 
            navigate('/dashboard');
    }, [])

    return (
        <div className='bg-orange-200 text-black grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-1 lg:col-span-12 my-14 mx-16 bg-white grid grid-cols-1 lg:grid-cols-12 shadow-lg rounded-lg'>
                <div className='col-span-1 lg:col-span-6'>
                    <LoginCover />
                </div>
                {cond === "login" ? (
                    <div className='animate-slideinleft col-span-1 lg:col-span-6'>
                        <LoginMenu choose={handleChange} />
                    </div>
                ) : (
                    <div className='animate-fadein col-span-1 lg:col-span-6'>
                        <SignupMenu choose={handleChange} />
                    </div>
                )}
            </div>
            <div className='col-span-1 lg:col-span-12'>
                <Footer />
            </div>
        </div>
    )
}

export default Login;