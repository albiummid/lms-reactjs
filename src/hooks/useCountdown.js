import { useEffect, useState } from 'react'

export default function useCountdown({
  days,
  hours,
  minutes,
  seconds,
  timestamp,
}) {
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  useEffect(() => {
    const NOW_IN_MS = new Date().getTime()
    let eventTime
    if (timestamp?.length) {
      eventTime = new Date(timestamp).getTime()
    } else {
      let dayInMS = (days = 0) => days * 24 * 60 * 60 * 1000
      let hourInMS = (hours = 0) => hours * 60 * 60 * 1000
      let minutesInMS = (minutes = 0) => minutes * 60 * 1000
      let secondInMS = (seconds = 0) => seconds * 1000

      const TARGET_IN_MS =
        dayInMS(days) +
        hourInMS(hours) +
        minutesInMS(minutes) +
        secondInMS(seconds)
      eventTime = TARGET_IN_MS + NOW_IN_MS
    }
    const countdownDate = new Date(eventTime).getTime()
    let intervalId = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        setTimerDays('00')
        setTimerHours('00')
        setTimerMinutes('00')
        setTimerSeconds('00')
        alert('Time Expired !')
        clearInterval(intervalId)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return [timerDays, timerHours, timerMinutes, timerSeconds]
}
