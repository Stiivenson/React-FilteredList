import React from 'react';

import qs from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { handleFilterSelect } from '../../redux/actions/filterAction';
import useQueryString from './hooks/useQueryString';

export const FilterButtons = (props) => {
  const dispatch = useDispatch();
  const [value, onSetValue] = useQueryString('filter');

  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    let { filter } = qs.parse(location.search, { ignoreQueryPrefix: true });
    console.log(filter);
    filter === undefined ? dispatch(handleFilterSelect('')) : dispatch(handleFilterSelect(filter));
  });

  const handleClick = (newType) => {
    if (newType === value) {
      onSetValue('');
      history.push({ search: '?filter=' });
      dispatch(handleFilterSelect(''));
    } else {
      onSetValue(newType);
      history.push({ search: `?filter=${newType}` });
      dispatch(handleFilterSelect(newType));
    }
  };

  const buttons = props.children.filter((button) => typeof button === 'string');
  console.log(buttons);

  return (
    <ul className='Filter-Buttons'>
      {buttons.map((button) => (
        <li key={button} onClick={() => handleClick(button)} className={value === button ? 'Filter-Button-active ' : ''}>
          {button}
        </li>
      ))}
    </ul>
  );
};
