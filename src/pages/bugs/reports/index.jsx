import React, { useState } from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import Button from '../../../components/UI/Button'
import { CgDetailsMore } from 'react-icons/cg'
import { Badge, Pagination } from 'antd'
import moment from 'moment'
import ReportBug from './ReportBug'

export default function BugReportsPage() {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <PageWrapper
      header={
        <div className='flex justify-between items-center'>
          <h1 className='text-xl md:text-2xl'>Bug Reports</h1>
          <Button
            onClick={() => {
              setOpenDrawer(true)
            }}
            className={' ml-auto'}
            icon={<CgDetailsMore />}
            variant={'blue'}
            outline
          >
            Report a bug
          </Button>
        </div>
      }
    >
      <>
        <div className=' space-y-4'>
          {bugs.map((bug, key) => (
            <Badge.Ribbon text={bug.status} key={key}>
              <div className='  bg-white p-4 rounded-md relative'>
                <div className=' pt-4 flex items-center justify-between'>
                  <span>#{bug.bugId}</span>
                </div>
                <h1 className=' text-lg md:text-xl'>{bug.title}</h1>
                <p>{bug.description}</p>
                <small className=' absolute right-4 bottom-4'>
                  {moment(bug.timestamp).fromNow()}
                </small>
              </div>
            </Badge.Ribbon>
          ))}
          <Pagination />
        </div>
      </>
      <ReportBug {...{ openDrawer, setOpenDrawer }} />
    </PageWrapper>
  )
}

const bugs = [
  {
    id: 1,
    bugId: 434532,
    title: 'This is a bug title',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, odit. Officia excepturi omnis amet labore facilis soluta totam nam error, perferendis ducimus, saepe voluptatibus adipisci molestiae, voluptatum praesentium voluptates? Blanditiis.`,
    status: 'Acknowledged',
    timestamp: Date.now(),
  },
  {
    id: 2,
    bugId: 434532,
    title: 'This is a bug title',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, odit. Officia excepturi omnis amet labore facilis soluta totam nam error, perferendis ducimus, saepe voluptatibus adipisci molestiae, voluptatum praesentium voluptates? Blanditiis.`,
    status: 'Acknowledged',
    timestamp: Date.now(),
  },
  {
    id: 3,
    bugId: 434532,
    title: 'This is a bug title',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.s.`,
    status: 'Acknowledged',
    timestamp: Date.now(),
  },
]
