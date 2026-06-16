import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ReadingProgress from './components/ui/ReadingProgress'
import BlogsPage from './pages/BlogsPage'
import SingleBlogPage from './pages/SingleBlogPage'
import DailyHighlightPage from './pages/DailyHighlightPage'

export default function App() {
  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/blogs" replace />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<SingleBlogPage />} />
          <Route path="/daily" element={<DailyHighlightPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
