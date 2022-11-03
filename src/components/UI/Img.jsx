import Image from 'next/image'
import React from 'react'

export default function Img({ image }) {
  return <Image src={image.src} />
}
