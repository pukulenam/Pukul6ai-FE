import React from 'react';

function VChart({progress}) {
    
    return (
        <div className='border-2 border-black'>
            <div className='h-5 text-center' style={{backgroundColor: "rgba(75, 192, 192, 1)", width: `${progress}%`}}>
                <p>{progress}%</p>
            </div>
        </div>
    )
}

export default VChart