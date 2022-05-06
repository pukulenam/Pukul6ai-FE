import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function AddProjMid({users}) {

    const adminid = useSelector(state => state.data.datas.id);
    const navigate = useNavigate();

    const [details, setDetails] = useState({adminid: adminid, userid: null, name: ""});
    const [userFilter, setUserFilter] = useState(users);
    const [adminFilter, setAdminFilter] = useState(users);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);
    
    function filter(e) {
        setDetails({...details, userid: e.target.value})
        setUserFilter(users.filter(item => item.full_name.toLowerCase().includes(e.target.value)));
    }

    function filter2(e) {
        setDetails({...details, adminid: e.target.value})
        setAdminFilter(users.filter(item => item.full_name.toLowerCase().includes(e.target.value)));
    }

    function submitHandler() {
        setLoading(true);
        axios.post('http://localhost:8000/api/project', details, {headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}})
        .then(res => {
            navigate('/project');
            setLoading(false);
        })
        .catch(err => {
            console.log(err.response.data.errors)
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

                <h1 className="text-4xl font-bold">Add Project</h1>

                <div className="border bg-black border-black my-2"></div>

                {error.length !== 0 ? (
                    <div className="bg-red-500 text-center mx-auto p-3 rounded border-2 border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="26" fill="currentColor" className="w-auto bg-black rounded-full border-white border hover:bg-red-900 bi bi-x" viewBox="0 0 16 16" onClick={() => setError([])}>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <ul>
                            {error.map((item, id) => (
                                <li key={id}>{`${id+1}. ${item}`}</li>
                            ))}
                        </ul>
                    </div>
                ) : null}

                <label className="font-semibold">Project Name</label>
                <input type='text' className="w-2/3 rounded h-8 text-black px-2" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />

                <label className="font-semibold">User id</label>
                <div className="relative">
                    <input type='text' className={`w-2/3 rounded h-8 text-black px-2`} autoComplete="off" name="user" id="user" onBlur={() => setShow(!show)} onFocus={() => setShow(!show)} onChange={filter} />
                
                    {show ? (
                        <div className="absolute z-10 bg-black">
                            <ul>
                                {userFilter ? userFilter.map((item, id) => (
                                    <li key={id}>{`id: ${item.id} ${item.full_name}`}</li>
                                )) : null}
                            </ul>
                        </div>
                    ) : (
                        null
                    )}
                </div>

                <label className="font-semibold">Admin id</label>
                <div className="relative">
                    <input type='text' autoComplete="off" className={`w-2/3 rounded h-8 text-black px-2`} name="user" id="user" onBlur={() => setShow2(!show2)} onFocus={() => setShow2(!show2)} onChange={filter2} />
                
                    {show2 ? (
                        <div className="absolute z-10 bg-black">
                            <ul>
                                {adminFilter ? adminFilter.map((item, id) => (
                                    <li key={id}>{`id: ${item.id} ${item.full_name}`}</li>
                                )) : null}
                            </ul>
                        </div>
                    ) : (
                        null
                    )}
                </div>
                
                <div className="flex items-center mx-auto">
                    <button className="my-4 mx-2 rounded-lg p-3 bg-black border border-white" onClick={submitHandler}>Add Project</button>
                    <Link to={`/project`}>
                        <button className="my-4 rounded-lg p-3 bg-red-700 border border-white">Back to Project</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddProjMid;