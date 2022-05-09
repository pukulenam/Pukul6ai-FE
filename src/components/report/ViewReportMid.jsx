import React from "react";
import { Link } from "react-router-dom";

function ViewReportMid({report}) {

    return (
        <React.Fragment>
            <div className="grid grid-col-1 lg:grid-col-12">
                <div className="col-span-1 lg:col-span-12 m-4 bg-black border border-orange-500 rounded text-left p-4 text-orange-400 flex flex-col">

                    <h1 className="text-4xl font-bold">Report</h1>

                    <div className="border bg-black border-black my-2"></div>

                    <label className="font-semibold">Project ID</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">{report?.project_id}</a>

                    <label className="font-semibold">Description</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">{report?.description}</a>

                    <label className="font-semibold">Start</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">{report?.start}</a>

                    <label className="font-semibold">End</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">{report?.end}</a>

                    <label className="font-semibold">Admins</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">
                        <ul>
                            {report?.adminByName?.map((item, id) => (
                                <li key={id}>{item}</li>
                            ))}
                        </ul>
                    </a>
                    
                    <label className="font-semibold">Attachment</label>
                    <a className="bg-orange-500 p-2 rounded-lg text-black">{report?.attachment}</a>

                    <div className="flex items-center mx-auto">
                        <Link to={`/project/view/${report?.project_id}`}>
                            <button className="my-4 rounded-lg p-3 text-white bg-red-700 border border-white">Back to Project</button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ViewReportMid;