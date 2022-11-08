import React from 'react'
import { Images } from '../../assets'
import PageWrapper from '../../layouts/PageWrapper'
import CourseCard from './cards/CourseCard'

export default function Home() {
  const enrolledCourses = [
    {
      id: 1,
      title:
        'Job Grade Frontend Engineering in React Ecosystem by Istiaq Hasan',
      type: 'Bootcamp',
      instructor: 'Istiaq Hasan & Team',
      batch: 'The Undefeated',
      call_sign: 'FE102208',
      learner_id: 'FE10220845',
      cover_image: Images.courses.nextJSCourse,
    },
    {
      id: 2,
      title: 'Redux Toolkit & Recoil Master Class',
      type: 'Workshop',
      instructor: 'Istiaq Hasan & Team',
      batch: 'The Undefeated',
      call_sign: 'FE102208',
      learner_id: 'FE10220845',
      cover_image: Images.courses.nextJSCourse,
    },
    {
      id: 3,
      title: "Mongoose's real application in DB",
      type: 'Workshop',
      instructor: 'Istiaq Hasan & Team',
      batch: 'The Undefeated',
      call_sign: 'FE102208',
      learner_id: 'FE10220845',
      cover_image: Images.courses.nextJSCourse,
    },
  ]
  return (
    <PageWrapper header={'Home'}>
      <div className='grid md:grid-cols-12 md:gap-20 '>
        <section className=' col-span-7 '>
          <h2 className=' text-base md:text-3xl my-5'>Enrolled Courses</h2>
          <div className='grid gap-4'>
            {enrolledCourses.map((course, key) => {
              return <CourseCard key={key} {...course} />
            })}
          </div>
        </section>
        <section className=' col-span-5 '>
          <h2 className=' text-base md:text-3xl my-5'>Other Courses</h2>
          <div className='flex gap-4  flex-wrap justify-center '>
            {enrolledCourses.map((course, key) => {
              return <CourseCard key={key} {...course} enrolled={false} />
            })}
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
