import React from 'react'
import Button from '../../../components/UI/Button'

export default function CourseCard({
  title,
  cover_image,
  type,
  instructor,
  batch,
  call_sign,
  learner_id,
  enrolled = true,
}) {
  return (
    <div
      className={`p-5 rounded-lg shadow-fb bg-white flex flex-col ${
        enrolled ? 'md:flex-row md:w-full' : 'w-[300px]'
      } w-fit gap-6 `}
    >
      <div className=' flex items-center justify-center md:justify-start'>
        <img
          className={enrolled ? 'md:max-w-[200px]' : 'w-full'}
          src={cover_image}
          alt=''
        />
      </div>

      <div className=' md:col-span-9 justify-start'>
        <h2 className=' text-green-500'>{title}</h2>
        {enrolled ? (
          <>
            <h3>
              {type} By {instructor}
            </h3>
            <h4>
              Batch: {batch} | Callsign {call_sign}
            </h4>
            <p className=' text-gray-600'>Learner ID: {learner_id}</p>
            <Button outline variant={'green'}>
              Continue
            </Button>
          </>
        ) : null}
      </div>
    </div>
  )
}
