import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from '../components/NewsCard';

export default function CategoryNews() {
    const {data: news} = useLoaderData();
    console.log(news)
  return (
    <div>
      <h2 className='font-semibold mb-3'>Dragon News Home</h2>
      <p className='text-gray-400 text-sm'>{news.length} News found on this category</p>
      <div>
        {
            news.map(singleNews=> (
                <NewsCard news={singleNews}></NewsCard>
            ))
        }
      </div>
    </div>
  )
}
