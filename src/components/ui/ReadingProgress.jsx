// Thin jungle-green line at top of viewport tracking scroll depth
import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100
      setProgress(pct)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, zIndex: 9999,
      height: '2px', width: `${progress}%`,
      background: 'var(--color-jungle)',
      transition: 'width 80ms linear',
      pointerEvents: 'none',
    }} />
  )
}
