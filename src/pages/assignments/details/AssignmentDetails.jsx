import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CoursePageLayout from '../../../layouts/CoursePageLayout'
import RenderHTML from '../../../components/TextEditor/RenderHTML'
import Button from '../../../components/UI/Button'
import Drawer from '../../../components/UI/Drawer'

const PageHeader = ({ setIsDrawerOpen }) => {
  const { assignmentId } = useParams()
  const title = `T20 Score Board Updater`
  return (
    <div className='grid grid-cols-12 items-center'>
      <span className=' col-span-8 text-xl md:text-2xl font-semibold'>
        {title} | {assignmentId}
      </span>
      <div className={'col-span-4  place-items-end'}>
        <Button
          onClick={() => {
            setIsDrawerOpen(true)
          }}
          outline
          className={'ml-auto text-base'}
          variant={'green'}
        >
          Submit Assignment
        </Button>
      </div>
    </div>
  )
}

export default function AssignmentDetails() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const descriptionHTML = `   <p> দুইটা দল থাকবে, ব্যাটিং এবং ফিল্ডিং। </p>

                      <p> ব্যাটিং দল এর জন্যে টোটাল রান আপডেট করতে হবে। </p>

                      <p>  ১ রান, ২ রান, ৩ রান, ৪ রান, ৬ রান - এই বাটন গুলো থাকবে, সেই বাটন এ ক্লিক করলে রান আপডেট হবে ফিল্ডিং দল এর জন্যে বাটন থাকবে এরকম - ১ উইকেট, নো বল, ওয়াইড বল। </p>

                      <p>  নো আর ওয়াইড বল হলে ব্যাটিং দল এর রান ও আপডেট হবে। </p>

                      <p>   উদাহরনঃ </p>

                      <p>
                          Batting Team : 
                      </p>
                      <p>
                          198/6 
                      </p>
                      <p>
                          198/6 
                      </p>
                      <p>198/6 </p>
                      <p>
                          198/6 
                      </p>
                      <p>198/6 </p>
                      <h2>
                          Technology: ReactJS Only
                      </h2>

                      <h2>
                          Deadline: 22/10/2022 within 11:59 PM
                      </h2>
                      <h2>
                          Submission Section will be Opened in 21/10/2022 at 09:30 PM BST
                      </h2>
`
  const evaluationHTML = `<p>সবগুলো কন্ডিশন ফিলাপ করতে হবে।</p>`
  return (
    <CoursePageLayout header={<PageHeader setIsDrawerOpen={setIsDrawerOpen} />}>
      <div className='grid md:grid-cols-2 gap-4'>
        <section className='grid shadow-fb rounded-md divide-y  bg-white'>
          <div className=' p-5 grid-rows-1 '>
            <h1 className=' text-cyan-500 '>Assignment Details</h1>
          </div>

          <div className='p-5 grid-rows-4'>
            <RenderHTML html={descriptionHTML} />
          </div>
          <div className='p-5 grid-rows-1'></div>
        </section>
        <section className='shadow-fb rounded-md divide-y bg-white'>
          <div className=' p-5 '>
            <h1 className=' text-cyan-500 '>Evaluation Strategy</h1>
          </div>

          <div className='p-5 h-full'>
            <RenderHTML html={evaluationHTML} />
          </div>
          <div className='p-5 self-end h-fit'></div>
        </section>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false)
        }}
      ></Drawer>
    </CoursePageLayout>
  )
}
