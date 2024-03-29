import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className='text-center mt-4 mb-8 p-12 relative rounded-lg bg-gray-900 bg-opacity-80'>
      <div className='absolute left-0 right-8 -top-14'></div>
      <Image
        className='align-middle rounded-full'
        alt={author.name}
        height={100}
        width={100}
        src={author.photo.url}
      />
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-gray-100 text-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;
