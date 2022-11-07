import React, { useState } from 'react'
import { Images } from '../../../../assets'
import { BsCardImage } from 'react-icons/bs'
import { IoMdStats } from 'react-icons/io'
import Drawer from '../../../UI/Drawer'
import Editor from '../../../CKEditor'
import RichTextEditor from '@mantine/rte'
import { FormGroup } from '../../../UI/Form'
import TextEditor from '../../../TextEditor/TextEditor'
import Button from '../../../UI/Button'

export default function HeaderCard() {
  const [drawer, setDrawer] = useState(false)
  const buttons = [
    {
      title: 'Photos',
      icon: <BsCardImage size={20} />,
      action: () => {
        setDrawer(true)
      },
    },
    {
      title: 'Poll',
      icon: <IoMdStats size={20} />,
      action: () => {
        setDrawer(true)
      },
    },
  ]

  return (
    <div className=' bg-white  divide-y rounded-xl py-2 shadow-fb'>
      <div className='flex space-x-2 p-4'>
        <img
          src={Images.userAvatar}
          alt=''
          className=' rounded-full w-10 h-10'
        />
        <div
          onClick={() => setDrawer(true)}
          className='w-full bg-web_wash hover:bg-slate-100 p-2 rounded-md cursor-text'
        >
          <p className='w-full'>Write something ...</p>
        </div>
      </div>
      <div className='flex  w-full justify-between p-4'>
        {buttons.map((btn, key) => (
          <button
            key={key}
            className='space-x-2 flex items-center hover:bg-web_wash rounded-xl py-2 px-4'
            onClick={() => {
              btn.action()
            }}
          >
            <span>{btn.icon}</span>
            <span>{btn.title}</span>
          </button>
        ))}
      </div>
      <Drawer
        open={drawer}
        onClose={() => {
          setDrawer(false)
        }}
      >
        <TextEditor />
        <Button variant={'blue'} className='mx-auto' outline>
          Submit Post
        </Button>
      </Drawer>
    </div>
  )
}
