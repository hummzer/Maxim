// Sticky editorial masthead
// Structure:
// [top rule]
// [row: eyebrow left "Business & Lifestyle" | center logotype "MAXIM" | right nav links]
// [bottom rule]
// On scroll > 60px → background becomes var(--color-parchment) with box-shadow

import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Divider from '../ui/Divider'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Nav links
  const links = [
    { to: '/blogs', label: 'Journal' },
    { to: '/daily', label: 'Daily' },
  ]

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'var(--color-parchment)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 var(--color-sand)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
    }}>
      {/* Top hairline rule */}
      <div style={{ borderTop: '2px solid var(--color-walnut)', width: '100%' }} />

      {/* Masthead row */}
      <div className="masthead-row" style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: 'var(--space-4) var(--space-8)',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: 'var(--space-4)',
      }}>
        {/* Left — category eyebrow */}
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-mocha)',
        }}>
          Personal Blog
        </span>

        {/* Center — logotype */}
        <Link to="/blogs" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          color: 'var(--color-espresso)',
          textDecoration: 'none',
          lineHeight: 1,
        }}>
          MAXIM
        </Link>

        {/* Right — nav links */}
        <nav style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-8)', alignItems: 'center' }}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: isActive ? 'var(--color-jungle)' : 'var(--color-walnut)',
                textDecoration: 'none',
                borderBottom: isActive ? '1px solid var(--color-jungle)' : '1px solid transparent',
                paddingBottom: '2px',
                transition: 'color var(--dur-base)',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom hairline rule */}
      <Divider />
    </header>
  )
}
