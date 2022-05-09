import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function EditReportMid({admins, report}) {

    const adminid = useSelector(state => state.data.datas.id);
    const navigate = useNavigate();

    const [details, setDetails] = useState(
        {
            id: report?.id,
            project_id: report?.project_id, 
            description: report?.description,
            start: datetimeToStr(report?.start),
            end: datetimeToStr(report?.end),
            admin: report?.admin,
            attachment: report?.attachment
        }
    );

    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);
    
    function strToDatetime(str) {
        if (str) {
            let result = "";
            for (let i = 0; i < str.length; i++) {
                if (str[i] === "/") {
                    result += "-";
                } else if (str[i] === " ") {
                    result += "T";
                } else {
                    result += str[i];
                }
            }
            return result;
        }
        return null;
    }

    function datetimeToStr(date) {
        if (date) {
            let result = "";
            for (let i = 0; i < date.length; i++) {
                if (date[i] === "-") {
                    result += "/";
                } else if (date[i] === "T") {
                    result += " ";
                } else {
                    result += date[i];
                }
            }
            return result.length <= 16 ? (result + ":00") : (result);
        }
        return null;
    }

    function submitHandler() {
        setLoading(true);
        
        axios.put('http://localhost:8000/api/report', details, {headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}})
        .then(res => {
            navigate(`/project/view/${report?.project_id}`);
            setLoading(false);
        })
        .catch(err => {
            console.log(err.response.data)
            setError(err.response.data.errors);
            setLoading(false);
        })
        
    }

    return (
        <div className="grid grid-col-1 lg:grid-col-12">
            <div className="col-span-1 lg:col-span-12 m-4 bg-orange-400 border border-black rounded text-left p-4 text-white flex flex-col">
                {loading ? (
                    <div className="modal modal-open modal-top">
                        <div className="modal-box text-left bg-indigo-800 text-white flex items-center">
                            <svg className='animate-spin text-white w-auto h-11 mr-4' xmlns='http://www.w3.org/2000/svg' fill="none" viewBox='0 0 24 24'>
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <h3 className="font-bold text-lg">Adding...</h3>
                        </div>
                    </div>
                ) : (
                    null
                )}

                <h1 className="text-4xl font-bold">Edit Report</h1>

                <div className="border bg-black border-black my-2"></div>

                {error?.length !== 0 ? (
                    <div className="bg-red-500 text-center mx-auto p-3 rounded border-2 border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="26" fill="currentColor" className="w-auto bg-black rounded-full border-white border hover:bg-red-900 bi bi-x" viewBox="0 0 16 16" onClick={() => setError([])}>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <ul>
                            {error?.map((item, id) => (
                                <li key={id}>{`${id+1}. ${item}`}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}

                <label className="font-semibold">Project ID</label>
                <input type='text' className="w-2/3 rounded h-8 text-black px-2" name="project_id" id="project_id" onChange={e => setDetails({...details, project_id: e.target.value})} value={details.project_id} />


                <label className="font-semibold">Description</label>
                <input type='text' className="w-2/3 rounded h-8 text-black px-2" name="description" id="description" onChange={e => setDetails({...details, description: e.target.value})} value={details.description} />

                <label className="font-semibold">Admins</label>
                <input type='text' autoComplete="off" className={`w-2/3 rounded h-8 text-black px-2`} name='admin' id='admin' onChange={e => setDetails({...details, admin: e.target.value})} value={details.admin} />
                
                <label className="font-semibold">Start Date</label>
                <input type="datetime-local" className={`w-2/3 rounded h-8 text-black px-2`} name='start' id='start' onChange={e => setDetails({...details, start: datetimeToStr(e.target.value)})} value={strToDatetime(details.start)} />

                <label className="font-semibold">End Date</label>
                <input type="datetime-local" className={`w-2/3 rounded h-8 text-black px-2`} name='end' id='end' onChange={e => setDetails({...details, end: datetimeToStr(e.target.value)})} value={strToDatetime(details.end)} />

                <label className="font-semibold">Attachment</label>
                <input type="text" className={`w-2/3 rounded h-8 text-black px-2`} name='attachment' id='attachment' onChange={e => setDetails({...details, attachment: e.target.value})} value={details.attachment} />

                <div className="flex items-center mx-auto">
                    <button className="my-4 mx-2 rounded-lg p-3 bg-black border border-white" onClick={submitHandler}>Edit Report</button>
                    <Link to={`/project/view/${report?.project_id}`}>
                        <button className="my-4 rounded-lg p-3 bg-red-700 border border-white">Back to Project</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EditReportMid;