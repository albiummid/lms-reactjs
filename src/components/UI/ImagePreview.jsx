import React, { useEffect, useState } from 'react'
import Modal from './Modal'

export default function ImagePreview({ images = [] }) {
  const [activeImage, setActiveImage] = useState(null)
  return (
    <div>
      <section className=' w-fit space-x-2 flex my-2'>
        {images.map((image, key) => (
          <div key={key}>
            <img
              onClick={() => setActiveImage(image)}
              className={`w-14 h-14 ${
                activeImage === image && 'ring-1 ring-red-400'
              }`}
              src={image?.src || image}
            />
          </div>
        ))}
      </section>
      <Modal
        isDefault={false}
        open={activeImage !== null}
        onClose={() => setActiveImage(null)}
        closeOnOutsideClick
      >
        <img
          src={activeImage?.src || activeImage}
          className=' w-screen md:w-[600px] '
          alt=''
        />
      </Modal>
    </div>
  )
}
