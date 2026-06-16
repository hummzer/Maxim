// Single highlight entry — type-coded with left accent border color
// Types: reading → jungle green | observation → mocha | link → sage

const TYPE_COLORS = {
  reading:     'var(--color-jungle)',
  observation: 'var(--color-mocha)',
  link:        'var(--color-sage)',
}

export default function HighlightCard({ entry }) {
  const accent = TYPE_COLORS[entry.type] || 'var(--color-sand)'

  return (
    <div style={{
      borderLeft: `3px solid ${accent}`,
      paddingLeft: 'var(--space-6)',
      paddingTop: 'var(--space-1)',
      paddingBottom: 'var(--space-4)',
    }}>
      {/* Type label */}
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: accent,
        display: 'block',
        marginBottom: 'var(--space-2)',
      }}>
        {entry.label}
      </span>

      {/* Title */}
      <h4 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-lg)',
        fontWeight: 600,
        color: 'var(--color-espresso)',
        marginBottom: 'var(--space-2)',
        lineHeight: 1.3,
      }}>
        {entry.url
          ? <a href={entry.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: `1px solid ${accent}` }}>{entry.title}</a>
          : entry.title
        }
      </h4>

      {/* Note */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--color-mocha)',
        lineHeight: 1.65,
        fontStyle: 'italic',
      }}>
        {entry.note}
      </p>
    </div>
  )
}
