import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

const posts = [
  {
    title: 'Cat Testing',
    exerpt: 'Learn how to love cats',
  },
  {
    title: 'Cat Testing #2',
    exerpt: 'Learn how to love cats again',
  },
]

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>CMS Cat Blog</title>
        <meta name='description" content="Generated by create next app' />
        <link rel='icon" href="/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard key={post.title} post={post} />)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
