import { Link } from 'react-router-dom'
import React from 'react'
import { TbListDetails } from 'react-icons/tb'

export default function AssignmentCard({
  key,
  ticketNo = '393u8992',
  status = 'Not submitted',
  latestCommit = 1666878611165,
  title = 'This is a long long long title',
  formattedSubtitle = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolorem aliquid quo nihil laborum quidem, adipisci quasi mollitia voluptates id consequatur similique cum laboriosam, tenetur commodi asperiores doloremque suscipit nemo.`,
  recentReadStatus = false,
}) {
  return (
    <div className=' shadow-fb  rounded-lg divide-y bg-white relative'>
      <div className='flex justify-between items-center p-5'>
        <div>
          <h3 className=' font-bold text-gray-500 '>#{ticketNo}</h3>
          <h6 className='text-gray-400 '>Remaining 2 Days</h6>
        </div>
        <span className='text-green-400 border border-green-400 px-2'>
          {status}
        </span>
      </div>
      <div className='p-5 grid grid-cols-12 items-center justify-between pb-10'>
        <div className='col-span-10'>
          <h3 className='font-bold'>{title}</h3>
        </div>
        <div className='col-span-2  ml-auto rounded-full shadow-lg bg-gray-200 p-3 hover:3xl  cursor-pointer'>
          <Link className='' to={`/assignments/details/${ticketNo}/`}>
            <TbListDetails className=' text-gray-500  text-lg transition duration-150 ease-in-out ripple-surface-light ' />
          </Link>
        </div>
      </div>
    </div>
  )
}
