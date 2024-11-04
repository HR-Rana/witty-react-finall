import React from 'react'

export default function MemberCards({image, name, title, fb, linkedin, bio, insta, vimeo}) {
  return (
    <div className='card-container'>
        <div className="">
            <img src={image} alt="member" />
        </div>
    </div>
  )
}
