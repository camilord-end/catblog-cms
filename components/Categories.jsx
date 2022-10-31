import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className='bg-gray-900 shadow-lg rounded-lg p-6 mb-4 pb-6 opacity-80'>
      <h3 className='text-white text-xl mb-4 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='text-white px-4 py-2 cursor-pointer rounded-full flex transition duration-500 transform hover:bg-black hover:opacity-100'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
