import React, { useState } from 'react'
import { BsReply } from 'react-icons/bs'
import PageWrapper from '../../../layouts/PageWrapper'
import Button from '../../../components/UI/Button'
import ThreadCard from '../../../components/page_components/Support/Cards/ThreadCard'
import ReplyTread from '../../../components/page_components/Support/ReplyTread'
import { useNavigate, useParams } from 'react-router-dom'

export default function TicketThreadsPage({}) {
  const navigate = useNavigate()
  const { ticketId } = useParams()

  const ticketDetails = {
    ticketNo: ticketId,
    title: 'Testing Title',
    status: 'Acknowledged',
    supportKind: 'Assignment',
    threads: [
      {
        sl: 1,
        commitId: 864097,
        title: 'This is a title',
        details: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, perspiciatis. Saepe quia libero porro? Voluptatem earum neque ipsam dolorum, consectetur voluptas reprehenderit magni? Labore, eligendi illo! Expedita eum iure porro?
    Sapiente corrupti dolor i`,
        status: 'Received',
        createdAt: 1666029657159,
        hash: 'xAVyc91e667e47e84508b62d2f52f547e841 ',
      },
      {
        sl: 21,
        commitId: 8264097,
        title: 'This is a title',
        details: 'Express JS server is not working. How can I start it again?',
        status: 'Complete',
        createdAt: 1666029657159,
        hash: 'xAVyc91e667e47e84508b62d2f52f547e841 ',
      },
      {
        sl: 18,
        commitId: 864097,
        title: 'This is a title',
        details: 'Dom is not changing after state changes .',
        status: 'Pending',
        createdAt: 1666029657159,
        hash: 'xAVyc91e667e47e84508b62d2f52f547e841 ',
      },
      {
        sl: 5,
        commitId: 864097,
        title: 'This is a title',
        details: 'Router is not rendering correct component !',
        status: 'Resolved',
        createdAt: 1666029657159,
        hash: 'xAVyc91e667e47e84508b62d2f52f547e841 ',
      },
    ],
  }
  const { ticketNo, title, status, supportKind, threads } = ticketDetails
  const [open, setOpen] = useState(false)
  return (
    <PageWrapper
      header={
        <div className=' grid grid-cols-12'>
          <h2 className=' text-gray-500 col-span-10'>
            #{ticketNo} | {title} |{' '}
            <span className=' bg-green-600 p-1 rounded-md text-white'>
              {status}
            </span>{' '}
            | {supportKind}
          </h2>

          <Button
            onClick={() => {
              setOpen(true)
            }}
            className='ml-auto col-span-2'
            variant={'green'}
            icon={<BsReply />}
          >
            Reply
          </Button>
        </div>
      }
    >
      <section className='space-y-4'>
        {threads?.map((item) => (
          <ThreadCard key={item.sl} {...item} />
        ))}
      </section>
      <ReplyTread {...{ open, setOpen }} />
    </PageWrapper>
  )
}
