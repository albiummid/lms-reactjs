import moment from 'moment'
import React from 'react'
import RenderHTML from '../../components/TextEditor/RenderHTML'
import Collapse from '../../components/UI/Collapse'
import PageWrapper from '../../layouts/PageWrapper'

export default function NoticePage() {
  const notices = [
    {
      title: 'Announcement ! Please read carefully .',
      timestamp: 1667919164863,
      detailsHTML: `
        <h1> Hello everyone !</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur inventore voluptas quibusdam iste itaque, voluptatem reprehenderit blanditiis ullam ex distinctio rerum, necessitatibus ea unde earum numquam sunt dicta aliquam ducimus.
        </p>
      `,
    },
    {
      title: 'Announcement ! Please read carefully .',
      timestamp: 1667919164863,
      detailsHTML: `
        <h1> Hello everyone !</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur inventore voluptas quibusdam iste itaque, voluptatem reprehenderit blanditiis ullam ex distinctio rerum, necessitatibus ea unde earum numquam sunt dicta aliquam ducimus.
        </p>
      `,
    },
    {
      title: 'Announcement ! Please read carefully .',
      timestamp: 1667919164863,
      detailsHTML: `
        <h1> Hello everyone !</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur inventore voluptas quibusdam iste itaque, voluptatem reprehenderit blanditiis ullam ex distinctio rerum, necessitatibus ea unde earum numquam sunt dicta aliquam ducimus.
        </p>
      `,
    },
  ]
  return (
    <PageWrapper header={'Notice-Board'}>
      <div className=' grid gap-4'>
        {notices.map((el, key) => {
          return (
            <Collapse
              heading={
                <div>
                  <small className='text-gray-500 ml-auto justify-end'>
                    {moment(el.timestamp).fromNow()}
                  </small>
                  <h4>{el.title}</h4>
                </div>
              }
              key={key}
            >
              <RenderHTML html={el.detailsHTML} />
            </Collapse>
          )
        })}
      </div>
    </PageWrapper>
  )
}
