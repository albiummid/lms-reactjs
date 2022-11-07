import React, { useRef, useState } from 'react'
export default function VideoPlayer({
  thumbnailURL,
  videoURL,
  className,
  // loop,
  // item,
  // id,
  // playIcon = (
  //   <PlayCircleFilled
  //     className='
  //                           text-black/90
  //                           md:text-6xl text-4xl cursor-pointer active:opacity-75 hover:scale-110 duration-300'
  //   />
  // ),
}) {
  const videoRef = useRef(null)
  const [played, setPlayed] = useState(false)

  const onVideoClick = () => {
    if (played) {
      videoRef.current.pause()
      setPlayed(!played)
    } else {
      videoRef.current.play()
      setPlayed(!played)
    }
  }

  return (
    <div className={`aspect-video ${className}`}>
      <video
        onContextMenu={(e) => e.preventDefault()}
        controlsList='nodownload'
        poster={thumbnailURL}
        onClick={onVideoClick}
        style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}
        playsInline
        webkit-playsInline
        loop
        muted
        playIcon
        preload='true'
        controls
        alt='Ostello'
        src={videoURL}
        ref={videoRef}
      />
    </div>
  )
}
