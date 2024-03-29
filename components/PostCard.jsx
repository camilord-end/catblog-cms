import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post }) => {
  return (
    <div className='bg-gray-900 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 opacity-80 text-white'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <Image
          priority
          src={post.featuredImage.url}
          alt={post.title}
          className='object-center absolute w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
          layout='fill'
        />
      </div>
      <h1
        className='transition duration-1000 text-center mb-8 cursor-pointer 
        hover:text-pink-600 text-3xl font-semibold'
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full '>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <Image
            src={post.author.photo.url}
            alt={post.author.name}
            height={40}
            width={40}
            className='align-middle rounded-full'
          />
          <p className='inline align-middle text-gray-100 ml-2 text-lg'>
            {post.author.name}
          </p>
        </div>
        <div className='font-medium text-gray-200 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 inline mr-2 text-pink-500'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
          <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-300 font-normal px-4 lg:px-20 mb-8'>
        {post.excerpt}
      </p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='text-pink-900 opacity-100 font-semibold transition duration-500 transform hover:-translate-y-1 hover:text-pink-600 inline-block bg-gray-300 text-lg rounded-full px-8 py-3 cursor-pointer'>
            Read More
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
