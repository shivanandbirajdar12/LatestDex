import React from 'react'
import { Bar } from 'react-chartjs-2'
import { BarChartData } from './DummyData2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
   
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    
);

const AnlyaticsBarchart2 = () => {
    const options = {
        barThickness: 30,
        barPercentage:  0.9,
        categoryPercentage:  0.8,
        borderSkipped: false,
        borderColor: "rgb(75,192,192)",
        borderWidth: 1,
        hindeLegendAndTooltip:false,
        borderRadius:8,
      
        scales: {
            y: {
                display: false,
                grid: {
                    display: false
                }
            },
            x: {
                display: true,
                grid: {
                    display: false,
                },
                ticks: {
                    display: true
                }
            }
        },

        responsive: true,
        maintainAspectRatio: false
    };

   
    return (
        <div style={{ height: '250px',width:'100%'} }>
            <Bar options={options} data={BarChartData} />
        </div>
    );
}

export default AnlyaticsBarchart2;
