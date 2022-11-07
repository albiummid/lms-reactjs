import { Affix } from 'antd'
import React, { useState } from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import RPlayer from '../../../components/UI/VideoPlayers/RPlayer'
import useScreenWidth from '../../../hooks/useScreenWidth'
import { modules } from './data'
import Playlist from './Playlist'

export default function RegularView() {
  const [video, setVideo] = useState({
    title: 'Big buck bunty !',
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    activeModule: 0,
    activeSection: 0,
  })
  const [scrolling, setScrolling] = useState(false)
  const { screenWidth } = useScreenWidth()
  return (
    <div className=' grid md:grid-cols-12 gap-5 '>
      <Affix
        className=' md:col-span-7 xl:col-span-8 '
        offsetTop={screenWidth > 640 ? 88 : 44}
        onChange={(e) => {}}
      >
        <div className={`${scrolling ? 'bg-white' : 'bg-web_wash'}`}>
          <RPlayer
            videoURL={video?.url || 'https://'}
            thumbnailURL={
              'https://images.gog-statics.com/fb5e7a55e57bd782feb068c435061fdd180dbc4b525f0c35e5b886199e5a2f4e.jpg'
            }
            className={'max-h-[80vh]'}
          />
          <div className='flex justify-between gap-2 items-center p-2'>
            <p className='font-bold'>
              {video?.title} -{' '}
              {
                modules[video?.activeModule]?.sections[video?.activeSection]
                  ?.section_name
              }{' '}
              - {modules[video?.activeModule]?.module_title}
            </p>
          </div>
        </div>
      </Affix>
      <section className=' md:col-span-5 xl:col-span-4'>
        <Playlist setVideo={setVideo} />
      </section>
    </div>
  )
}
