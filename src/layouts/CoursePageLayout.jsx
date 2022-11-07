import { Affix } from 'antd'
import React, { useState } from 'react'
import { Images } from '../assets'

import { HiOutlineUserGroup } from 'react-icons/hi'
import { AiOutlineFire, AiOutlineMenuUnfold } from 'react-icons/ai'
import { MdOutlineEditNote, MdOutlineQuiz } from 'react-icons/md'
import Drawer from '../components/UI/Drawer'
import { useNavigate } from 'react-router-dom'

export default function CoursePageLayout({ children, header }) {
  const navigate = useNavigate()
  const courseTitle = `Job Grade Frontend Engineering in React Ecosystem by Istiaq Hasan`
  const courseImage = Images.courses.nextJSCourse
  const [openDrawer, setOpenDrawer] = useState(false)

  const SidebarLinks = [
    {
      title: 'Community',
      url: 'community',
      icon: <HiOutlineUserGroup size={30} />,
    },
    {
      title: 'Assignments',
      url: 'assignments',
      icon: <MdOutlineEditNote size={30} />,
    },
    {
      title: 'Exams',
      url: 'exams',
      icon: <MdOutlineQuiz size={30} />,
    },
    {
      title: 'Outlines',
      url: 'outlines',
      icon: <AiOutlineFire size={30} />,
    },
  ]

  return (
    <div>
      {/* Desktop Layout */}
      <section className='hidden lg:grid grid-cols-12 md:px-10 px-4 md:gap-32 md:mx-auto '>
        <Affix offsetTop={88} className=' col-span-3 mt-6'>
          <div className='flex justify-center flex-col items space-y-4 center relative '>
            <img src={courseImage} className=' mx-auto  ' alt='' />
            <div
              style={{
                backdropFilter: 'blur(20px)',
                background: 'rgba(0, 0, 0, 0.034)',
              }}
              className='absolute bottom-0 w-full flex  text-white'
            >
              <h4 className='text-white p-4 '>{courseTitle}</h4>
            </div>
          </div>
          <div className=' mt-4 space-y-4 '>
            {SidebarLinks.map((item, key) => (
              <div
                onClick={() => {
                  navigate('/' + item.url)
                }}
                className={` flex 
                items-center 
                 active:opacity-80
                  rounded-md
                    active:font-semibold text-lg  duration-100  cursor-pointer space-x-2 text-gray-500 
                
                  `}
                //                  ${routes.includes(item.url) ? 'shadow-fb' : 'hover:shadow-fb'}
                key={key}
              >
                <span>{item.icon}</span>
                <span className='font-bold text-xl '>{item.title}</span>
              </div>
            ))}
          </div>
        </Affix>
        <section className='col-span-9 w-full'>
          <Affix offsetTop={64}>
            <h1
              className=' text-gray-500 md:text-2xl bg-web_wash py-5
           '
            >
              {header}
            </h1>
          </Affix>
          <>{children}</>
        </section>
      </section>

      {/* Mobile Layout */}
      <>
        <section className='lg:hidden w-full'>
          <Affix offsetTop={44}>
            <div className=' flex items-center justify-between px-4 py-2 bg-white'>
              <h1 className='  text-lg md:text-xl w-3/4 truncate'>
                {courseTitle}
              </h1>
              <AiOutlineMenuUnfold
                className='hover:text-primary cursor-pointer'
                size={26}
                onClick={() => {
                  setOpenDrawer(true)
                }}
              />
            </div>
          </Affix>
          {children}
          <Drawer
            open={openDrawer}
            onClose={() => {
              setOpenDrawer(false)
            }}
          >
            <div className=' '>
              <div className='flex justify-center flex-col items center '>
                <h1 className=' '>{courseTitle}</h1>
                <img src={courseImage} className=' mx-auto ' alt='' />
              </div>
              <div className=' mt-4 '>
                {SidebarLinks.map((item, key) => (
                  <div
                    onClick={() => {
                      navigate('/' + item.url)
                      setOpenDrawer(false)
                    }}
                    className=' flex items-center gap-4 active:opacity-80 rounded-md hover:shadow-3xl active:font-semibold text-lg p-2 duration-100 cursor-pointer'
                    key={key}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Drawer>
        </section>
      </>
    </div>
  )
}
