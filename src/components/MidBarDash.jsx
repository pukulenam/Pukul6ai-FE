import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import ProjectTable from './ProjectTable';

function MidBarDash({project}) {

    const allProject = project?.length;
    const compProject = project?.filter(item => item.end !== null).length;

    return (
        <React.Fragment>
            {!project ? (
                <div className='grid grid-cols-3 lg:grid-cols-12 lg:gap-4 m-4'>
                    <div className='col-span-2 lg:col-span-3'>
                        <Chart complete={compProject} ongoing={allProject-compProject} />
                    </div>
                    <div className='col-span-1 lg:col-span-3 text-center mt-6 flex flex-col items-center'>
                        <a className='font-semibold bg-orange-200 p-3 rounded border-2 border-blue-800 w-full'>Total Project</a>
                        <a className='w-full rounded py-9 bg-gray-600 animate-pulse'></a>
                    </div>
                    
                    <div className='col-span-3 lg:col-span-6 mt-6 text-left bg-orange-300 rounded-lg'>
                        <div className='h-44 bg-gray-600 animate-pulse'></div>
                    </div>
                </div>
            ) : (
                <div className='grid grid-cols-3 lg:grid-cols-12 lg:gap-4 m-4'>
                    <div className='col-span-2 lg:col-span-3'>
                        <Chart complete={compProject} ongoing={allProject-compProject} />
                    </div>
                    <div className='col-span-1 lg:col-span-3 text-center mt-6 flex flex-col items-center'>
                        <a className='font-semibold bg-orange-200 p-3 rounded border-2 border-blue-800 w-full'>Total Project</a>
                        <a className='bg-gray-300 w-full rounded py-9'>{allProject}</a>
                    </div>
                    
                    <div className='col-span-3 lg:col-span-6 mt-6 text-left bg-orange-300 rounded-lg'>
                        <ProjectTable project={project.slice(0, 3)} user_role="user" />
                        {project.length > 3 ? (
                            <React.Fragment>
                                <div className='border border-black'></div>
                                <Link to={'/project'}>
                                    <a className='m-4 text-blue-700 cursor-pointer hover:text-purple-500'>view all</a>
                                </Link>
                            </React.Fragment>
                        ) : null}
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default MidBarDash;