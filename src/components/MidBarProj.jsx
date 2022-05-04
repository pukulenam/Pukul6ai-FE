import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import ProjectTable from './ProjectTable';
import VChart from './VChart';

function MidBar({project}) {

    const user_role = useSelector((state) => state.data.datas.role);

    const allProject = project?.length;
    const compProject = project?.filter(item => item.end !== null).length;

    return (
        <React.Fragment>
            {!project ? (
                <div className='grid grid-cols-3 lg:grid-cols-12 gap-1 lg:gap-4 m-4'>
                    <div className='col-span-3 lg:col-span-3'>
                        <Chart complete={compProject} ongoing={allProject-compProject} />
                    </div>
                    <div className='col-span-1 lg:col-span-3 text-center mt-6 flex flex-col items-center'>
                        <a className='font-semibold bg-orange-200 p-3 rounded border-2 border-blue-800 w-full'>Total Project</a>
                        <a className='bg-gray-600 w-full rounded py-9 animate-pulse'></a>
                    </div>
                    <div className='col-span-1 lg:col-span-3 text-center mt-6 flex flex-col items-center'>
                        <a className='font-semibold bg-orange-200 p-3 rounded border-2 border-blue-800 w-full'>Done Project</a>
                        <a className='bg-gray-600 w-full rounded py-9 animate-pulse'></a>
                    </div>
                    <div className='col-span-1 lg:col-span-3 mt-6 flex flex-col items-center text-center'>
                        <a className='font-semibold bg-orange-200 p-3 rounded border-2 border-blue-800 w-full'>On Going Project</a>
                        <a className='bg-gray-600 w-full rounded py-9 animate-pulse'></a>
                    </div>
                    <div className='col-span-1 lg:col-span-12 text-left mb-8 mx-3 lg:mx-0'>
                        <div className='h-44 animate-pulse bg-gray-600'></div>
                    </div>
                </div>
            ) : (
                <div className='grid grid-cols-3 lg:grid-cols-12 gap-1 lg:gap-4 m-4'>
                    <div className='col-span-3 lg:col-span-3'>
                        <Chart complete={compProject} ongoing={allProject-compProject} />
                    </div>
                    <div className='col-span-1 lg:col-span-3 text-center mt-6 flex flex-col items-center'>
                        <a className='font-semibold bg-orange-200 p-3 rounded border-2 border-blue-800 w-full'>Total Project</a>
                        <a className='bg-gray-300 w-full rounded py-9'>{allProject}</a>
                    </div>
                    <div className='col-span-1 lg:col-span-3 text-center mt-6 flex flex-col items-center'>
                        <a className='font-semibold bg-orange-200 p-3 rounded border-2 border-blue-800 w-full'>Done Project</a>
                        <a className='bg-gray-300 w-full rounded py-9'>{compProject}</a>
                    </div>
                    <div className='col-span-1 lg:col-span-3 mt-6 flex flex-col items-center text-center'>
                        <a className='font-semibold bg-orange-200 p-3 rounded border-2 border-blue-800 w-full'>On Going Project</a>
                        <a className='bg-gray-300 w-full rounded py-9'>{allProject-compProject}</a>
                    </div>
                    {user_role === 'admin' ? (
                        <div className='col-span-3 lg:col-span-12 mb-4 mt-4 bg-orange-600 mx-auto p-2 rounded-lg border border-black hover:bg-blue-600'>
                            <Link to={'/project/add'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline bi bi-plus-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                                <button className='inline ml-3'>
                                    Add Project
                                </button>
                            </Link>
                        </div>
                    ) : (null)}
                    <div className='col-span-1 lg:col-span-12 text-left mb-8 mx-3 lg:mx-0'>
                        <ProjectTable project={project} user_role={user_role} />
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default MidBar;