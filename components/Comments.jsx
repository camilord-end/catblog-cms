import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className='bg-gray-900 opacity-80 shadow-lg rounded-lg p-8 pb-8 mb-8'>
          <h3 className='text-white text-xl mb-8 font-semibold border-b pb-4'>
            {comments.length}
            {comments.length == 1 ? ' Comment' : ' Comments'}
          </h3>
          {comments.map(({ createdAt, name, comment }) => (
            <div
              key={createdAt}
              className='text-white border-b border-gray-100 mb-4 pb-4'
            >
              <p className='mb-4'>
                <span className='font-semibold '>{name}</span>
                {' on '}
                {moment(createdAt).format('MMM DD, YYYY')}
              </p>
              <p className='whitespace-pre-line text-gray-200 w-full '>
                {parse(comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
