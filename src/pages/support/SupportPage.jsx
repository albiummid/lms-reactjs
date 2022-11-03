import PageWrapper from '../../layouts/PageWrapper'
import Button from '../../components/UI/Button'
import { BsChatDots } from 'react-icons/bs'

import TicketCard from '../../components/page_components/Support/Cards/TicketCard'
import { Pagination } from 'antd'
import { useState } from 'react'
import OpenNewTicket from '../../components/page_components/Support/OpenNewTicket'

export default function SupportPage() {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <PageWrapper
      header={
        <div className='flex justify-between items-center'>
          <h1 className='text-xl md:text-2xl'>Support Tickets</h1>
          <Button
            onClick={() => {
              setOpenDrawer(true)
            }}
            outline
            className={' ml-auto'}
            icon={<BsChatDots />}
            variant={'green'}
          >
            Create A Ticket
          </Button>
        </div>
      }
    >
      <>
        <div className=' space-y-4'>
          {tickets.map((ticket, key) => (
            <TicketCard {...ticket} key={key} />
          ))}
          <Pagination />
        </div>
      </>
      <OpenNewTicket {...{ openDrawer, setOpenDrawer }} />
    </PageWrapper>
  )
}

const tickets = [
  {
    sl: 1,
    ticketNo: 434532,
    title: 'This is a title of the ticket',
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, odit. Officia excepturi omnis amet labore facilis soluta totam nam error, perferendis ducimus, saepe voluptatibus adipisci molestiae, voluptatum praesentium voluptates? Blanditiis.`,
    status: 'Acknowledged',
    latestCommit: Date.now(),
    recentReadStatus: false,
  },
  {
    sl: 2,
    ticketNo: 434532,
    title: 'This is a title of the ticket',
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, odit. Officia excepturi omnis amet labore facilis soluta totam nam error, perferendis ducimus, saepe voluptatibus adipisci molestiae, voluptatum praesentium voluptates? Blanditiis.`,
    status: 'Acknowledged',
    latestCommit: Date.now(),
    recentReadStatus: true,
  },
  {
    sl: 3,
    ticketNo: 434532,
    title: 'This is a title of the ticket',
    subTitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit.s.`,
    status: 'Acknowledged',
    latestCommit: Date.now(),
    recentReadStatus: false,
  },
]
