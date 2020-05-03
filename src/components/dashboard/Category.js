import React from 'react';

import icons from './categoryIcon';

const Category = ({
  chosen,
  onClick
}) => (
  Object.values(icons).map(({ icon, name }) => (
    <div key={name} className='icon' onClick={() => onClick(name)}>
      <img className={chosen === name ? 'active-icon' : ''} src={icon} alt='icon'/>
      <p className={chosen === name ? 'active-name' : ''}>{name}</p>
    </div>
  ))
);

export default Category;
