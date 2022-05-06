import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import VChart from "../project/VChart";

function ProjectTable({reports, user_role}) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);
    const [conf, setConf] = useState({});
    const [show, setShow] = useState(false);

    function handlerReset(status) {
        setError([]);
        setConf({});
        setShow(false);
        
        if (status) window.location.reload();
    }

    function deleteHandler(id, name) {
        const ok = window.confirm(`Are You Sure Want to Delete ${name}`)

        if (ok) {
            setLoading(true);
            axios.delete("http://localhost:8000/api/report", {headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}, data: {id: id}})
            .then(res => {
                setLoading(false);
                setConf(res.data);
                setShow(true);
            })
            .catch(err => {
                setError(err.response.data.errors);
                setLoading(false);
                setShow(true);
            })
        }
    }

    return (
        <React.Fragment>
            {loading ? (
                <div className="modal modal-open modal-middle">
                    <div className="modal-box text-left bg-indigo-800 text-white flex items-center">
                        <svg className='animate-spin text-white w-auto h-11 mr-4' xmlns='http://www.w3.org/2000/svg' fill="none" viewBox='0 0 24 24'>
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <h3 className="font-bold text-lg">Loading...</h3>
                    </div>
                </div>
            ) : null}
            {show ? (
                error.length !== 0 ? (
                    <div className="modal modal-open modal-middle">
                        <div className="modal-box text-left bg-indigo-800 text-white flex items-center">
                            <ul>
                                {error.map((item, id) => (
                                    <li key={id}>{`${id+1}. ${item}`}</li>
                                ))}
                            </ul>
                            <button className="p-3 ml-auto bg-green-500 rounded hover:bg-blue-600" onClick={() => handlerReset(false)}>Close</button>
                        </div>
                    </div>
                ) : (
                    <div className="modal modal-open modal-middle">
                        <div className="modal-box text-left bg-indigo-800 text-white flex items-center">
                            <h3 className="font-bold text-lg">{conf.message}</h3>
                            <button className="p-3 ml-auto bg-green-500 rounded hover:bg-blue-600" onClick={() => handlerReset(true)}>Close</button>
                        </div>
                    </div>
                )
            ) : (
                null
            )}
            <table className='table-auto w-full'>
                <thead>
                    <tr>
                        <th className='p-2 bg-blue-800 border-b-2 border-black'>No</th>
                        <th className='bg-blue-800 border-b-2 border-black'>Report</th>
                        <th className='bg-blue-800 border-b-2 border-black'>Admin</th>
                        {user_role === "admin" ? (
                            <th className='bg-blue-800 border-b-2 border-black'></th>
                        ) : null
                        }
                        <th className='bg-blue-800 border-b-2 border-black'></th>
                        {user_role === "admin" ? (
                            <th className='bg-blue-800 border-b-2 border-black'></th>
                        ) : null
                        }
                    </tr>
                </thead>
                <tbody>
                    {reports?.map((item, id) => (
                        <tr key={id}>
                            <th className='p-3 bg-orange-300'>{id+1}</th>
                            <td className='bg-orange-300'>{item.description}</td>
                            <td className='bg-orange-300'>{item.admin}</td>
                            {user_role === "admin" ? (
                                <td className='bg-orange-300 text-center w-24'>
                                    <Link to={`/report/edit/${item.id}`}>
                                        <button className='bg-yellow-400 p-1 lg:px-6 rounded border border-black shadow-lg hover:bg-red-500'>edit</button>
                                    </Link>
                                </td>
                            ) : null
                            }
                            <td className='bg-orange-300 text-center w-24'>
                                <Link to={`/report/view/${item.id}`}>
                                    <button className='bg-green-400 p-1 lg:px-6 rounded border border-black shadow-lg hover:bg-blue-500'>view</button>
                                </Link>
                            </td>
                            {user_role === "admin" ? (
                                <td className='bg-orange-300 text-center w-20'>
                                    <button className='bg-red-100 rounded py-2 px-1 border border-black hover:bg-red-400' onClick={() => deleteHandler(item.id, item.name)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                        </svg>
                                    </button>
                                </td>
                            ) : null
                            }
                        </tr> 
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default ProjectTable