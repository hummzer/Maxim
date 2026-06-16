// Thin ruled line — newspaper style
export default function Divider({ style = {} }) {
  return (
    <hr style={{
      border: 'none',
      borderTop: '1px solid var(--color-sand)',
      width: '100%',
      margin: '0',
      ...style,
    }} />
  )
}
