// Newspaper broadsheet footer
// Layout: divider → [MAXIM logotype centered] → [tagline] → [divider] → [bottom row: left copyright | right links]

import { Link } from 'react-router-dom'
import Divider from '../ui/Divider'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-ivory)',
      borderTop: '2px solid var(--color-walnut)',
      marginTop: 'var(--space-24)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: 'var(--space-16) var(--space-8)' }}>
        {/* Center logotype */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: 'var(--color-espresso)',
            opacity: 0.15,
            userSelect: 'none',
          }}>
            MAXIM
          </span>
        </div>

        <p style={{
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-mocha)',
          marginBottom: 'var(--space-12)',
          fontStyle: 'italic',
        }}>
          A personal blog of ideas, observations, and slow thinking.
        </p>

        <Divider style={{ marginBottom: 'var(--space-6)' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-mocha)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} MAXIM
          </span>
          <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
            <Link to="/blogs" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-mocha)', letterSpacing: '0.05em' }}>JOURNAL</Link>
            <Link to="/daily" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-mocha)', letterSpacing: '0.05em' }}>DAILY</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
