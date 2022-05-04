import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({complete, ongoing}) {
    const data = {
        labels: ['Completed', 'On Going'],
        datasets: [
            {
                label: "status",
                data: [complete, ongoing],
                backgroundColor: [
                    'rgba(74, 182, 255, 0.2)',
                    'rgba(0, 255, 127, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
            }
        ]
    }

    return (
        <div className=''>
            <Doughnut data={data} options={{responsive: true}} />
        </div>
    )
}

export default Chart