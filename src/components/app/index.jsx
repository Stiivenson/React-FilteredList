import React from 'react';

import { useDispatch } from 'react-redux';
import loadComments from '../../redux/actions/commentAction';

import Header from '../header';
import Navigation from '../navigation';
import Comments from '../comments';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadComments());
  });

  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Comments />
    </div>
  );
}

export default App;
