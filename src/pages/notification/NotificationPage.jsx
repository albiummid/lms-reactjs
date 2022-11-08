import React from 'react'
import PageWrapper from '../../layouts/PageWrapper'
import NCard from './card/NCard'

export default function NotificationPage() {
  const notifications = [
    {
      title: 'Hello User ! Your first notification is  here !',
      url: '/',
      unread: true,
      timestamp: 1667919164863,
    },
    {
      title: 'New Video uploaded , check fast !',
      url: '/',
      unread: false,
      timestamp: 1667919164863,
    },
    {
      title:
        'Your last assignment result published ! Your lasaaaat assignment result published Your last assignment result published Your last assignment result published Your last assignment result published ',
      url: '/',
      unread: true,
      timestamp: 1667919164863,
    },
    {
      title: 'New module released !',
      url: '/',
      unread: false,
      timestamp: 1667919164863,
    },
  ]
  return (
    <PageWrapper header={'Notifications'}>
      <section className='grid gap-4'>
        {notifications.map((nfn, key) => {
          return <NCard key={key} {...nfn} />
        })}
      </section>
    </PageWrapper>
  )
}
