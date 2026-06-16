// Large hero card for the first/featured post
// Layout: full-bleed image left (60%) | text right (40%) — on mobile stacks
// Oversize italic Playfair title, subtitle, excerpt, meta

import { Link } from 'react-router-dom'
import BlogMeta from './BlogMeta'

export default function BlogCardFeatured({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <article className="featured-article" style={{
        gap: '0',
        border: '1px solid var(--color-sand)',
        borderRadius: '2px',
        overflow: 'hidden',
        background: 'var(--color-ivory)',
        marginBottom: 'var(--space-2)',
        minHeight: '480px',
      }}>
        {/* Image panel */}
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: 'transform var(--dur-xslow) var(--ease-out)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* Oversize label */}
          <span style={{
            position: 'absolute', bottom: 'var(--space-6)', left: 'var(--space-6)',
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--color-parchment)', background: 'var(--color-jungle)',
            padding: '4px 10px',
          }}>
            Featured
          </span>
        </div>

        {/* Text panel */}
        <div style={{
          padding: 'var(--space-10)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          gap: 'var(--space-4)',
          borderLeft: '1px solid var(--color-sand)',
        }}>
          <BlogMeta author={post.author} date={post.date} readTime={post.readTime} category={post.category} />

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)',
            fontWeight: 700,
            fontStyle: 'italic',
            color: 'var(--color-espresso)',
            lineHeight: 1.2,
          }}>
            {post.title}
          </h2>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            color: 'var(--color-mocha)',
            fontStyle: 'italic',
            lineHeight: 1.6,
          }}>
            {post.subtitle}
          </p>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            color: 'var(--color-walnut)',
            lineHeight: 1.65,
          }}>
            {post.excerpt}
          </p>

          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
            color: 'var(--color-jungle)', letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Read essay →
          </span>
        </div>
      </article>
    </Link>
  )
}
