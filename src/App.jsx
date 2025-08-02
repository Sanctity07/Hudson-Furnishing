import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import SitemapPage from './pages/SitemapPage'
import GalleryPage from './pages/GalleryPage'
import Ticker from './components/common/Ticker'
import './App.css'

function App() {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
    city: 'Locating...'
  })

  useEffect(() => {
    // Get user's geolocation if available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCurrentLocation({
            ...currentLocation,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
          
          // Attempt to get city name using reverse geocoding
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
            .then(response => response.json())
            .then(data => {
              if (data.address) {
                const city = data.address.city || data.address.town || data.address.village || 'Unknown'
                setCurrentLocation(prev => ({...prev, city}))
              }
            })
            .catch(() => {
              // If geocoding fails, keep default value
              console.log('Could not determine city name')
            })
        },
        () => {
          console.log('Unable to retrieve your location')
        }
      )
    }
  }, [])

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/Hudson-Furnishings" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Ticker location={currentLocation.city} />
      <Footer />
    </div>
  )
}

export default App