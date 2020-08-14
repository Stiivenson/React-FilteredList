import React from 'react';

import { useLocation } from 'react-router-dom';
import qs from 'query-string';

import { useSelector } from 'react-redux';

function Comments() {
  const { comments, areLoaded } = useSelector((state) => state.comment);
  const { search, filter } = useSelector((state) => state.filter);

  const commentsArray = comments
    .filter((comment) => {
      if (search === null) return comment;
      else if (comment.name.toLowerCase().includes(search.toLowerCase())) return comment;
    })
    .filter((comment) => {
      if (filter === null) return comment;
      else if (comment.email.includes(filter)) return comment;
    })
    .map((comment) => {
      return (
        <div className='Comment' key={comment.id}>
          <div className='Comment-Name'>{comment.name}</div>
          <div className='Comment-Email'>{comment.email}</div>
          <div className='Comment-Body'>{comment.body}</div>
        </div>
      );
    });

  return (
    <main className='CommentSection'>
      <div className='Container CommentSection-Container'>
        {areLoaded ? commentsArray : <div className='CommentSection-Empty'>No data loaded!</div>}
      </div>
    </main>
  );
}

export default Comments;
