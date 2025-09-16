export default function handler(req, res) {
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
}
