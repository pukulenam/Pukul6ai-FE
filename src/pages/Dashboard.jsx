import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';

function Home() {
    
    const userid = useSelector((state) => state.data.datas.id);

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(sessionStorage.getItem('token'))
        axios.get(`http://localhost:8000/api/user/${userid}`, {headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}})
        .then(res => {
            console.log(res.data);
            setUser(res.data);
            setLoading(false);
        })
        .catch(err => console.log(err));
    }, [])

    return (
        loading ? (
            <div>
                loading...
            </div>
        ) : (
            <div className='bg-white text-black'>
                <div className='grid grid-cols-1 gap-1 lg:grid-cols-12'>
                    <div className='col-span-1 lg:col-span-3 hidden lg:block border-gray-400 border-r-4'>
                        <LeftBar />
                    </div>
                    <div className='col-span-1 lg:col-span-7 bg-slate-100'>
                        
                    </div>
                    <div className='col-span-1 lg:col-span-2 text-left pl-4 pr-3 border-gray-400 border-l-4'>
                        <RightBar user={user} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    )
}

export default Home;