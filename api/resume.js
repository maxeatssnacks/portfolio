export default function handler(req, res) {
  res.json({
    experience: [
      {
        company: 'Capswan',
        position: 'Product Manager',
        duration: 'June 2023 - Present',
        location: 'Remote',
        description: 'Developed collaborative trading feature using Agile/Scrum methodologies, delivering automated trade execution capabilities based on group signals through custom workflow automations. Led the creation of the product roadmap, prioritizing features based on market research and user feedback, resulting in a successful product launch. Implemented comprehensive testing infrastructure using Playwright and Claude, reducing deployment time by 40% while achieving a 90% test coverage.',
        technologies: ['Playwright', 'Claude AI', 'Product Management', 'Automation', 'Testing']
      },
      {
        company: 'National Assemblers',
        position: 'Operations & Business Development Manager',
        duration: 'February 2020 - Present',
        location: 'Remote',
        description: 'Built and launched In-Home Services business unit from concept to market, generating $7M in annual revenue within first year. Accelerated business development by designing automated onboarding process using Airtable, webhooks, and APIs. Optimized operational efficiency by 25% through implementation of Urbantz logistics platform for route optimization and scheduling across dozens of metropolitans and hundreds of drivers. Drove 15% improvement in first-time resolution rates by leading cross-functional teams to implement gamified training programs.',
        technologies: ['Airtable', 'APIs', 'Webhooks', 'Logistics', 'SaaS', 'Business Development']
      },
      {
        company: 'National Assemblers',
        position: 'Business Analyst',
        duration: 'May 2017 - February 2020',
        location: 'Boynton Beach, Florida',
        description: 'Developed data-driven sales prediction models that improved forecast accuracy to 95%, resulting in 15% higher technician utilization rates. Created regional workforce management system that reduced employee turnover by 5%, saving approximately $100k annually in hiring and training costs. Built KPI dashboards providing real-time visibility into key performance metrics, enabling field teams to make faster, data-driven decisions.',
        technologies: ['Data Analysis', 'Sales Prediction', 'KPI Dashboards', 'Workforce Management']
      }
    ],
    education: [
      {
        degree: 'Software Engineering Certificate',
        school: 'Springboard',
        year: 'November 2024',
        location: 'Online'
      },
      {
        degree: 'Bachelor of Science, Biomedical Engineering',
        school: 'University of Florida',
        year: '2013 - 2017',
        location: 'Gainesville, Florida',
        achievements: 'Dean\'s List, Undergraduate Research (Surfactants), RecSports Flag Football Referee, J.M. Rubin Scholar, G.R.iP (Customized 3d Printed Prosthetics for Children)'
      }
    ],
    skills: {
      technical: ['Excel (Pivot Tables, Power Query, Custom Formulas)', 'Github', 'ClickUp', 'Playwright', 'Claude AI', 'Netsuite', 'Airtable', 'Javascript', 'Python', 'CSS', 'PostgreSQL', 'React', 'Figma', 'SQL'],
      categories: {
        'Data Analysis': ['Excel', 'Power Query', 'SQL', 'PostgreSQL', 'KPI Dashboards'],
        'Development': ['Javascript', 'Python', 'CSS', 'React', 'Github'],
        'Tools & Platforms': ['ClickUp', 'Playwright', 'Claude AI', 'Netsuite', 'Airtable', 'Figma'],
        'Business': ['Product Management', 'Business Development', 'Operations', 'Logistics']
      }
    },
    contact: {
      name: 'Robert Rautenkranz',
      location: 'Dallas, Texas',
      phone: '(561)-676-5624',
      email: 'Robert.rautenkranz@gmail.com',
      linkedin: 'linkedin.com/in/rautenkranz'
    }
  });
}
