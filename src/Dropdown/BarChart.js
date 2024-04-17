// import React from 'react'
// import { Bar } from 'react-chartjs-2'
// import { BarChartData } from './DummyData';

// import {
//     Chart as ChartJS,
//         CategoryScale, LinearScale, PointElement,  BarElement,Title ,
// } from 'chart.js'

// ChartJS.register(
//     CategoryScale, LinearScale, PointElement, BarElement,Title 
// );
// const BarChart = () => {
//     const options={
//         barThickness: 30, 
//         barPercentage: window.innerWidth < 600 ? 0.6 : 0.9, // Adjust bar width dynamically based on screen size
//         categoryPercentage: window.innerWidth < 600 ? 0.5 : 0.8, // Adjust category width dynamically based on screen size
//         borderSkipped:false,borderColor:"rgb(75,192,192)",
//         backgroundColor:'hotpink',
//         borderWidth:1,
//         borderRadius:99,
//         hoverOffset:50,
//         scales: {
//             y: { display: false,
//                 grid: {
//                     display: false 
//                 }
//             },
//             x: { 
//                 display: true,
//                 grid: {
//                     display: false 
//                 },
//                 ticks: {
//                     display: true 
//                 }
//             }
//         }, responsive: true, 
  
//     maintainAspectRatio: false 
        
//     };
//     return (
//         <div style={{height:'300px'}}>
//         <Bar options={options} data={BarChartData}/></div>
//     )
// }

// export default BarChart
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { BarChartData } from './DummyData';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const options = {
        barThickness: 30,
        barPercentage:  0.9,
        categoryPercentage:  0.8,
        borderSkipped: false,
        borderColor: "rgb(75,192,192)",
      
        borderWidth: 1,
        borderRadius: 99,
        hoverOffset: 50,
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

        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        var label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.parsed.y;
                        return label;
                    }
                }
            },
            legend: {
                position: 'top',
                align: 'end',
                labels:{
                    boxWidth:15,
                    borderRadius: 99
                }
            },
        },
        responsive: true,
        maintainAspectRatio: false
    };

   
    return (
        <div style={{ height: '300px' }}>
            <Bar options={options} data={BarChartData} />
        </div>
    );
}

export default BarChart;
