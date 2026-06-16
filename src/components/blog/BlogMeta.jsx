// Author · Date · Read time line
import Tag from '../ui/Tag'

export default function BlogMeta({ author, date, readTime, category }) {
  const formatted = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
      <Tag label={category} />
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        color: 'var(--color-mocha)',
        letterSpacing: '0.05em',
      }}>
        {formatted} · {readTime} read
      </span>
    </div>
  )
}
