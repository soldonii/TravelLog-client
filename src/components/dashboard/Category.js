import React from 'react';
import PropTypes from 'prop-types';

import { icons } from './categoryIcon';

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

Category.propTypes = {
  chosen: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Category;
