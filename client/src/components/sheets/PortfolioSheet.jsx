import { useState, useEffect } from 'react'

const PortfolioSheet = () => {
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/portfolio')
        const data = await response.json()
        setPortfolio(data)
      } catch (error) {
        console.error('Error fetching portfolio:', error)
        // Fallback data
        setPortfolio([
          {
            title: 'E-commerce Platform',
            description: 'A full-stack e-commerce application with user authentication.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            link: 'https://github.com/username/ecommerce'
          }
        ])
      }
    }

    fetchPortfolio()
  }, [])

  return (
    <div className="portfolio-sheet">
      <div className="sheet-content-grid">
        {/* Headers */}
        <div className="content-cell header" style={{ gridArea: 'A1' }}>
          <strong>Project</strong>
        </div>
        <div className="content-cell header" style={{ gridArea: 'B1' }}>
          <strong>Description</strong>
        </div>
        <div className="content-cell header" style={{ gridArea: 'C1' }}>
          <strong>Technologies</strong>
        </div>
        <div className="content-cell header" style={{ gridArea: 'D1' }}>
          <strong>Link</strong>
        </div>

        {/* Portfolio Data */}
        {portfolio.map((project, index) => (
          <div key={index}>
            <div className="content-cell" style={{ gridArea: `A${index + 2}` }}>
              <strong>{project.title}</strong>
            </div>
            <div className="content-cell" style={{ gridArea: `B${index + 2}` }}>
              {project.description}
            </div>
            <div className="content-cell" style={{ gridArea: `C${index + 2}` }}>
              {project.technologies.join(', ')}
            </div>
            <div className="content-cell" style={{ gridArea: `D${index + 2}` }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioSheet
