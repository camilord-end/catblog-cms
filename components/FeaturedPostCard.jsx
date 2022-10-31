import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className='relative h-44 select-none opacity-100'>
    <div
      className='absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-44'
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className='absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-44' />
    <div className='flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full'>
      <p className='text-white mb-4 text-shadow font-semibold text-xs'>
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className='text-white mb-4 text-shadow font-semibold text-2xl text-center'>
        {post.title}
      </p>
      <div className='flex items-center absolute bg-gray-900 bottom-5 p-2 rounded-full justify-center opacity-70'>
        <Image
          alt={post.author.name}
          height='30px'
          width='30px'
          className='align-middle drop-shadow-lg rounded-full'
          src={post.author.photo.url}
        />
        <p className='opacity-100 inline align-middle text-white text-shadow ml-2 font-medium'>
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className='cursor-pointer absolute hover:bg-slate-900 hover:opacity-10 rounded-lg w-full h-full' />
    </Link>
  </div>
);

export default FeaturedPostCard;
