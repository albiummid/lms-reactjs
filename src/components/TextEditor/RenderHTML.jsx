import React from 'react'

export default function RenderHTML({
  html = '<h1>Hi</h1> <p>Description</p> <p> Description 2 </p>',
}) {
  return (
    <div
      className='html_container'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
