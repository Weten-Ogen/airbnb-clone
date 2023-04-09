import React,{useState,useEffect} from 'react';
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
  return (
    <>
      <section className='barchart'>

      </section>
    </>
  )
}

export default BarChart
