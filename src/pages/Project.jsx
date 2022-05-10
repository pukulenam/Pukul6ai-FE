import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import LeftBar from '../components/LeftBar';
import MidBarProj from '../components/project/MidBarProj';
import RightBar from '../components/RightBar';
import SessionAlert from '../components/SessionAlert';

function Project() {
    const session = sessionStorage.getItem('token');
    const userid = useSelector((state) => state.data.datas.id);
    const user_role = useSelector((state) => state.data.datas.role);

    const [user, setUser] = useState();
    const [project, setProject] = useState();
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${userid}`, {headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}})
        .then(res => {
            setUser(res.data);
        })
        .catch(err => {
            console.log(err);
            sessionStorage.clear();
        });
        
        axios.get(`http://localhost:8000/api/project/${user_role}/${userid}`, {headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}})
        .then(res => {
            setProject(res.data);
        })
        .catch(err => {
            console.log(err);
            sessionStorage.clear();
        });

        axios.get(`http://localhost:8000/api/project`, {headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}})
        .then(res => {
            setProjects(res.data);
            setLoading(false);
        })
        .catch(err => {console.log(); setLoading(false);});
    }, [])

    return (
        !session ? (
            <SessionAlert />
        ) : (
            loading ? (
                <React.Fragment>
                    <div className="modal modal-open modal-middle">
                        <div className="modal-box text-left bg-indigo-800 text-white flex items-center">
                            <svg className='animate-spin text-white w-auto h-11 mr-4' xmlns='http://www.w3.org/2000/svg' fill="none" viewBox='0 0 24 24'>
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <h3 className="font-bold text-lg">Loading...</h3>
                        </div>
                    </div>
                    <div className='bg-white text-black'>
                        <div className='grid grid-cols-1 gap-1 lg:grid-cols-12'>
                            <div className='col-span-1 lg:col-span-3 lg:block border-r-2 border-black lg:bg-slate-700'>
                                <LeftBar user={user} />
                            </div>
                            <div className='col-span-1 lg:col-span-7 bg-slate-100'>
                                <MidBarProj project={project} projects={[]} />
                            </div>
                            <div className='col-span-1 lg:col-span-2 text-left pl-4 pr-3 border-l-2 border-black lg:bg-slate-700'>
                                <RightBar user={user} />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </React.Fragment>
            ) : (
                <div className='bg-white text-black'>
                    <div className='grid grid-cols-1 gap-1 lg:grid-cols-12'>
                        <div className='sticky lg:static top-0 col-span-1 lg:col-span-3 lg:block border-r-2 border-black lg:bg-slate-700'>
                            <LeftBar user={user} />
                        </div>
                        <div className='col-span-1 lg:col-span-7 bg-slate-100'>
                            <MidBarProj project={project} projects={projects} />
                        </div>
                        <div className='col-span-1 lg:col-span-2 text-left pl-4 pr-3 border-l-2 border-black lg:bg-slate-700'>
                            <RightBar user={user} />
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        )
        
    )
}

export default Project;