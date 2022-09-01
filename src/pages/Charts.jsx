import React from 'react'
import Chart from "react-apexcharts";

const Charts = () => {
  var options = {
    series: [{
      name: "After",
      data: [9, 7.2, 3.5, 5.1, 4.9, 6.2, 6.9, 5.1, 2.8, 3.2]
  },
    {
      name: "Before",
      data: [8, 5.2, 2.5, 3.1, 1.9, 2.2, 4.9, 3.1, 1.8, 2.2]
    }
],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },

  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 1,
  },
  title: {
    text: 'Revenue',
    align: 'left'
  },
  // grid: {
  //   row: {
  //     // colors: ['#f3f3f3', 'transparent'],
  //     // opacity: 0.5
  //   },
  // },
  xaxis: {
    categories: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45'],
  },
  };



  return (
    <>
    <div className='flex flex-wrap justify-center w-auto m-10 rounded-lg items-cenetr '>
    <div className='flex flex-wrap p-4 m-2 bg-white rounded-lg'><Chart
    options={options}
    series={options.series}
    type={options.chart.type}
    width="500"
  ></Chart></div>
  </div>
</>  )
}

export default Charts