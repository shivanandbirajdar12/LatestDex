import React from 'react';
import DayWiseBarChart from './DayWiseBarChart';

const Maingraph = () => {
  const dayWiseData = [
    { day: 'Monday', value: 10 },
    { day: 'Tuesday', value: 20 },
    { day: 'Wednesday', value: 15 },
    { day: 'Thursday', value: 25 },
    { day: 'Friday', value: 18 },
    { day: 'Saturday', value: 30 },
    { day: 'Sunday', value: 22 }
  ];

  return (
    <div>
      <h1>Day-wise Data Bar Chart</h1>
      <DayWiseBarChart data={dayWiseData} />
    </div>
  );
};

export default Maingraph;
