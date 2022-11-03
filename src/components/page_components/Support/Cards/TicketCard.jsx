import moment from 'moment'
import React, { useState } from 'react'
import { BsChatRightText } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function TicketCard({
  ticketNo,
  title,
  subTitle,
  latestCommit,
  recentReadStatus,
}) {
  const formattedTitle = title.length > 50 ? title.substr(0, 50) + '...' : title
  const formattedSubtitle =
    subTitle?.length > 100 ? subTitle?.substr(0, 100) + '...' : subTitle
  return (
    <div className=' shadow-fb  rounded-lg divide-y bg-white relative'>
      <div className='flex justify-between items-center p-5'>
        <h3 className=' font-bold text-gray-500 '>#{ticketNo}</h3>
        <h6 className='text-gray-400 '>{moment(latestCommit).fromNow()}</h6>
      </div>
      <div className='p-5 grid grid-cols-12 items-center justify-between pb-10'>
        <div className='col-span-10'>
          <h3 className='font-bold'>{formattedTitle}</h3>
          <div className='border-[5px] border-l-gray-400 border-t-0 border-r-0 border-b-0 mt-3  p-5 py-1  '>
            <p
              className={`${recentReadStatus ? 'font-bold ' : 'text-gray-500'}`}
            >
              {formattedSubtitle}
            </p>
          </div>
        </div>
        <div className='col-span-2  ml-auto rounded-full shadow-lg bg-gray-200 p-3 hover:3xl  cursor-pointer'>
          <Link className='' to={`/support/tickets/${ticketNo}/`}>
            <BsChatRightText className=' text-gray-500  text-lg transition duration-150 ease-in-out ripple-surface-light ' />
          </Link>
        </div>
      </div>
    </div>
  )
}
