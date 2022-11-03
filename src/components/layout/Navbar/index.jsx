import React, { useState } from 'react'
import { Affix } from 'antd'
import { FiSearch } from 'react-icons/fi'
import {
  AiOutlineAppstore,
  AiOutlineClose,
  AiOutlineIdcard,
  AiOutlineMenu,
  AiOutlineTeam,
} from 'react-icons/ai'
import { BsAward } from 'react-icons/bs'
import Icons from '../../../assets/icons'
import { useNavigate, Link } from 'react-router-dom'
const iconStyle = `flex items-center text-2xl cursor-pointer `
const links = [
  {
    title: 'Home',
    url: '/',
    icon: <AiOutlineTeam className={iconStyle} />,
  },
  {
    title: 'My Profile',
    url: '/profile',
    icon: <AiOutlineAppstore className={iconStyle} />,
  },
  {
    title: 'Support',
    url: '/support',
    icon: <BsAward className={iconStyle} />,
  },
  {
    title: 'Report Bugs',
    url: '/bugs/reports',
    icon: <AiOutlineIdcard className={iconStyle} />,
  },
]
export default function Navbar() {
  const [isSearching, setIsSearching] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()

  let userName = 'albiummid'
  let isAuthenticated = false
  let logo = Icons.logo

  return (
    <Affix className=' shadow-md'>
      <>
        {/* Mobile Navbar */}
        <div className='relative flex z-10 lg:hidden items-center justify-between px-4  py-2 space-x-2 bg-white'>
          <AiOutlineMenu
            className='hover:text-primary cursor-pointer'
            size={26}
            onClick={() => {
              setIsMenuOpen((prv) => !prv)
              setIsSearching(false)
            }}
          />

          <>
            <div
              className={`transition-all duration 300 ${
                !isMenuOpen ? '-translate-x-full' : 'translate-x-0'
              } w-[50vh] h-screen bg-white shadow-4xl absolute -left-2 top-0 p-5  rounded-r-xl `}
            >
              <div className='flex justify-between items-center'>
                <Link to={'/'}>
                  <img src={logo.src} alt='lms-logo' />
                </Link>
                <AiOutlineClose
                  onClick={() => {
                    setIsMenuOpen(false)
                  }}
                  className='text-xl text-red-500 cursor-pointer'
                />
              </div>
              <div className='mt-16 space-y-5'>
                {links.map((item, key) => (
                  <div
                    key={key}
                    onClick={() => navigate(item.url)}
                    className='flex items-center space-x-5 hover:text-primary cursor-pointer'
                  >
                    <span>{item.icon}</span>
                    <span className='text-xl'>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </>

          <div
            className={`flex border rounded-xl  items-center justify-center space-x-2 px-2  ${
              isSearching ? ' border-primary w-full' : 'border-white'
            }`}
          >
            {isSearching && (
              <input
                className=' outline-none w-full p-2 placeholder:text-center'
                type='text'
                placeholder='Search for courses, institutes, exams...'
              />
            )}
            <FiSearch
              onClick={() => {
                setIsSearching((prv) => !prv)
                setIsMenuOpen(false)
              }}
              className={`${isSearching && 'text-primary'} cursor-pointer`}
              size={26}
            />
          </div>
        </div>

        {/* Desktop Navbar */}
        <section className='bg-white  '>
          <div
            className={`hidden lg:flex justify-between items-center  py-3 px-4 md:px-10`}
          >
            <Link to={'/'}>
              <img src={logo.src} alt='lms-logo' />
            </Link>

            <nav className=''>
              {links.map((data, key) => (
                <Link key={key} className={`text-[16px] mx-3`} to={data.url}>
                  {data.title}
                </Link>
              ))}
            </nav>

            {!isAuthenticated ? (
              <div className='flex space-x-4'>
                <button
                  onClick={() => {}}
                  className='py-2 px-4 border border-gray/20 rounded-md'
                >
                  Log In
                </button>
                <button
                  onClick={() => {}}
                  className='py-2 px-4 border border-primary rounded-md bg-violet-400 text-white'
                >
                  Sign up
                </button>
              </div>
            ) : (
              <div className='flex justify-center text-black space-x-2'>
                <div className='flex items-center' onClick={() => {}}>
                  <div className='bg-primary h-10 w-10 rounded-full flex items-center justify-center p-1 text-white cursor-pointer '>
                    {userName?.slice(0, 1).toUpperCase()}
                  </div>
                  <p className='text-primary text-lg ml-2 cursor-pointer'>
                    {userName}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </>
    </Affix>
  )
}
