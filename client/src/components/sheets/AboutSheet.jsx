import { useState, useEffect } from 'react'
import MaximumTenzChart from '../MaximumTenzChart'

const AboutSheet = () => {
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/about')
        const data = await response.json()
        setAboutData(data)
      } catch (error) {
        console.error('Error fetching about data:', error)
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
