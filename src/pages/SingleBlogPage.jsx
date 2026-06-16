// STRUCTURE:
// 1. Back link "← Journal"
// 2. Category tag + read time
// 3. Oversize italic Playfair title (full-width)
// 4. Subtitle (italic, mocha)
// 5. Byline: author name | date | read time
// 6. Hero image (full-width, aspect 16:9)
// 7. Article body (max-width prose, centered)
// 8. Divider + "More to read" section (2-col grid of other posts)
//
// Body HTML from post.body rendered via dangerouslySetInnerHTML
// Prose styles applied via a .prose class in index.css

import { useParams, Link, Navigate } from 'react-router-dom'
import { BLOGS } from '../data/blogs'
import PageWrapper from '../components/layout/PageWrapper'
import Divider from '../components/ui/Divider'
import BlogMeta from '../components/blog/BlogMeta'
import BlogGrid from '../components/blog/BlogGrid'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function SingleBlogPage() {
  const { slug } = useParams()
  const post = BLOGS.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blogs" replace />

  const others = BLOGS.filter(p => p.id !== post.id).slice(0, 4)

  return (
    <article style={{ paddingTop: 'var(--space-10)' }}>
      <PageWrapper>
        {/* Back link */}
        <Link to="/blogs" style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--color-jungle)', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
          marginBottom: 'var(--space-8)',
          borderBottom: '1px solid var(--color-jungle)',
          paddingBottom: '2px',
        }}>
          ← Journal
        </Link>

        {/* Title block */}
        <ScrollReveal>
          <BlogMeta author={post.author} date={post.date} readTime={post.readTime} category={post.category} />

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            fontStyle: 'italic',
            color: 'var(--color-espresso)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            margin: 'var(--space-6) 0 var(--space-4)',
          }}>
            {post.title}
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-md)',
            color: 'var(--color-mocha)',
            fontStyle: 'italic',
            lineHeight: 1.6,
            maxWidth: 'var(--max-w-prose)',
            marginBottom: 'var(--space-8)',
          }}>
            {post.subtitle}
          </p>
        </ScrollReveal>

        {/* Hero image */}
        <ScrollReveal delay={100}>
          <div style={{
            width: '100%', aspectRatio: '16/7', overflow: 'hidden',
            marginBottom: 'var(--space-12)',
            border: '1px solid var(--color-sand)',
          }}>
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </ScrollReveal>

        {/* Prose body — centered with max-width */}
        <div style={{ maxWidth: 'var(--max-w-prose)', margin: '0 auto' }}>
          <ScrollReveal>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </ScrollReveal>
        </div>

        {/* Divider + More to read */}
        <div style={{ marginTop: 'var(--space-20)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', marginBottom: 'var(--space-10)' }}>
            <Divider style={{ flex: 1 }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--color-mocha)', whiteSpace: 'nowrap',
            }}>
              More to read
            </span>
            <Divider style={{ flex: 1 }} />
          </div>
          <BlogGrid posts={others} />
        </div>
      </PageWrapper>
    </article>
  )
}
