import moment from 'moment'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function Countdown({ eventTime }) {
  let initial = moment.duration(moment(eventTime).diff(moment()))
  const [timeBetween, setTimeBetween] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (interval) {
        clearInterval(interval)
      }
      let currentTime = moment()
      let targetTime = moment(eventTime)
      setTimeBetween(moment.duration(targetTime.diff(currentTime)))
    }, 1000)
  }, [eventTime])

  if (timeBetween === null) return null

  return (
    <div className=' text-red-400'>
      {/* <span>{timeBetween.years()}yr </span> */}
      {/* <span>{timeBetween.months()}m </span> */}
      <span>{timeBetween.days()}Day </span>
      <span>{timeBetween.hours()}Hour </span>
      <span>{timeBetween.minutes()}minutes </span>
      <span>{timeBetween.seconds()}s </span>
      Remaining
    </div>
  )
}
