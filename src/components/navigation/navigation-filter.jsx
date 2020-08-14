import React from 'react';

import { FilterButtons } from './filter-buttons';

function Filter() {
  const buttons = ['.org', '.com', '.biz'];

  return (
    <div className='Filter'>
      <div className='Filter-Title'>Show only</div>
      <FilterButtons children={buttons} />
    </div>
  );
}

export default Filter;
