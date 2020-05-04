import React from 'react';
import Scrollable from '../layout/Scrollable';

import { iconsByName } from './categoryIcon';

import { numberWithCommas } from '../../lib/index';

import * as SC from './dashboard.styles';

const Summary = ({
  spendingByDates,
  onSpendingListClick
}) => (
  <Scrollable>
    {Object.entries(spendingByDates).map(([day, spendingData]) => (
      <SC.Summary.ByDates key={day}>
        <h1>{day}</h1>
        {spendingData.map((spending, idx) => {
          const { category, description, amount, location: { title }, spendingId } = spending;

          return (
            <SC.Summary.List key={idx} data-id={spendingId} onClick={() => onSpendingListClick(day, spendingId)}>
              <SC.Summary.Icon>
                <img src={iconsByName[category]} alt={category} />
              </SC.Summary.Icon>
              <SC.Summary.Description>
                <div>
                  <h5 className='description'>{description}</h5>
                  <h5 className='amount'>{`₩ ${numberWithCommas(amount)}원`}</h5>
                </div>
                <h6 className='location-title'>{title}</h6>
              </SC.Summary.Description>
            </SC.Summary.List>
          );
        })}
      </SC.Summary.ByDates>
    ))}
  </Scrollable>
);

export default Summary;

// const dates = {
//   "출발 전": [
//     {
//       "category": "항공",
//       "description": "항공권 구매",
//       "amount": 984000,
//       "location": {
//         "title": "출발 전",
//         "coordinates": ""
//       },
//       "memo": "항공권 구매"
//     },
//     {
//       "category": "숙박",
//       "description": "에어비앤비 숙소 구매",
//       "amount": 75558,
//       "location": {
//         "title": "출발 전",
//         "coordinates": ""
//       },
//       "memo": "에어비앤비 숙소 구매"
//     }
//   ],
//   "2020-05-19(화)": [
//     {
//       "category": "식비",
//       "description": "점심",
//       "amount": "10",
//       "location": {
//         "title": "Starbucks, 브로드웨이 뉴욕 United States",
//         "coordinates": {
//           "lat": 40.759636,
//           "lng": -73.985222
//         }
//       }
//     }
//   ],
//   "2020-05-20(수)": [
//     {
//       "category": "식비",
//       "description": "저녁식사",
//       "amount": 24500,
//       "location": {
//         "title": "Superior, 위스콘신 미국",
//         "coordinates": {
//           "lat": 46.7207737,
//           "lng": -92.10407959999999
//         }
//       }
//     }
//   ]
// }


