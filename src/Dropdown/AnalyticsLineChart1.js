// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { LineChartData } from './DummyData1'; // Assuming you have data for the line chart

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const AnalyticsLineChart1 = () => {
//     const options = {
//         animation:{
//             x:{
//                 duration:15000,
//                 from:0
//             }
//            },
//         tension: 0.4, 
//         scales: {
//             y: {
//                 display: true,
//                 grid: {
//                     display: true
//                 }
//             },
//             x: {
//                 display: true,
//                 grid: {
//                     display: false,
//                 },
//                 ticks: {
//                     display: true
//                 }
//             }
//         },
//         plugins: {
//             tooltip: {
//                 callbacks: {
//                     label: function (context) {
//                         var label = context.dataset.label || '';
//                         if (label) {
//                             label += ': ';
//                         }
//                         label += context.parsed.y;
//                         return label;
//                     }
//                 }
//             },
//             legend: {
//                 position: 'top',
//                 align: 'end',
//                 labels:{
//                     boxWidth:15,
//                     borderRadius: 99
//                 }
//             },
//         },
//         responsive: true,
//         maintainAspectRatio: false
//     };

//     return (
//         <div style={{ height: '200px' }}>
//             <Line options={options} data={LineChartData} />
//         </div>
//     );
// }

// export default AnalyticsLineChart1;
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
   
    animation: {
        x: {
            duration: 15000,
            from: 0
        }
    },
    tension: 0.4,
    scales: {
        y: {
            display: true,
            grid: {
                display: true
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
            labels: {
                boxWidth: 15,
                borderRadius: 99
            }
        },
    },
    responsive: true,
    maintainAspectRatio: false
};



const AnalyticsLineChart1 = () => {
    const [data, setdata] = useState({
        labels: [
            "Monday",
            "Tuesday",
            "Wensday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"

        ],
        datasets: [
            {
                label: "V2",
                data: [],
                hoverBackgroundColor: 'purple',
                backgroundColor: 'rgb(33, 114, 229) ',

            }

        ],
    });


    useEffect(() => {
        const fetchData = () => {
            const url = 'https://jsonplaceholder.typicode.com/comments'
            const dataset = [];
            fetch(url, {
                method: 'GET'
            }).then(data => {
                console.log("apidata", data);
                const res = data.json()
                return res
            }).then((res) => {
                console.log("ress", res);
                for (const val of res) {
                    dataset.push(val.id);
                }

                setdata(
                    {
                        labels: [
                            "Monday",
                            "Tuesday",
                            "Wensday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                            "Sunday"
                
                        ],
                        datasets: [
                            {
                                label: "V2",
                                data: dataset,
                                hoverBackgroundColor: 'purple',
                                backgroundColor: 'rgb(33, 114, 229) ',
                
                            }
                
                        ],
                    }
                )
                console.log("age", dataset);
            }).catch(e => {
                console.log("error");
                })
        }
        fetchData();
    }, [])



    return (
        <div style={{ height: '200px' }}>
            <Line options={options} data={data} />
        </div>
    );
}

export default AnalyticsLineChart1;
