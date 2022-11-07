import React from 'react'
import { useState } from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import Drawer from '../../../components/UI/Drawer'
import RPlayer from '../../../components/UI/VideoPlayers/RPlayer'
import { modules } from './data'
import Playlist from './Playlist'
export default function ArniamView() {
  const [openDrawer, setOpenDrawer] = useState(false)

  const [video, setVideo] = useState({
    title: 'Big buck bunty !',
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    activeModule: 0,
    activeSection: 0,
  })
  return (
    <>
      <section className=' '>
        <RPlayer
          videoURL={video?.url || 'https://'}
          thumbnailURL={
            'https://images.gog-statics.com/fb5e7a55e57bd782feb068c435061fdd180dbc4b525f0c35e5b886199e5a2f4e.jpg'
          }
          className={'max-h-[80vh]'}
        />
      </section>
      <section>
        <>
          <div className='flex justify-between gap-2 items-center py-4'>
            <p className='font-bold'>
              {video?.title} -{' '}
              {
                modules[video?.activeModule]?.sections[video?.activeSection]
                  ?.section_name
              }{' '}
              - {modules[video?.activeModule]?.module_title}
            </p>

            <AiOutlineMenuUnfold
              className=' cursor-pointer'
              size={30}
              onClick={() => setOpenDrawer(true)}
            />
          </div>
        </>
      </section>

      <section>
        <Drawer
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(false)
          }}
        >
          <Playlist setVideo={setVideo} />
        </Drawer>
      </section>
    </>
  )
}
