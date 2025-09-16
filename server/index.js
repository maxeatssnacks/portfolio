const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/about', (req, res) => {
    res.json({
        name: 'Robert Rautenkranz',
        title: 'Product Manager & Business Analyst',
        description: 'Experienced product manager and business analyst with a strong background in data analysis, business development, and software engineering. Passionate about leveraging technology to drive business growth and operational efficiency.',
        skills: ['Product Management', 'Data Analysis', 'Business Development', 'Python', 'React', 'SQL', 'Excel', 'Automation'],
        education: 'Bachelor of Science, Biomedical Engineering',
        location: 'Dallas, Texas'
    });
});

app.get('/api/resume', (req, res) => {
    res.json({
        experience: [
            {
                company: 'Capswan',
                position: 'Product Manager',
                duration: 'June 2023 - Present',
                location: 'Remote',
                description: 'Developed collaborative trading feature enabling automated trade execution based on group signals passing through custom workflow automations. Led end-to-end redesign and launch of V2 platform, resulting in 40% increase in daily active users and 25% reduction in user onboarding time. Implemented comprehensive testing infrastructure using Playwright and Claude, reducing deployment time by 40% while achieving a 90% test coverage.',
                technologies: ['Playwright', 'Claude AI', 'Product Management', 'Automation', 'Testing']
            },
            {
                company: 'National Assemblers',
                position: 'Operations & Business Development Manager',
                duration: 'February 2020 - Present',
                location: 'Remote',
                description: 'Generated $7M annual revenue by developing and launching a new In-Home Services business unit from concept to market. Assisted the VP and CEO with expediting business development by creating a standardized onboarding process that utilize Airtable, webhooks, and APIs. Increased operation efficiency by 25% by implementing Urbantz, a logistics SaaS platform, for route optimization and scheduling. Led cross-functional teams to achieve 15% improvement in first-time resolution rate through implementation of gamified training programs.',
                technologies: ['Airtable', 'APIs', 'Webhooks', 'Logistics', 'SaaS', 'Business Development']
            },
            {
                company: 'National Assemblers',
                position: 'Business Analyst',
                duration: 'May 2017 - February 2020',
                location: 'Boynton Beach, Florida',
                description: 'Improved forecast accuracy to 95% through development of data-driven sales prediction models. Reduced employee turnover by 5% through creation of innovative regional workforce management system, saving approximately $100k annually in hiring costs. Implemented KPI dashboards that provided real-time visibility into key metrics, allowing for field teams to create quicker and better informed decisions.',
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
                achievements: 'Dean\'s List, Undergraduate Research (Surfactants), RecSports Flag Football Referee, J.M. Rubin Scholar, G.R.i.P (Customized 3d Printed Prosthetics for Children)'
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
});

app.get('/api/portfolio', (req, res) => {
    res.json([
        {
            title: 'E-commerce Platform',
            description: 'A full-stack e-commerce application with user authentication, product management, and payment processing.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: '/portfolio/ecommerce.jpg',
            link: 'https://github.com/username/ecommerce'
        },
        {
            title: 'Data Visualization Dashboard',
            description: 'Interactive dashboard for displaying and analyzing business metrics with real-time data updates.',
            technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
            image: '/portfolio/dashboard.jpg',
            link: 'https://github.com/username/dashboard'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates and team collaboration features.',
            technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
            image: '/portfolio/taskapp.jpg',
            link: 'https://github.com/username/taskapp'
        }
    ]);
});

// Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
