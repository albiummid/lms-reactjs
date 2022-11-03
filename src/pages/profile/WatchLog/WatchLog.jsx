import React from 'react'
import WLCard from './WLCard'

export default function WatchLog() {
  const logs = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className=' space-y-2 max-h-[60vh] p-4 overflow-y-auto'>
      {logs.map((i, index) => (
        <WLCard key={index} />
      ))}
    </div>
  )
}
