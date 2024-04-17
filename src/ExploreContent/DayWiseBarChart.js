// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const DayWiseBarChart = ({ data }) => {
//   // Assuming data is an array of objects like [{ day: 'Monday', value: 10 }, { day: 'Tuesday', value: 20 }, ...]

//   // Extracting labels and values from data
//   const labels = data.map(item => item.day);
//   const values = data.map(item => item.value);

//   // Configuring the chart data
//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Day-wise Data',
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 1,
//         data: values
//       }
//     ]
//   };

//   // Configuring chart options
//   const chartOptions = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true
//           }
//         }
//       ]
//     }
//   };

//   return (
//     <div>
//       <Bar
//         data={chartData}
//         options={chartOptions}
//       />
//     </div>
//   );
// };

// export default DayWiseBarChart;
