import React from 'react'
import SocialLogin from '../SocialLogin'
import FindUs from '../FindUs'

export default function RightNavbar() {
  return (
    <div className='space-y-5'>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  )
}
