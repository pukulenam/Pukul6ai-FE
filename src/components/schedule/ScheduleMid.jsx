import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { InlineWidget, CalendlyEventListener,  } from 'react-calendly';

function ScheduleMid() {

    function handleSubmit(e) {
        console.log(e);

        // e.data.payload.event / invitee .uri
    }

    return (
        <React.Fragment>
            <div className='col-span-1 lg:col-span-12 flex flex-col items-center'>
                <Calendar />
            </div>

            <div className='col-span-1 lg:col-span-12 items-center'>
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