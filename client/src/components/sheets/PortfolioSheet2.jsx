import { useState, useEffect } from 'react'

const PortfolioSheet2 = () => {
  const [portfolio, setPortfolio] = useState([])
  const [isExpanded, setIsExpanded] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const websiteImages = [
    {
      src: '/property-appraisal-tool-landing-page.png',
      alt: 'Property Appraisal Tool Landing Page',
      title: 'Landing Page'
    },
    {
      src: '/property-appraisal-tool-new-property.png',
      alt: 'Property Appraisal Tool New Property Form',
      title: 'New Property Form'
    },
    {
      src: '/property-appraisal-tool-property-details.png',
      alt: 'Property Appraisal Tool Property Details',
      title: 'Property Details'
    },
    {
      src: '/property-appraisal-tool-document-downloads.png',
      alt: 'Property Appraisal Tool Document Downloads',
      title: 'Document Downloads'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === websiteImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? websiteImages.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio')
        const data = await response.json()
        setPortfolio(data)
      } catch (error) {
        console.error('Error fetching portfolio:', error)
        // Fallback data for Property Appraisal Tool
        setPortfolio([
          {
            title: 'Property Appraisal Tool',
            description: 'An automated property valuation and appraisal system.',
            technologies: ['Python', 'Flask', 'PostgreSQL', 'Machine Learning', 'APIs'],
            link: 'https://github.com/username/property-appraisal'
          }
        ])
      }
    }

    fetchPortfolio()
  }, [])

  return (
    <div style={{
      padding: '10px',
      backgroundColor: 'transparent'
    }}>
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #a6a6a6',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <div
          style={{
            background: 'linear-gradient(180deg, #f0f0f0 0%, #e0e0e0 100%)',
            borderBottom: isExpanded ? '1px solid #a6a6a6' : 'none',
            padding: '12px 20px',
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#333',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>Property Appraisal Tool</span>
          <span style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#4472c4'
          }}>
            {isExpanded ? '−' : '+'}
          </span>
        </div>

        {isExpanded && (
          <div style={{ padding: '20px' }}>
            {/* Project Overview Section */}
            <div style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #d0d0d0',
              marginBottom: '15px',
              borderRadius: '3px',
              padding: '15px'
            }}>
              <h3 style={{
                margin: '0 0 10px 0',
                color: '#4472c4',
                fontSize: '16px',
                fontFamily: 'Calibri, Arial, sans-serif'
              }}>
                Project Overview
              </h3>
              <p style={{
                margin: '0',
                fontSize: '12px',
                lineHeight: '1.4',
                fontFamily: 'Calibri, Arial, sans-serif'
              }}>
                An intelligent property valuation system that leverages machine learning algorithms to provide accurate property appraisals. The tool analyzes market data, property characteristics, and comparable sales to generate comprehensive valuation reports for real estate professionals.
              </p>
            </div>

            {/* Key Features and Technologies - stack on mobile */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', flexWrap: 'wrap' }}>
              {/* Key Features Section */}
              <div style={{
                backgroundColor: '#f9f9f9',
                border: '1px solid #d0d0d0',
                borderRadius: '3px',
                padding: '15px',
                flex: '1 1 320px'
              }}>
                <h3 style={{
                  margin: '0 0 10px 0',
                  color: '#4472c4',
                  fontSize: '16px',
                  fontFamily: 'Calibri, Arial, sans-serif'
                }}>
                  Key Features
                </h3>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <ul style={{
                    margin: '0',
                    paddingLeft: '20px',
                    fontSize: '12px',
                    lineHeight: '1.4',
                    fontFamily: 'Calibri, Arial, sans-serif',
                    flex: '1'
                  }}>
                    <li style={{ marginBottom: '4px' }}>• Smart data collection from multiple sources</li>
                    <li style={{ marginBottom: '4px' }}>• AI-powered property information validation</li>
                    <li style={{ marginBottom: '4px' }}>• Automated PDF report generation</li>
                  </ul>
                  <ul style={{
                    margin: '0',
                    paddingLeft: '20px',
                    fontSize: '12px',
                    lineHeight: '1.4',
                    fontFamily: 'Calibri, Arial, sans-serif',
                    flex: '1'
                  }}>
                    <li style={{ marginBottom: '4px' }}>• Real-time market data integration</li>
                    <li style={{ marginBottom: '4px' }}>• Professional appraisal templates</li>
                    <li style={{ marginBottom: '4px' }}>• Multi-source data validation</li>
                  </ul>
                </div>
              </div>

              {/* Technologies Used Section */}
              <div style={{
                backgroundColor: '#f9f9f9',
                border: '1px solid #d0d0d0',
                borderRadius: '3px',
                padding: '15px',
                flex: '1 1 320px'
              }}>
                <h3 style={{
                  margin: '0 0 10px 0',
                  color: '#4472c4',
                  fontSize: '16px',
                  fontFamily: 'Calibri, Arial, sans-serif'
                }}>
                  Technologies Used
                </h3>
                <div style={{
                  fontSize: '12px',
                  lineHeight: '1.4',
                  fontFamily: 'Calibri, Arial, sans-serif'
                }}>
                  <strong>Frontend:</strong> React 18, Vite, Tailwind CSS, React Router DOM, Axios, Lucide React<br />
                  <strong>Backend:</strong> Node.js, Express.js, PostgreSQL, Nodemailer, Airtable API<br />
                  <strong>AI/ML:</strong> Python, TensorFlow, Scikit-learn, Pandas<br />
                  <strong>Data Sources:</strong> County Records API, MLS Database, Public Records API<br />
                  <strong>Deployment:</strong> Heroku, AWS S3<br />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Website Images Section - Below Project Information */}
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #a6a6a6',
        marginBottom: '20px',
        borderRadius: '3px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          margin: '0 0 15px 0',
          color: '#4472c4',
          fontSize: '16px',
          fontFamily: 'Calibri, Arial, sans-serif',
          fontWeight: 'bold'
        }}>
          Website Development Process
        </h3>
        <div style={{ display: 'flex', gap: '80px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Wireframe Image */}
          <div style={{ flex: '1 1 300px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '300px' }}>
            <h4 style={{
              margin: '0 0 10px 0',
              color: '#333',
              fontSize: '14px',
              fontFamily: 'Calibri, Arial, sans-serif',
              fontWeight: 'bold',
              height: '20px',
              lineHeight: '20px'
            }}>
              Wireframe Design
            </h4>
            <img
              src="/property-appraisal-tool-wireframe.png"
              alt="Wireframe Design"
              style={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                border: '1px solid #ccc',
                maxHeight: '300px',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Final Website - Carousel */}
          <div style={{ flex: '1 1 300px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '300px' }}>
            <h4 style={{
              margin: '0 0 10px 0',
              color: '#333',
              fontSize: '14px',
              fontFamily: 'Calibri, Arial, sans-serif',
              fontWeight: 'bold',
              height: '20px',
              lineHeight: '20px'
            }}>
              Final Website
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              {/* Previous Button */}
              <button
                onClick={prevImage}
                style={{
                  background: '#f0f0f0',
                  color: '#000',
                  border: '2px solid #d0d0d0',
                  borderRadius: '4px',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                  flexShrink: 0
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#e8e8e8';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#f0f0f0';
                }}
              >
                ‹
              </button>

              {/* Image Container */}
              <div style={{
                position: 'relative',
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                minHeight: '200px',
                maxHeight: '400px',
                overflow: 'hidden',
                border: '1px solid #ccc',
                flex: 1
              }}>
                <img
                  src={websiteImages[currentImageIndex].src}
                  alt={websiteImages[currentImageIndex].alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />

                {/* Image Title */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  right: '10px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '3px',
                  fontSize: '12px',
                  textAlign: 'center'
                }}>
                  {websiteImages[currentImageIndex].title}
                </div>

                {/* Dots Indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '5px'
                }}>
                  {websiteImages.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: index === currentImageIndex ? 'rgba(68, 114, 196, 0.8)' : 'rgba(255, 255, 255, 0.5)',
                        cursor: 'pointer'
                      }}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                style={{
                  background: '#f0f0f0',
                  color: '#000',
                  border: '2px solid #d0d0d0',
                  borderRadius: '4px',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                  flexShrink: 0
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#e8e8e8';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#f0f0f0';
                }}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSheet2
