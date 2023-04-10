import React,{useState,useEffect} from 'react';
// import {Bar} from 'react-chartjs-2';
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


const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets:[],
  });
  const [chartOptions, setChartOptions] = useState({});

  // useEffect(() =>{
  //   setChartData({
  //     labels:['Mon','Tue','Wed','Thurs','Fri','Sat','Sun'],
  //     datasets:[
  //       {label: 'Sales $',
  //         data::[18127,22201,19490,17938,241842,22475],
  //         borderColor: 'rgb(53,162,233)',
  //         backgroundColor: 'rgb(53,162,233,0.4)'
  //   }]}
  // )
  // setChartOptions({
  //   plugins:{
  //     legend:{
  //       position: 'top',
  //     },
  //     title:{
  //       display: true,
  //       text: 'Daily Revenue',
  //     }
  //   },
  //   maintainAspectRatio:false,
  //   responsive: true

  // })
      
  // })

  return (
    <>
      <section className='barchart'>
        {/* <Bar data={chartData} options={chartOptions}/> */}
      </section>
    </>
  )
}

export default BarChart
