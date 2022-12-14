import React from 'react'
import { Link } from 'react-router-dom'
const routeList = [
  { title: 'Course/:courseId', url: 'course/1/' },
  { title: 'Leaderboard', url: 'course/1/leader_board' },
  {
    title: 'Assignments',
    url: '/assignments',
  },
  {
    title: 'Assignments/Details/[AssignmentID]',
    url: '/assignments/details/1',
  },
  {
    title: 'Bugs',
    url: '/bugs',
  },
  {
    title: 'Bugs/Reports',
    url: '/bugs/reports',
  },
  {
    title: 'Community',
    url: '/community',
  },
  {
    title: 'Exams ',
    url: '/exams ',
  },
  {
    title: 'Exams/[ExamID] ',
    url: 'exams/1 ',
  },
  {
    title: 'Profile ',
    url: '/profile ',
  },
  {
    title: 'Support ',
    url: '/support ',
  },
  {
    title: 'Support/Tickets/[TicketID] ',
    url: '/support/tickets/1 ',
  },
]
export default function Index() {
  return (
    <main className=' min-h-screen grid md:grid-cols-2 justify-center m-10 gap-4'>
      <div>
        <h3>Welcome to LMS UI! </h3>
        <p className=''>This site under maintenance</p>
      </div>
      <div>
        <h1>Route List</h1>
        <div className=' space-y-2 mt-6 overflow-y-auto h-[50vh]'>
          {routeList?.map((item, key) => (
            <Link
              className=' hover:shadow-fb bg-white cursor-pointer p-2 block '
              key={key}
              to={item.url}
            >
              {key + 1}. {item.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
