// https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a
import React, { useEffect, createRef } from 'react';
import Chart from 'chart.js';

import * as SC from './dashboard.styles';

let chartRef = createRef();

const PieChart = () => {
  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: [ '숙박', '항공', '교통', '관광', '식비', '쇼핑', '기타' ],
        datasets: [
            {
              label: 'expenditure',
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(0, 0, 0)'],
              borderColor: 'rgb(0, 99, 132)',
              borderWidth: 2,
              data: [799000, 1234184, 50239, 230000, 100000, 493333, 0],
            }
        ]
      },
      options: {
        devicePixelRatio: 2
      }
    })
  }, []);

  return (
    <SC.PieChart.Wrapper>
      <SC.PieChart.Title>카테고리별 지출</SC.PieChart.Title>
      <canvas id='mychart' ref={chartRef} width='400' height='300' />
    </SC.PieChart.Wrapper>
  );
};

export default PieChart;
