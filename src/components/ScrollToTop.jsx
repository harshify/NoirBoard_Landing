import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there is a hash, don't scroll to top
    if (hash) {
      // Let the hash navigation handle the scrolling
      return;
    }
    
    // Only scroll to top if there's no hash
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop 