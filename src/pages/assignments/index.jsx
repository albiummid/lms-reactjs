import React from 'react'
import CoursePageLayout from '../../layouts/CoursePageLayout'

import AssignmentCard from './AssignmentCard'
export default function Assignments() {
  const assignments = [
    {
      title: 'T20 Score Board Updater',
      deadline: '22 Oct 2022',
      status: 'Active',
    },

    {
      title: 'T20 Score Board Updater',
      deadline: '22 Oct 2022',
      status: 'Active',
    },
    {
      title: 'T20 Score Board Updater',
      deadline: '22 Oct 2022',
      status: 'Active',
    },
    {
      title: 'T20 Score Board Updater',
      deadline: '22 Oct 2022',
      status: 'Active',
    },
    {
      title: 'T20 Score Board Updater',
      deadline: '22 Oct 2022',
      status: 'Active',
    },
  ]

  return (
    <CoursePageLayout header={'Assignments '}>
      <div className=' space-y-2 '>
        {assignments.map((item, key) => (
          <AssignmentCard key={key} {...item} />
        ))}
      </div>
    </CoursePageLayout>
  )
}
