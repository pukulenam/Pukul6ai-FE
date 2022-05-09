import React from "react";

function HistorySchedule({schedule}) {

    console.log(schedule)

    return (
        <React.Fragment>            
            <table className='table-auto w-full'>
                <thead>
                    <tr>
                        <th className='p-2 bg-blue-800 border-b-2 border-black'>No</th>
                        <th className='bg-blue-800 border-b-2 border-black'>Name</th>
                        <th className='bg-blue-800 border-b-2 border-black'>adminid</th>
                        <th className='bg-blue-800 border-b-2 border-black'>userid</th>
                        <th className='bg-blue-800 border-b-2 border-black'>At Time</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule?.map((item, id) => (
                        <tr key={id}>
                            <th className='p-3 bg-orange-300'>{id+1}</th>
                            <td className='bg-orange-300'>{item.name}</td>
                            <td className='bg-orange-300'>{item.adminid}</td>
                            <td className='bg-orange-300'>{item.userid}</td>
                            <td className='bg-orange-300'>{item.time}</td>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default HistorySchedule