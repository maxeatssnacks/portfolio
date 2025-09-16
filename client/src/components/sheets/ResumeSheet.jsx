import { useState, useEffect, useRef } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, RadialLinearScale, PointElement, LineElement, BarElement, BarController, RadarController, Title, Tooltip, Legend } from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  RadarController,
  Title,
  Tooltip,
  Legend
)

const ResumeSheet = () => {
  const [resumeData, setResumeData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const skillsChartRef = useRef(null)
  const skillsChartInstance = useRef(null)

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('http://localhost:3001/api/resume')
        if (response.ok) {
          const data = await response.json()
          setResumeData(data)
        } else {
          console.error('Failed to fetch resume data:', response.status)
          // Set fallback data to ensure the component renders
          setResumeData({ name: 'Robert Rautenkranz' })
        }
      } catch (error) {
        console.error('Error fetching resume data:', error)
        // Set fallback data to ensure the component renders
        setResumeData({ name: 'Robert Rautenkranz' })
      } finally {
        setIsLoading(false)
      }
    }

    fetchResumeData()
  }, [])

  useEffect(() => {
    if (skillsChartRef.current) {
      if (skillsChartInstance.current) {
        skillsChartInstance.current.destroy()
        skillsChartInstance.current = null
      }

      const ctx = skillsChartRef.current.getContext('2d')

      skillsChartInstance.current = new ChartJS(ctx, {
        type: 'radar',
        data: {
          labels: [
            'ClickUp', 'Airtable', 'Claude AI', 'JavaScript', 'Python', 'React',
            'SQL', 'GitHub', 'CSS', 'PostgreSQL', 'Figma', 'Playwright',
            'Excel', 'NetSuite'
          ],
          datasets: [{
            label: '',
            data: [1, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 3, 1],
            backgroundColor: 'rgba(68, 114, 196, 0.2)',
            borderColor: 'rgba(68, 114, 196, 0.4)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(68, 114, 196, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 30,
              bottom: 30,
              left: 30,
              right: 30
            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            r: {
              beginAtZero: true,
              max: 3,
              min: 0,
              innerRadius: 0.4,
              ticks: {
                stepSize: 1,
                font: {
                  size: 12,
                  family: 'Calibri, Arial, sans-serif'
                },
                callback: function (value) {
                  const labels = ['', 'Novice', 'Adept', 'Proficient']
                  return labels[value] || ''
                },
                padding: 25,
                z: 10
              },
              pointLabels: {
                font: {
                  size: 11,
                  family: 'Calibri, Arial, sans-serif',
                  weight: 'bold'
                },
                rotation: 90,
                padding: 20,
                z: 5
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
                z: 1
              },
              angleLines: {
                color: 'rgba(0, 0, 0, 0.1)',
                z: 1
              }
            }
          }
        }
      })
    }

    return () => {
      if (skillsChartInstance.current) {
        skillsChartInstance.current.destroy()
        skillsChartInstance.current = null
      }
    }
  }, [isLoading]) // Re-render chart when loading state changes

  if (isLoading) {
    return (
      <div style={{
        padding: '10px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        fontSize: '14px',
        color: '#666'
      }}>
        Loading resume data...
      </div>
    )
  }

  return (
    <div style={{
      padding: '10px',
      backgroundColor: 'transparent',
      paddingBottom: '40px'
    }}>
      {/* Professional Experience Table - Full Width at Top */}
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #a6a6a6',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '15px'
      }}>
        <div style={{
          background: 'linear-gradient(180deg, #f0f0f0 0%, #e0e0e0 100%)',
          borderBottom: '1px solid #a6a6a6',
          padding: '10px 20px',
          fontWeight: 'bold',
          fontSize: '14px',
          color: '#333'
        }}>
          Professional Experience
        </div>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '11px',
          fontFamily: 'Calibri, Arial, sans-serif'
        }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #a6a6a6', padding: '6px 8px', textAlign: 'left', fontWeight: 'bold', width: '15%' }}>Company</th>
              <th style={{ border: '1px solid #a6a6a6', padding: '6px 8px', textAlign: 'left', fontWeight: 'bold', width: '20%' }}>Position</th>
              <th style={{ border: '1px solid #a6a6a6', padding: '6px 8px', textAlign: 'left', fontWeight: 'bold', width: '15%' }}>Duration</th>
              <th style={{ border: '1px solid #a6a6a6', padding: '6px 8px', textAlign: 'left', fontWeight: 'bold', width: '50%' }}>Achievement</th>
            </tr>
          </thead>
          <tbody>
            {/* Capswan - Product Manager */}
            <tr>
              <td style={{
                backgroundColor: '#f6f8fa',
                fontWeight: 'bold',
                borderLeft: '3px solid #4472c4',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top'
              }}>Capswan</td>
              <td style={{
                backgroundColor: '#f9f9f9',
                fontWeight: '600',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top'
              }}>Product Manager</td>
              <td style={{
                backgroundColor: '#f9f9f9',
                fontWeight: '500',
                color: '#666',
                fontStyle: 'italic',
                whiteSpace: 'nowrap',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top'
              }}>June 2023 - Present</td>
              <td style={{
                lineHeight: '1.3',
                width: '600px',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top',
                backgroundColor: 'white'
              }}>
                <div style={{
                  marginBottom: '6px',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#4472c4',
                    fontWeight: 'bold'
                  }}>•</span>
                  Developed collaborative trading feature using Agile/Scrum methodologies, delivering automated trade execution capabilities based on group signals through custom workflow automations
                </div>
                <div style={{
                  marginBottom: '6px',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#4472c4',
                    fontWeight: 'bold'
                  }}>•</span>
                  Led the creation of the product roadmap, prioritizing features based on market research and user feedback, resulting in a successful product launch
                </div>
                <div style={{
                  marginBottom: '6px',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#4472c4',
                    fontWeight: 'bold'
                  }}>•</span>
                  Implemented comprehensive testing infrastructure using Playwright and Claude, reducing <span style={{
                    backgroundColor: '#fff2cc',
                    padding: '1px 4px',
                    borderRadius: '3px',
                    fontWeight: '600',
                    color: '#d73a49'
                  }}>deployment time by 40%</span> while achieving a <span style={{
                    backgroundColor: '#fff2cc',
                    padding: '1px 4px',
                    borderRadius: '3px',
                    fontWeight: '600',
                    color: '#d73a49'
                  }}>90% test coverage</span>
                </div>
              </td>
            </tr>

            {/* National Assemblers - Operations & Business Development Manager */}
            <tr>
              <td style={{
                backgroundColor: '#f6f8fa',
                fontWeight: 'bold',
                borderLeft: '3px solid #4472c4',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top'
              }}>National Assemblers</td>
              <td style={{
                backgroundColor: '#f9f9f9',
                fontWeight: '600',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top'
              }}>Operations & Business Development Manager</td>
              <td style={{
                backgroundColor: '#f9f9f9',
                fontWeight: '500',
                color: '#666',
                fontStyle: 'italic',
                whiteSpace: 'nowrap',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top'
              }}>February 2020 - Present</td>
              <td style={{
                lineHeight: '1.3',
                width: '600px',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top',
                backgroundColor: 'white'
              }}>
                <div style={{
                  marginBottom: '6px',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#4472c4',
                    fontWeight: 'bold'
                  }}>•</span>
                  Built and launched In-Home Services business unit from concept to market, generating <span style={{
                    backgroundColor: '#fff2cc',
                    padding: '1px 4px',
                    borderRadius: '3px',
                    fontWeight: '600',
                    color: '#d73a49'
                  }}>$7M in annual revenue</span> within first year
                </div>
                <div style={{
                  marginBottom: '6px',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#4472c4',
                    fontWeight: 'bold'
                  }}>•</span>
                  Accelerated business development by designing automated onboarding process using Airtable, webhooks, and APIs
                </div>
                <div style={{
                  marginBottom: '6px',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#4472c4',
                    fontWeight: 'bold'
                  }}>•</span>
                  Optimized operational efficiency by <span style={{
                    backgroundColor: '#fff2cc',
                    padding: '1px 4px',
                    borderRadius: '3px',
                    fontWeight: '600',
                    color: '#d73a49'
                  }}>25%</span> through implementation of Urbantz logistics platform for route optimization and scheduling across dozens of metropolitans and hundreds of drivers
                </div>
                <div style={{
                  marginBottom: '6px',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#4472c4',
                    fontWeight: 'bold'
                  }}>•</span>
                  Drove <span style={{
                    backgroundColor: '#fff2cc',
                    padding: '1px 4px',
                    borderRadius: '3px',
                    fontWeight: '600',
                    color: '#d73a49'
                  }}>15% improvement in first-time resolution rates</span> by leading cross-functional teams to implement gamified training programs
                </div>
              </td>
            </tr>

            {/* National Assemblers - Business Analyst */}
            <tr>
              <td style={{
                backgroundColor: '#f6f8fa',
                fontWeight: 'bold',
                borderLeft: '3px solid #4472c4',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top'
              }}>National Assemblers</td>
              <td style={{
                backgroundColor: '#f9f9f9',
                fontWeight: '600',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top'
              }}>Business Analyst</td>
              <td style={{
                backgroundColor: '#f9f9f9',
                fontWeight: '500',
                color: '#666',
                fontStyle: 'italic',
                whiteSpace: 'nowrap',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top'
              }}>May 2017 - February 2020</td>
              <td style={{
                lineHeight: '1.3',
                width: '600px',
                border: '1px solid #d0d0d0',
                borderRight: '1px solid #808080',
                borderBottom: '1px solid #808080',
                padding: '3px 8px',
                verticalAlign: 'top',
                backgroundColor: 'white'
              }}>
                <div style={{
                  marginBottom: '6px',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#4472c4',
                    fontWeight: 'bold'
                  }}>•</span>
                  Developed data-driven sales prediction models that improved forecast accuracy to <span style={{
                    backgroundColor: '#fff2cc',
                    padding: '1px 4px',
                    borderRadius: '3px',
                    fontWeight: '600',
                    color: '#d73a49'
                  }}>95%</span>, resulting in <span style={{
                    backgroundColor: '#fff2cc',
                    padding: '1px 4px',
                    borderRadius: '3px',
                    fontWeight: '600',
                    color: '#d73a49'
                  }}>15% higher technician utilization rates</span>
                </div>
                <div style={{
                  marginBottom: '6px',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#4472c4',
                    fontWeight: 'bold'
                  }}>•</span>
                  Created regional workforce management system that reduced employee turnover by <span style={{
                    backgroundColor: '#fff2cc',
                    padding: '1px 4px',
                    borderRadius: '3px',
                    fontWeight: '600',
                    color: '#d73a49'
                  }}>5%</span>, saving approximately <span style={{
                    backgroundColor: '#fff2cc',
                    padding: '1px 4px',
                    borderRadius: '3px',
                    fontWeight: '600',
                    color: '#d73a49'
                  }}>$100k annually</span> in hiring and training costs
                </div>
                <div style={{
                  marginBottom: '6px',
                  paddingLeft: '15px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#4472c4',
                    fontWeight: 'bold'
                  }}>•</span>
                  Built KPI dashboards providing real-time visibility into key performance metrics, enabling field teams to make faster, data-driven decisions
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
        {/* Left Column - Education & Download */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center' }}>
          {/* Education & Certifications Table */}
          <div style={{
            backgroundColor: 'white',
            border: '1px solid #a6a6a6',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              background: 'linear-gradient(180deg, #f0f0f0 0%, #e0e0e0 100%)',
              borderBottom: '1px solid #a6a6a6',
              padding: '10px 20px',
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#333'
            }}>
              Education & Certifications
            </div>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '11px',
              fontFamily: 'Calibri, Arial, sans-serif'
            }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #a6a6a6', padding: '6px 8px', textAlign: 'left', fontWeight: 'bold' }}>Institution</th>
                  <th style={{ border: '1px solid #a6a6a6', padding: '6px 8px', textAlign: 'left', fontWeight: 'bold' }}>Degree/Certification</th>
                  <th style={{ border: '1px solid #a6a6a6', padding: '6px 8px', textAlign: 'left', fontWeight: 'bold' }}>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #a6a6a6', padding: '6px 8px' }}>Springboard</td>
                  <td style={{ border: '1px solid #a6a6a6', padding: '6px 8px' }}>
                    Software Engineering Certificate
                    <div style={{ marginTop: '3px', fontSize: '10px', color: '#666' }}>
                      • 700+ hours of hands-on course material, with 1:1 industry expert mentor oversight, and completion of 4 in-depth portfolio projects.<br />
                      • Completed training and projects involving Javascript, DOM Manipulation, Git, Ajax, jQuery, Python, Flask, SQL, PostgreSQL, Node, Express, React, and Redux.
                    </div>
                  </td>
                  <td style={{ border: '1px solid #a6a6a6', padding: '6px 8px' }}>2023 - 2024</td>
                </tr>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ border: '1px solid #a6a6a6', padding: '6px 8px' }}>University of Florida</td>
                  <td style={{ border: '1px solid #a6a6a6', padding: '6px 8px' }}>
                    Bachelor of Science, Biomedical Engineering
                    <div style={{ marginTop: '3px', fontSize: '10px', color: '#666' }}>
                      • Dean's List<br />
                      • Undergraduate Research (Surfactants)<br />
                      • RecSports Flag Football Referee<br />
                      • J.M. Rubin Scholar<br />
                      • G.R.iP (Customized 3D Printed Prosthetics for Children)
                    </div>
                  </td>
                  <td style={{ border: '1px solid #a6a6a6', padding: '6px 8px' }}>2013 - 2017</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PDF Download Section */}
          <div style={{
            backgroundColor: 'white',
            border: '1px solid #a6a6a6',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            padding: '15px',
            textAlign: 'center'
          }}>
            <div style={{
              background: 'linear-gradient(180deg, #f0f0f0 0%, #e0e0e0 100%)',
              borderBottom: '1px solid #a6a6a6',
              padding: '10px 20px',
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#333',
              marginBottom: '15px',
              marginTop: '-15px',
              marginLeft: '-15px',
              marginRight: '-15px'
            }}>
              Download Resume
            </div>
            <button
              onClick={() => window.open('/Robert_Rautenkranz.pdf', '_blank')}
              style={{
                backgroundColor: '#4472c4',
                color: 'white',
                border: '1px solid #4472c4',
                padding: '8px 16px',
                fontSize: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                borderRadius: '3px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontFamily: 'Calibri, Arial, sans-serif'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#3a5f9e';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#4472c4';
              }}
            >
              📄 Download PDF Resume
            </button>
          </div>
        </div>

        {/* Right Column - Skills Radar Chart */}
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #a6a6a6',
          overflow: 'hidden',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '15px',
          flex: '1',
          height: 'fit-content'
        }}>
          <div style={{
            background: 'linear-gradient(180deg, #f0f0f0 0%, #e0e0e0 100%)',
            borderBottom: '1px solid #a6a6a6',
            padding: '10px 20px',
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#333',
            marginBottom: '15px',
            marginTop: '-15px',
            marginLeft: '-15px',
            marginRight: '-15px'
          }}>
            Skills
          </div>
          <div style={{ height: '280px', position: 'relative' }}>
            <canvas ref={skillsChartRef} style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeSheet
