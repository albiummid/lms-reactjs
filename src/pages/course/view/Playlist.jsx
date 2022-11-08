import React, { useState } from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import Collapse from '../../../components/UI/Collapse'
import { modules } from './data'
export default function Playlist({ setVideo }) {
  const [activeModule, setActiveModule] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const [activeVideo, setActiveVideo] = useState(0)

  return (
    <section className=' py-2'>
      <div className=' flex gap-2 items-center'>
        <AiOutlineUnorderedList />
        <p className=' font-bold'>Modules</p>
      </div>
      <section className=' grid gap-2'>
        {modules.map((module, key) => (
          <Collapse
            onClick={() => {
              setActiveModule(key)
              setActiveSection(null)
              setActiveVideo(null)
            }}
            key={key}
            active={key === activeModule}
            heading={module.module_title}
          >
            <p className=' font-bold'>Sections - </p>
            <div className='grid gap-2'>
              {module.sections.map((section, sKey) => {
                return (
                  <Collapse
                    onClick={() => {
                      setActiveSection(sKey)
                      setActiveVideo(null)
                    }}
                    active={sKey === activeSection}
                    key={sKey}
                    heading={section.section_name}
                  >
                    <p className=' font-bold'>Videos -</p>
                    {section.videos.map((video, idx) => {
                      return (
                        <div
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveVideo(idx)
                            setVideo({
                              ...video,
                              activeModule,
                              activeSection,
                            })
                          }}
                          className={` flex flex-col md:flex-row justify-between md:items-center gap-2 border my-2 py-2  px-4 hover:bg-green-300 duration-300  cursor-pointer rounded-md ${
                            idx === activeVideo ? 'bg-green-300' : 'bg-white'
                          }`}
                        >
                          <div className=' flex'>
                            <span>{idx + 1}</span> .<p>{video.title}</p>
                          </div>
                          <span>{video.duration}</span>
                        </div>
                      )
                    })}
                  </Collapse>
                )
              })}
            </div>
          </Collapse>
        ))}
      </section>
    </section>
  )
}
