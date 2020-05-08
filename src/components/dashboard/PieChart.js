import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

import * as SC from './dashboard.styles';

import { usePrevious } from '../../lib/index';

let chartRef = createRef();
let myChart;

const PieChart = ({ spendingByCategory }) => {
  const prevValue = usePrevious(spendingByCategory);

  useEffect(() => {
    if (JSON.stringify(prevValue) !== JSON.stringify(spendingByCategory)) {
      if (myChart) myChart.destroy();
      const myChartRef = chartRef.current.getContext('2d');

      myChart = new Chart(myChartRef, {
        type: 'pie',
        data: {
          labels: Object.keys(spendingByCategory),
          datasets: [
            {
              label: 'expenditure',
              backgroundColor: ['#409EBF', '#2B4063', '#AAC4CF', '#8A2170', '#F2F1DF', '#613365', '#F2F2F2'],
              borderColor: '#613365',
              borderWidth: 2,
              data: Object.values(spendingByCategory),
            }
          ]
        },
        options: {
          legend: {
            position: "right"
          }
        }
      });
    }

    // eslint-disable-next-line
  }, [ spendingByCategory ]);

  return (
    <SC.PieChart.Wrapper>
      <SC.PieChart.Title>카테고리별 지출</SC.PieChart.Title>
      <canvas id='mychart' ref={chartRef} width='400' height='300' />
    </SC.PieChart.Wrapper>
  );
};

PieChart.propTypes = {
  spendingByCategory: PropTypes.object.isRequired
};

export default PieChart;
