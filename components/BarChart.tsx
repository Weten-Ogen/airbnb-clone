"use client"

import React,{useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import {
    Chart as chartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Title,
    Legend

} from 'chart.js';


chartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Title,
    Legend
);

type ChartProps = {
  labels:string[],
  datasets:{
    label:string,
    data: number[],
    borderColor:string,
    backgroundColor:string,

  },
}

const BarChart = () => {
  const [chartData, setChartData] = useState<{}>({
  });
  
  const [chartOptions, setChartOptions] = useState<{}>({});

  useEffect(() => {
    setChartData({
      labels:['Mon','Tues','Weds','Thurs','Fri','Sat',
    'Sun'],
    datasets:[{
        label:'Sale $',
        data:[18127,22201,19490, 17938,24182,17842,22475],
        borderColor: 'rgb(53,162,235)',
        backgroundColor: 'rgb(53,162,235,0.4',
      }]
    })
    
  setChartOptions({
    plugins:{
      legend:{
        position: 'top',
      },
      title:{
        display: true,
        text: 'Daily Revenue',
      }
    },
    maintainAspectRatio:false,
    responsive: true

  })
      
},[])

  return (
    <>
      <section className='barchart'>
        <Bar data={chartData} options={chartOptions}/>
      </section>
    </>
  )
}

export default BarChart
