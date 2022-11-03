import moment from 'moment'
import React from 'react'
import { FcAlarmClock } from 'react-icons/fc'

export default function WLCard({
  timestamp = 1666708868080,
  title = 'Implementation :: Set Data (Key Value Pair)',
  section = 'Hash Table / Hash Map',
  topic = 'Data Structures in Javascript',
}) {
  return (
    <div className='shadow-3xl p-4 rounded-md'>
      <div className='flex items-center space-x-2'>
        <FcAlarmClock className='text-red-400' />
        <span>{moment(timestamp).fromNow()}</span>
      </div>
      <h1 className='md:text-2xl text-lg'>{title}</h1>

      <h2 className='md:text-xl'>{section}</h2>

      <h3 className='md:text-lg text-sm'>{topic}</h3>
    </div>
  )
}
