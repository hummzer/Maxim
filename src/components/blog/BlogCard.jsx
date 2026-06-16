// Standard blog card — used in the grid below the featured post
// Layout: image (aspect 4:3) → category tag → title → excerpt → meta
import { Link } from 'react-router-dom'
import BlogMeta from './BlogMeta'
import ScrollReveal from '../ui/ScrollReveal'

export default function BlogCard({ post, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <Link to={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
        <article style={{
          background: 'var(--color-ivory)',
          border: '1px solid var(--color-sand)',
          overflow: 'hidden',
          borderRadius: '2px',
          transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(46,26,14,0.10)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          {/* Image */}
          <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'transform var(--dur-slow) var(--ease-out)',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

          {/* Content */}
          <div style={{ padding: 'var(--space-6)' }}>
            <BlogMeta
              author={post.author}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
            />
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-espresso)',
              lineHeight: 1.25,
              margin: 'var(--space-3) 0 var(--space-2)',
            }}>
              {post.title}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--color-mocha)',
              lineHeight: 1.6,
            }}>
              {post.excerpt}
            </p>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  )
}
