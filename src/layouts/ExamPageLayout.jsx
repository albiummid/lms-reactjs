import { Affix } from 'antd'
import React from 'react'
import { useState } from 'react'
import RenderHTML from '../components/TextEditor/RenderHTML'
import PageWrapper from '../layouts/PageWrapper'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import Button from '../components/UI/Button'
import Drawer from '../components/UI/Drawer'
import useCountdown from '../hooks/useCountdown'

function ExamCountdown() {
  const [days, hours, minutes, seconds] = useCountdown({
    minutes: 10,
  })

  const [timeBetween, setTimeBetween] = useState(null)

  return (
    <div className=' text-red-400 font-bold'>
      {days > 0 && <span> {days}day</span>}
      {hours > 0 && <span>{hours} hour</span>}
      <span>{minutes} : </span>
      <span>{seconds}s </span>
    </div>
  )
}

export default function ExamPageLayout({
  children,
  questionCount,
  answerCount,
  instructionsHTML,
  remainingQuestions = [],
  header,
}) {
  const [activeCard, setActiveCard] = useState(null)
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <PageWrapper header={header}>
        <div className=' grid lg:grid-cols-12 gap-4 '>
          {/* Desktop Screen */}
          <Affix
            className=' col-span-4 bg-white  rounded-md hidden lg:block'
            offsetTop={88}
          >
            <section className=' divide-y space-y-4'>
              <div className=' text-5xl text-center p-5'>
                <ExamCountdown minutes={10} />
              </div>
              <div className='p-5'>
                <h2 className='text-center'>Instructions</h2>
                <RenderHTML html={instructionsHTML} />
              </div>
              <div className=' p-5'>
                <div>
                  <h4>
                    Questions remaining : {questionCount - answerCount}/
                    {questionCount}
                  </h4>
                </div>
                {remainingQuestions?.length > 0 ? (
                  <ol className=' space-y-2 overflow-y-auto h-[30vh] p-5'>
                    {remainingQuestions?.map((qn) => (
                      <li
                        onClick={() => {
                          const scrollDiv = document.getElementById(`${qn.id}`)
                          // let b = scrollDiv.classList.add(
                          //   'border border-red-400 border-dashed'
                          // )
                          const offsetTop = scrollDiv.offsetTop
                          window.scrollTo({
                            top: offsetTop - 150,
                            behavior: 'smooth',
                          })
                          // document.getElementById(`${qn.id}`).scrollIntoView({
                          //   behavior: 'smooth',
                          // })
                          setActiveCard(qn.id)
                        }}
                        className={` truncate p-2 rounded-md border bg-white cursor-pointer hover:shadow-fb ${
                          activeCard === qn.id ? 'bg-green-300' : ''
                        }`}
                        key={qn.id}
                      >
                        {qn.id} . {qn.question}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <Button variant={'green'} outline className={'mx-auto'}>
                    Submit
                  </Button>
                )}
              </div>
            </section>
          </Affix>

          {/* Mobile Screen */}

          {/* Content Section */}
          <section className='col-span-8'>{children}</section>
        </div>
      </PageWrapper>
      <Affix offsetBottom={0} className='lg:hidden bg-white absolute '>
        <div
          className='bg-white w-screen
         grid grid-cols-6'
        >
          <div className='col-span-4  p-4'>
            <div className='flex  space-x-2'>
              <h4>
                Redux Toolkit ( {questionCount - answerCount}/{questionCount}){' '}
              </h4>
            </div>
            <div className='flex items-center space-x-2'>
              <span>Remaining : </span>
              <ExamCountdown />
            </div>
          </div>
          <div className='col-span-2  flex justify-center items-center'>
            {remainingQuestions.length > 0 ? (
              <Button
                onClick={() => {
                  setOpenDrawer(true)
                }}
                variant={'red'}
              >
                <AiOutlineUnorderedList />
              </Button>
            ) : (
              <Button variant={'green'}>Submit</Button>
            )}
          </div>
        </div>
      </Affix>
      <Drawer
        title={'Remaining Question List'}
        open={openDrawer}
        placement={'bottom'}
        closable={false}
        onClose={() => {
          setOpenDrawer(false)
        }}
      >
        <ol className=' space-y-2 overflow-y-auto h-[30vh] p-5'>
          {remainingQuestions?.map((qn) => (
            <li
              onClick={() => {
                const scrollDiv = document.getElementById(`${qn.id}`)
                const offsetTop = scrollDiv.offsetTop
                window.scrollTo({
                  top: offsetTop - 150,
                  behavior: 'smooth',
                })
                setActiveCard(qn.id)
                setOpenDrawer(false)
              }}
              className={` truncate p-2 rounded-md border bg-white cursor-pointer hover:shadow-fb ${
                activeCard === qn.id ? 'bg-green-300' : ''
              }`}
              key={qn.id}
            >
              {qn.id} . {qn.question}
            </li>
          ))}
        </ol>
      </Drawer>
    </>
  )
}
