import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Archived pages - redirect to relevant sections on home page */}
        <Route path="about" element={<Navigate to="/#about" replace />} />
        <Route path="lessons" element={<Navigate to="/#why-us" replace />} />
        <Route path="lessons/:subject" element={<Navigate to="/#why-us" replace />} />
        <Route path="price-list" element={<Navigate to="/#contact" replace />} />
        <Route path="contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
