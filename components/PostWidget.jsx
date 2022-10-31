import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

import { getRecentPosts, getSimilarPosts } from '../services/index';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug, categories]);

  return (
    <div className='text-white bg-gray-900 shadow-lg rounded-lg p-6 mb-8 opacity-80'>
      <h3 className='text-white text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <Link
          href={`/post/${post.slug}`}
          key={post.title}
          className='bg-white text-sm'
        >
          <div
            key={post.title}
            className='flex items-center transform transition duration-500 p-2 rounded-full w-full cursor-pointer hover:bg-black hover:opacity-80'
          >
            <div className='w-16 flex-none'>
              <Image
                alt={post.title}
                height='60px'
                width='60px'
                className='align-middle rounded-full'
                src={post.featuredImage.url}
              />
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-100 text-xs'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link
                href={`/post/${post.slug}`}
                key={post.title}
                className='bg-white text-sm'
              >
                {post.title}
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
