import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import VChart from "./VChart";
import ReportTable from "../report/ReportTable";

function ViewProjMid({project, reports}) {

    const user_role = useSelector((state) => state.data.datas.role);
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="grid grid-col-1 lg:grid-col-12">
                <div className="col-span-1 lg:col-span-12 m-4 bg-black border border-orange-500 rounded text-left p-4 text-orange-400 flex flex-col">

                    <h1 className="text-4xl font-bold">Project</h1>

                    <div className="border bg-black border-black my-2"></div>

                    <label className="font-semibold">Project Name</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">{project.name}</a>

                    <label className="font-semibold">User id</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">{project.userid}</a>

                    <label className="font-semibold">Admin id</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">{project.adminid}</a>

                    <label className="font-semibold">Progress</label>
                    <div className="bg-orange-500 p-2 rounded-lg text-black">
                        <VChart progress={project.progress} />
                    </div>

                    <label className="font-semibold">Start Date</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">{project.start}</a>

                    <label className="font-semibold">End Date</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">{project.end}</a>
                    
                    <div className="flex items-center mx-auto">
                        <Link to={`/project`}>
                            <button className="my-4 rounded-lg p-3 text-white bg-red-700 border border-white">Back to Project</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='grid grid-col-1 lg:grid-col-12'>
                <div className="col-span-1 lg:col-span-12 m-4 rounded bg-slate-300">
                    {user_role === "admin" ? (
                        <Link to={`/report/${project.id}/add`}>
                            <button className="rounded-lg bg-red-500 p-3 mx-auto hover:bg-orange-500 my-3 border border-black">Add Report</button>
                        </Link>
                        ) : null}
                    <ReportTable reports={reports} user_role={user_role} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ViewProjMid;