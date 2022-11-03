import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import PageWrapper from '../../layouts/PageWrapper'
import Countdown from '../../components/Countdown'

export default function ExamPage() {
  const exams = [
    {
      title: 'Dashboard with dynamic route',
      deadline: '22 Oct 2022',
      status: 'Active',
    },
    {
      title: 'MultiRole based authentication',
      deadline: '22 Oct 2022',
      status: 'Expired',
    },
    {
      title: 'Dashboard with dynamic route',
      deadline: '22 Oct 2022',
      status: 'Active',
    },
    {
      title: 'MultiRole based authentication',
      deadline: '22 Oct 2022',
      status: 'Expired',
    },
    {
      title: 'Dashboard with dynamic route',
      deadline: '22 Oct 2022',
      status: 'Active',
    },
    {
      title: 'MultiRole based authentication',
      deadline: '22 Oct 2022',
      status: 'Expired',
    },
    {
      title: 'ExpressJS Server with MongoDB',
      deadline: '22 Oct 2022',
      status: 'Active',
    },
  ]

  const expiredExams = exams.filter((i) => i.status === 'Expired')
  const upcomingExams = exams.filter((i) => i.status === 'Active')

  return (
    <PageWrapper header={'Exams | 2208-Undefeated '}>
      {/* <Countdown eventTime={'2022-12-15T09:00:00'} /> */}
      <div className=' grid md:grid-cols-2 gap-10'>
        <section className='shadow-fb rounded-md divide-y bg-white'>
          <div className=' p-5 '>
            <h1 className=' text-cyan-500 '>Upcoming Exams</h1>
          </div>

          <div className='p-5 h-full divide-y'>
            {upcomingExams.map((exam, key) => {
              return <ExamListItem key={key} {...exam} />
            })}
          </div>
        </section>
        <section className='shadow-fb rounded-md divide-y bg-white'>
          <div className=' p-5 '>
            <h1 className=' text-cyan-500 '>Expired Exams</h1>
          </div>

          <div className='p-5 h-full divide-y '>
            {expiredExams.map((exam, key) => {
              return <ExamListItem key={key} {...exam} />
            })}
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}

const ExamListItem = ({ title, status, deadline, key }) => {
  const navigate = useNavigate()
  return (
    <div key={key} className=' p-4 bg-white rounded-md'>
      <div className='grid grid-cols-6 '>
        <h4 className=' col-span-4 '>{title}</h4>
      </div>
      <div className='flex justify-between'>
        {status !== 'Expired' && (
          <Countdown eventTime={'2022-12-15T09:00:00'} />
        )}
        {/* <span className=' rounded-md text-red-400'>{deadline}</span> */}
        <AiOutlineArrowRight
          onClick={() => {
            navigate(`/exams/${key}`)
          }}
          size={20}
          className='text-red-400 cursor-pointer active:opacity-80 ml-auto'
        />
      </div>
    </div>
  )
}
