import { Rate, Tabs } from 'antd'
import React from 'react'
import { Images } from '../../assets'
import PageWrapper from '../../layouts/PageWrapper'
import Section from '../../layouts/Section'
import SectionDivider from '../../components/UI/SectionDivider'
import AboutUser from './AboutUser'
import { GrLocation } from 'react-icons/gr'
import WatchLog from './WatchLog/WatchLog'
import AmolNama from './AmolNama'

export default function UserProfile() {
  const studentID = '20061NXTJS'
  const enumColors = ['red', 'green', 'blue', 'violet', 'teal']

  const skillColors = {
    red: 'border-1 border-red-400 bg-red-50 text-red-400',
    green: 'border-1 border-green-400 bg-green-50 text-green-400',
    blue: 'border-1 border-blue-400 bg-blue-50 text-blue-400',
    violet: 'border-1 border-violet-400 bg-violet-50 text-violet-400',
    teal: 'border-1 border-teal-400 bg-teal-50 text-teal-400',
  }

  const skills = [
    'Branding',
    'UI/UX',
    'Web - Design',
    'Packaging',
    'Print & Editorial',
  ]

  const Heading = () => {
    return (
      <div className='flex flex-col items-center flex-wrap mt-2'>
        {/* Basic Info */}
        <h1 className='mb-0 text-xl md:text-4xl'>Albi Ummid Tanvir</h1>
        <div className='flex items-center space-x-2'>
          <GrLocation className='text-gray-400 text-xl' />
          <span className='text-gray-400'> New Yourk , NY</span>
        </div>
      </div>
    )
  }
  return (
    <PageWrapper header={'My Profile'}>
      <Section className={'rounded-md'}>
        <div className=' md:grid md:grid-cols-10 md:space-x-4 md:p-10 p-4 '>
          {/* Sidebar */}
          <section className=' md:col-span-3'>
            <div className='flex  flex-col items-center justify-center'>
              <img src={Images.userAvatar} className='w-[240px]' alt='' />
              <Heading />
            </div>

            <div>
              <SectionDivider title={'SKILLS'} />
              <div className=' flex space-x-2  flex-wrap'>
                {skills.map((item, key) => {
                  let randomColor =
                    enumColors[Math.floor(Math.random() * enumColors.length)]
                  let style = skillColors[randomColor]
                  return (
                    <span
                      className={` ${style} h-fit p-1 my-1 rounded-md border`}
                      key={key}
                    >
                      {item}
                    </span>
                  )
                })}
              </div>
            </div>

            <div>
              <SectionDivider title={'Work'} />
              <div>
                <div>
                  <h2>Spotify </h2>
                </div>
                <div className='flex flex-col'>
                  <span>170 William Street</span>
                  <span>New York,NY 1-234,12:34:223:51</span>
                </div>
              </div>
            </div>
            <div>
              <SectionDivider title={'Education'} />
              <div>
                <div>
                  <h2>Studies Bachelor Degree in Mathematics</h2>
                </div>
                <div className='flex flex-col'>
                  <span>
                    Mawlana Bhashani Scinece and Technology University
                  </span>
                  <span>Sontosh,Tangail-1902</span>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}

          <section className='md:col-span-7'>
            <h1>Student ID :{studentID}</h1>
            {/* Rankings */}
            <div>
              <small className='font-bold'>RANKINGS</small>

              <div className='flex items-center space-x-4 '>
                <h1 className='text-6xl font-bold'>4.5</h1>
                <Rate className='flex ' defaultValue={4.5} allowHalf />
              </div>
            </div>

            <Tabs
              items={[
                {
                  label: 'About',
                  key: '1',
                  children: <AboutUser />,
                },
                {
                  label: 'Amal Nama',
                  key: '2',
                  children: <AmolNama />,
                },
                {
                  label: 'Watch Log',
                  key: '3',
                  children: <WatchLog />,
                },
              ]}
            />
          </section>
        </div>
      </Section>
    </PageWrapper>
  )
}
