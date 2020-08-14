import React from 'react';

import Search from './navigation-search';
import Filter from './navigation-filter';

function Navigation() {
  return (
    <div className='Navigation'>
      <div className='Container Navigation-Container'>
        <Search />
        <Filter />
      </div>
    </div>
  );
}

export default Navigation;
