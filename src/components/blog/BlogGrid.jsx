// Responsive 2-col grid of BlogCard components
import BlogCard from './BlogCard'

export default function BlogGrid({ posts }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: 'var(--space-6)',
    }}>
      {posts.map((post, i) => (
        <BlogCard key={post.id} post={post} delay={i * 80} />
      ))}
    </div>
  )
}
