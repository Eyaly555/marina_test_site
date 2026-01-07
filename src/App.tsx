import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import LessonSpace from './pages/LessonSpace'
import PriceList from './pages/PriceList'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="lessons" element={<LessonSpace />} />
        <Route path="lessons/:subject" element={<LessonSpace />} />
        <Route path="price-list" element={<PriceList />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
