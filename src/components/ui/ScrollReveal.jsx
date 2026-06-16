import useScrollReveal from '../../hooks/useScrollReveal'

export default function ScrollReveal({ children, delay = 0, style = {} }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
