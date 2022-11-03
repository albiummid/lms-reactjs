import moment from 'moment'
import React from 'react'
import { Icons } from '../../../assets'

export default function AmolNama() {
  const { loginIcon, addIcon, watchIcon, replyIcon, bugIcon } = Icons.activity

  const activityIcons = {
    login: loginIcon.src,
    add: addIcon.src,
    watch: watchIcon.src,
    reply: replyIcon.src,
    bug: bugIcon.src,
  }
  const amolLogs = [
    {
      id: 1,
      activityType: 'login',
      description: 'You have logged in',
      timestamp: 1666710208048,
    },
    {
      id: 2,
      activityType: 'watch',
      description:
        'You have viewed Implementation :: Set Data (Key Value Pair)',
      timestamp: 1666710208048,
    },
    {
      id: 4,
      activityType: 'reply',
      description:
        'You have viewed Implementation :: Set Data (Key Value Pair)',
      timestamp: 1666710208048,
    },
    {
      id: 3,
      activityType: 'add',
      description: 'You have added your Facebook link',
      timestamp: 1666710208048,
    },
    {
      id: 4,
      activityType: 'bug',
      description: 'You have reported a bug called Video player Issue',
      timestamp: 1666725208048,
    },
    {
      id: 4,
      activityType: 'reply',
      description:
        'You have viewed Implementation :: Set Data (Key Value Pair)',
      timestamp: 1666710208048,
    },
    {
      id: 3,
      activityType: 'add',
      description: 'You have added your Facebook link',
      timestamp: 1666710208048,
    },
    {
      id: 4,
      activityType: 'bug',
      description: 'You have reported a bug called Video player Issue',
      timestamp: 1666725208048,
    },
    {
      id: 4,
      activityType: 'reply',
      description:
        'You have viewed Implementation :: Set Data (Key Value Pair)',
      timestamp: 1666710208048,
    },
    {
      id: 3,
      activityType: 'add',
      description: 'You have added your Facebook link',
      timestamp: 1666710208048,
    },
    {
      id: 4,
      activityType: 'bug',
      description: 'You have reported a bug called Video player Issue',
      timestamp: 1666725208048,
    },
    {
      id: 4,
      activityType: 'reply',
      description:
        'You have viewed Implementation :: Set Data (Key Value Pair)',
      timestamp: 1666710208048,
    },
    {
      id: 3,
      activityType: 'add',
      description: 'You have added your Facebook link',
      timestamp: 1666710208048,
    },
    {
      id: 4,
      activityType: 'bug',
      description: 'You have reported a bug called Video player Issue',
      timestamp: 1666725208048,
    },
    {
      id: 4,
      activityType: 'reply',
      description:
        'You have viewed Implementation :: Set Data (Key Value Pair)',
      timestamp: 1666710208048,
    },
    {
      id: 3,
      activityType: 'add',
      description: 'You have added your Facebook link',
      timestamp: 1666710208048,
    },
    {
      id: 4,
      activityType: 'bug',
      description: 'You have reported a bug called Video player Issue',
      timestamp: 1666725208048,
    },
    {
      id: 4,
      activityType: 'reply',
      description:
        'You have viewed Implementation :: Set Data (Key Value Pair)',
      timestamp: 1666710208048,
    },
    {
      id: 3,
      activityType: 'add',
      description: 'You have added your Facebook link',
      timestamp: 1666710208048,
    },
    {
      id: 4,
      activityType: 'bug',
      description: 'You have reported a bug called Video player Issue',
      timestamp: 1666725208048,
    },
  ]

  return (
    <div className=' divide-y max-h-[60vh] overflow-y-scroll '>
      {amolLogs.map((item) => (
        <div
          key={item.id}
          className='grid grid-cols-12 items-center md:py-6 py-2'
        >
          <div className='flex items-center space-x-4 col-span-8'>
            <img
              src={activityIcons[item.activityType]}
              className='w-6 h-6 md:w-12 md:h-12'
              alt=''
            />

            <p className='m-0 md:text-lg'>{item.description}</p>
          </div>
          <small className=' place-self-end col-span-4 '>
            {moment(item.timestamp).fromNow()}
          </small>
        </div>
      ))}
    </div>
  )
}
