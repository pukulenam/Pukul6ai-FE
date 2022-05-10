import axios from "axios";
import React, { useState } from "react";
import { InlineWidget, CalendlyEventListener,  } from 'react-calendly';
import HistorySchedule from "./HistorySchedule";
import { useSelector } from 'react-redux';

function ScheduleMid({schedule, schedules}) {

    const [refresh, setRefresh] = useState(false);
    const userid = useSelector(state => state.data.datas.id);

    function handleSubmit(e) {
        e.preventDefault();

        const event = e.data.payload.event.uri;
        // e.data.payload.event / invitee .uri
        axios.post(`http://localhost:8000/api/schedule`, {userid: userid, time: event}, {headers: {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`}})
        .then(res => {
            setRefresh(true);
        })
    }


    return (
        <React.Fragment>
            <div className='col-span-1 lg:col-span-12 flex flex-col items-center'>
                <h3>History Schedule</h3>
                <HistorySchedule schedule={schedules ? schedules : schedule} />
            </div>

            {refresh ? (
                <div className='col-span-1 lg:col-span-12 items-center'>
                    <button className="animate-fadein bg-green-400 p-1 lg:px-6 rounded border border-black shadow-lg hover:bg-blue-500" onClick={() => window.location.reload()}>Refresh</button>
                </div>
            ) : (
                null
            )}

            <div className='col-span-1 lg:col-span-12 items-center'>
                <h3>Add Schedule</h3>
                <InlineWidget
                    url="https://calendly.com/vincentiusarnoldfridolin" 
                    rootElement={document.getElementById("root")} 
                />

                <CalendlyEventListener onEventScheduled={handleSubmit} />
            </div>
        </React.Fragment>
    )
}

export default ScheduleMid;