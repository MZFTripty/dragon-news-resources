import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

export default function LatestNews() {
  return (
    <div className='flex gap-2 bg-base-300 p-2'>
      <p className='bg-[#D72050] text-white px-3 py-1'>Latest</p>
      <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
        <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium obcaecati porro expedita fugit facere, possimus rerum nam exercitationem molestiae, eaque architecto veniam maxime cumque dolorem.</Link>
        <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium obcaecati porro expedita fugit facere, possimus rerum nam exercitationem molestiae, eaque architecto veniam maxime cumque dolorem.</Link>
        <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium obcaecati porro expedita fugit facere, possimus rerum nam exercitationem molestiae, eaque architecto veniam maxime cumque dolorem.</Link>
      </Marquee>
    </div>
  )
}
