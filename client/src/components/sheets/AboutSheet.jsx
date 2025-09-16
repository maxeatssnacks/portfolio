import { useState, useEffect } from 'react'
import MaximumTenzChart from '../MaximumTenzChart'

const AboutSheet = () => {
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('/api/about')
        if (response.ok) {
          const contentType = response.headers.get('content-type')
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json()
            setAboutData(data)
          } else {
            // Server returned HTML instead of JSON (likely 404 or server not running)
            console.log('Server not running, using default data')
            setAboutData(null)
          }
        } else {
          console.log('API not available, using default data')
          setAboutData(null)
        }
      } catch (error) {
        console.log('Error fetching about data, using default data:', error.message)
        setAboutData(null)
      }
    }

    fetchAboutData()
  }, [])

  return (
    <div className="about-sheet" style={{ position: 'relative', height: '100%' }}>
      <MaximumTenzChart />
    </div>
  )
}

export default AboutSheet
