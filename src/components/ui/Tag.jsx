// Category chip — jungle green tint background
export default function Tag({ label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        borderRadius: '2px',
        fontSize: 'var(--text-xs)',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        background: active ? 'var(--color-jungle)' : 'var(--color-mist)',
        color: active ? 'var(--color-parchment)' : 'var(--color-jungle)',
        border: `1px solid ${active ? 'var(--color-jungle)' : 'var(--color-mist)'}`,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all var(--dur-base) var(--ease-out)',
      }}
    >
      {label}
    </button>
  )
}
