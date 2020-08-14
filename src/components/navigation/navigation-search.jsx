import React from 'react';

import { useDispatch } from 'react-redux';
import { handleSearchInput } from '../../redux/actions/filterAction';

function Search() {
  const dispatch = useDispatch();

  const [input, setInput] = React.useState('');
  const handleInput = (value) => {
    setInput(value);
    dispatch(handleSearchInput(value));
  };

  return (
    <div className='Search'>
      <div className='Search-Title'>Search</div>
      <input className='Search-Input' type='text' placeholder='Enter name' value={input} onChange={(e) => handleInput(e.target.value)} />
    </div>
  );
}

export default Search;
