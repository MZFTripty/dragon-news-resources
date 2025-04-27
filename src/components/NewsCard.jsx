import React from 'react'
import { FaEye, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
//import { FaEye, FaStar } from "react-icons/fa";

export default function NewsCard({ news }) {
    console.log(news)
    return (
        <div className="card w-full bg-white shadow-xl rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
                <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <h2 className="text-sm font-semibold">{news.author.name}</h2>
                    <p className="text-xs text-gray-500">{new Date(news.author.published_date).toDateString()}</p>
                </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{news.title}</h3>
            <img
                src={news.thumbnail_url}
                alt="Thumbnail"
                className="w-full h-72 object-cover rounded-lg mb-2"
            />
            <p className="text-sm text-gray-600 line-clamp-2">{news.details.slice(0,150)}...{" "}
                <Link to={`/news/${news._id}`} className='text-primary'>Read More</Link>
            </p>
            <div className="flex justify-between items-center mt-3 text-gray-600">
                <div className="flex items-center gap-1 text-orange-500">
                    <FaStar />
                    <span className="text-sm font-semibold">{news.rating.number} ({news.rating.badge})</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span className="text-sm">{news.total_view}</span>
                </div>
            </div>
        </div>
    )
}
