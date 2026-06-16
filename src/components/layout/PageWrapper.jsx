// Restores scroll position on navigation, adds page padding
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageWrapper({ children, style = {} }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div style={{
      maxWidth: 'var(--max-w)',
      margin: '0 auto',
      padding: '0 var(--space-8)',
      ...style,
    }}>
      {children}
    </div>
  )
}
