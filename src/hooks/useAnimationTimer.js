import { useState, useEffect } from 'react'
import { lookup } from 'dns'

const useAnimationTimer = (duration = 1000, delay = 0) => {
  const [elapsed, setTime] = useState(0)
  useEffect(() => {
    let animationFrame, timerStop, start
    // Function to be executed on each animation frame
    const onFrame = () => {
      setTime(Date.now() - start)
      loop()
    }

    const loop = () => {
      animationFrame = requestAnimationFrame(onFrame)
    }

    const onStart = () => {
      timerStop = setTimeout(() => {
        cancelAnimationFrame(animationFrame)
        setTime(Date.now() - start)
      }, duration)
    }
    // Start the loop
    start = Date.now()
    loop()
    // Start after specified delay (defaults to 0)
    const timerDelay = setTimeout(onStart, delay)

    // Clean things up
    return () => {
      clearTimeout(timerStop)
      clearTimeout(timerDelay)
      cancelAnimationFrame(animationFrame)
    }
  }, [duration, delay])
  return elapsed
}

export default useAnimationTimer
