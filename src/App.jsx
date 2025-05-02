import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Registration from './pages/Registration'
import EventDetails from './pages/EventDetails'
import Rules from './pages/Rules'
import Judging from './pages/Judging'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Sponsors from './pages/Sponsors'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AppInitializer from './components/AppInitializer'

function App() {
  return (
    <AppInitializer>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main className="content main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/event-details" element={<EventDetails />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/judging" element={<Judging />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sponsors" element={<Sponsors />} />
            </Routes>
          </main>
          <Footer />
      </div>
      </Router>
    </AppInitializer>
  )
}

export default App
