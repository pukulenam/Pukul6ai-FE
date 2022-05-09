import React from "react";
import { InlineWidget, CalendlyEventListener,  } from 'react-calendly';
import HistorySchedule from "./HistorySchedule";

function ScheduleMid({schedule, schedules}) {

    function handleSubmit(e) {
        

        // e.data.payload.event / invitee .uri
    }

    return (
        <React.Fragment>
            <div className='col-span-1 lg:col-span-12 flex flex-col items-center'>
                <h3>History Schedule</h3>
                <HistorySchedule schedule={schedules} />
            </div>

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