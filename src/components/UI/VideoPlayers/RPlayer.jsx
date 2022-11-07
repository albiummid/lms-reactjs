import { PlayCircleFilled } from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import Icons from '../../../assets/icons'
// import useOnScreen from './hooks/visibleHook'

export default function RPlayer({
  thumbnailURL,
  playing = true,
  videoURL,
  loop,
  onPlay = () => {},
  onPause = () => {},
  playIcon = (
    <img
      src={Icons.play}
      className='h-24 hover:scale-105 duration-200'
      alt=''
    />
  ),
  className,
  ...rest
}) {
  const videoRef = useRef(null)
  const [played, setPlayed] = useState(playing)
  // const isVisible = useOnScreen(videoRef)

  // useEffect(() => {
  //   console.log(videoRef?.current?.player?.isPlaying, 'v')
  // }, [videoRef?.current?.player?.isPlaying])

  return (
    <div className=' relative'>
      <ReactPlayer
        ref={videoRef}
        playing={played}
        height='100%'
        width='100%'
        className={`${className} aspect-video`}
        preload={'auto'}
        autoPlay
        playsinline
        webkit-playsinline
        light={thumbnailURL}
        controls
        loop={loop}
        muted
        onContextMenu={(e) => e.preventDefault()}
        config={{
          file: { attributes: { controlsList: 'nodownload' } },
        }}
        playIcon={playIcon}
        url={videoURL}
        onPause={(e) => {
          onPause()
          setPlayed(false)
        }}
        onPlay={(e) => {
          onPlay()
          setPlayed(true)
        }}
        {...rest}
      />
      {!played && (
        <img
          src={Icons.play}
          className='h-24 hover:scale-105 duration-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
          onClick={() => {
            setPlayed(true)
          }}
          alt=''
        />
      )}
    </div>
  )
}
