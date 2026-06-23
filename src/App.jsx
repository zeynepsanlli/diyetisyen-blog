import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'

function App() {
  return (
    <BrowserRouter basename="/diyetisyen-blog">
      <div className="app-shell">
        <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimda" element={<About />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
