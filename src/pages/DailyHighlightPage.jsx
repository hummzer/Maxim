// STRUCTURE:
// 1. Page header — "Daily" splash headline + description
// 2. Divider
// 3. Two-column layout:
//    LEFT (sticky, 280px): What is this? + key:
//       — explains the three entry types (reading, observation, link)
//       — shows color-coded legend
//    RIGHT (scroll): HighlightTimeline of all days
//
// Mobile: stacks vertically, sidebar goes above timeline

import PageWrapper from '../components/layout/PageWrapper'
import Divider from '../components/ui/Divider'
import HighlightTimeline from '../components/highlight/HighlightTimeline'
import ScrollReveal from '../components/ui/ScrollReveal'
import { HIGHLIGHTS } from '../data/highlights'

const LEGEND = [
  { color: 'var(--color-jungle)', label: 'Reading' },
  { color: 'var(--color-mocha)',  label: 'Observed' },
  { color: 'var(--color-sage)',   label: 'Found / Links' },
]

export default function DailyHighlightPage() {
  return (
    <div style={{ paddingTop: 'var(--space-12)' }}>
      <PageWrapper>
        {/* Page header */}
        <ScrollReveal>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--color-mocha)', marginBottom: 'var(--space-2)',
          }}>
            Daily log
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontWeight: 900,
            color: 'var(--color-espresso)',
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            marginBottom: 'var(--space-4)',
          }}>
            Daily
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-md)',
            color: 'var(--color-mocha)',
            fontStyle: 'italic',
            maxWidth: '560px',
            lineHeight: 1.6,
            marginBottom: 'var(--space-8)',
          }}>
            Small notes from each day. Things I read, noticed, or want to remember. Not essays — fragments.
          </p>
          <Divider />
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="daily-layout" style={{
          gap: 'var(--space-16)',
          paddingTop: 'var(--space-12)',
          alignItems: 'start',
        }}>
          {/* Sidebar — sticky */}
          <aside className="daily-sidebar" style={{ position: 'sticky', top: '100px' }}>
            <ScrollReveal>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--color-mocha)', marginBottom: 'var(--space-4)',
              }}>
                Entry types
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {LEGEND.map(({ color, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div style={{ width: '3px', height: '20px', background: color, borderRadius: '1px', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-walnut)' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <Divider style={{ margin: 'var(--space-8) 0' }} />

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
                color: 'var(--color-mocha)', lineHeight: 1.7, fontStyle: 'italic',
              }}>
                Updated when something is worth keeping. Not every day, but most.
              </p>
            </ScrollReveal>
          </aside>

          {/* Timeline */}
          <div>
            <HighlightTimeline highlights={HIGHLIGHTS} />
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}
