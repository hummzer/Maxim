// Vertical timeline of daily highlight groups
// Each group: date header → list of HighlightCards separated by thin lines

import HighlightCard from './HighlightCard'
import Divider from '../ui/Divider'
import ScrollReveal from '../ui/ScrollReveal'

export default function HighlightTimeline({ highlights }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
      {highlights.map((day) => (
        <ScrollReveal key={day.id}>
          <section>
            {/* Date header */}
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 'var(--space-4)',
              marginBottom: 'var(--space-8)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                color: 'var(--color-espresso)',
              }}>
                {day.dayLabel}
              </h3>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-mocha)',
                letterSpacing: '0.08em',
              }}>
                {new Date(day.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            {/* Entries */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {day.entries.map((entry, i) => (
                <div key={i}>
                  <HighlightCard entry={entry} />
                  {i < day.entries.length - 1 && <Divider style={{ marginTop: 'var(--space-6)' }} />}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      ))}
    </div>
  )
}
