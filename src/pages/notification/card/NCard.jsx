import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../../assets'

export default function NCard({
  title,
  timestamp = 1667919164863,
  url = '/',
  unread,
  icon = Icons.notification,
}) {
  return (
    <Link to={url}>
      <div
        className={`p-5 bg-white items-center space-x-6 shadow-fb rounded-lg flex relative border-2 ${
          unread ? 'border-red-400' : 'border-white'
        }`}
      >
        <img src={icon} className='w-20' alt='' />

        <div>
          <small className='text-black ml-auto justify-end'>
            {moment(timestamp).fromNow()}
          </small>
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  )
}
