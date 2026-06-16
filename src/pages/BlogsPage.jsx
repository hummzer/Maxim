// STRUCTURE:
// 1. Editorial section header (full-width text banner "Journal")
// 2. Category filter pills
// 3. Featured card (first featured post)
// 4. Horizontal divider with section label "All Essays"
// 5. BlogGrid of remaining posts
//
// State: activeCategory (string | null)
// Filtering: if activeCategory is set, filter BLOGS by category
//            featured post = first in filtered list; rest go to grid

import { useState } from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import Divider from '../components/ui/Divider'
import Tag from '../components/ui/Tag'
import BlogCardFeatured from '../components/blog/BlogCardFeatured'
import BlogGrid from '../components/blog/BlogGrid'
import ScrollReveal from '../components/ui/ScrollReveal'
import { BLOGS } from '../data/blogs'
import { CATEGORIES } from '../data/categories'

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState(null)

  const filtered = activeCategory
    ? BLOGS.filter(p => p.category === activeCategory)
    : BLOGS

  const featured = filtered.find(p => p.featured) || filtered[0]
  const rest = filtered.filter(p => p.id !== featured?.id)

  const toggleCategory = (id) => setActiveCategory(prev => prev === id ? null : id)

  return (
    <div style={{ paddingTop: 'var(--space-12)' }}>
      <PageWrapper>
        {/* Section splash header */}
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--color-mocha)', marginBottom: 'var(--space-2)',
            }}>
              Personal Blog
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: 900,
              color: 'var(--color-espresso)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-6)',
            }}>
              Blog
            </h1>
            <Divider />
          </div>
        </ScrollReveal>

        {/* Category filter pills */}
        <ScrollReveal delay={100}>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-10)' }}>
            <Tag
              label="All"
              active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
            />
            {CATEGORIES.map(cat => (
              <Tag
                key={cat.id}
                label={cat.label}
                active={activeCategory === cat.id}
                onClick={() => toggleCategory(cat.id)}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Featured post */}
        {featured && (
          <ScrollReveal delay={150}>
            <BlogCardFeatured post={featured} />
          </ScrollReveal>
        )}

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', margin: 'var(--space-12) 0 var(--space-8)' }}>
          <Divider style={{ flex: 1 }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--color-mocha)', whiteSpace: 'nowrap',
          }}>
            All Essays
          </span>
          <Divider style={{ flex: 1 }} />
        </div>

        {/* Blog grid */}
        {rest.length > 0 ? (
          <BlogGrid posts={rest} />
        ) : (
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-mocha)', textAlign: 'center', padding: 'var(--space-16) 0' }}>
            Nothing here yet in this category.
          </p>
        )}
      </PageWrapper>
    </div>
  )
}
