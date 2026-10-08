import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Client-side route changes keep the old scroll position; reset it like a normal page load.
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default ScrollToTop
