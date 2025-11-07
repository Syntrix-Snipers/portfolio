// Syntrix Company Data - Centralized data management
import logoLight from '../../public/logos/logo-light.png'
import logoDark from '../../public/logos/logo-dark.png'

// Helper function to get the appropriate logo based on theme
export const getLogo = (theme) => {
  return theme === 'dark' ? logoDark : logoLight
}

// Company Information
export const company = {
  name: ' ',
  tagline: 'Innovative Software Solutions',
  description: 'We are a cutting-edge software development company specializing in web applications, mobile solutions, and enterprise software.',
  founded: '2020',
  email: 'hey.syntrix@gmail.com',
  phone: '+94 70 151 4279',
  location: 'Sri Lanka',
  social: {
    github: 'https://github.com/Syntrix-Snipers',
    linkedin: 'https://www.linkedin.com/company/109033527/',
    twitter: 'https://twitter.com/syntrix',
    facebook: 'https://facebook.com/syntrix'
  }
}

// About section data
export const about = {
  title: {
    line1: 'Transforming Ideas Into',
    line2: 'Digital Reality'
  },
  description: {
    paragraph1: 'At Syntrix, we specialize in creating innovative software solutions that drive business growth and enhance user experiences. Our team of expert developers combines cutting-edge technology with creative problem-solving to deliver exceptional results.',
    paragraph2: 'From concept to deployment, we work closely with our clients to understand their unique requirements and deliver solutions that exceed expectations. Our agile development process ensures timely delivery and continuous improvement.'
  },
  stats: {
    projects: {
      number: '50+',
      label: 'Projects Completed'
    },
    satisfaction: {
      number: '98%',
      label: 'Client Satisfaction'
    },
    engineers: {
      number: '15+',
      label: 'Expert Engineers'
    },
    experience: {
      number: '5+',
      label: 'Years Experience'
    }
  },
  mission: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.',
  vision: 'To be the leading software development company that transforms ideas into reality through cutting-edge technology and exceptional service.',
  values: [
    {
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to solve complex problems.'
    },
    {
      title: 'Quality',
      description: 'We deliver high-quality solutions that meet the highest industry standards.'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success journey.'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project and client interaction.'
    }
  ]
}

// Navigation data
export const navigation = {
  brand: {
    name: company.name,
    logo: {
      height: '40px',
      alt: `${company.name} Logo`
    },
    href: '#home',
    targetSection: 'hero'
  },
  menuItems: [
    {
      id: 'about',
      label: 'About',
      href: '#about',
      targetSection: 'about',
      description: 'Learn about our mission and values'
    },
    {
      id: 'services',
      label: 'Services',
      href: '#services',
      targetSection: 'services',
      description: 'Explore our development capabilities'
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      href: '#portfolio',
      targetSection: 'portfolio',
      description: 'View our completed projects'
    },
    {
      id: 'team',
      label: 'Team',
      href: '#team',
      targetSection: 'team',
      description: 'Meet our expert developers'
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '#contact',
      targetSection: 'contact',
      description: 'Get in touch with us'
    }
  ],
  actions: {
    theme: {
      lightIcon: 'bi bi-moon',
      darkIcon: 'bi bi-sun',
      title: 'Toggle Theme'
    },
    language: {
      options: [
        { code: 'en', label: 'EN', name: 'English' },
        { code: 'si', label: 'සි', name: 'Sinhala' }
      ],
      title: 'Toggle Language'
    }
  },
  mobile: {
    togglerTarget: '#navbarNav',
    collapseId: 'navbarNav'
  }
}

// Technologies we use
export const technologies = {
  frontend: [
    'React',
    'Vue.js',
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'SASS/SCSS',
    'Bootstrap',
    'Tailwind CSS'
  ],
  backend: [
    'Node.js',
    'Python',
    'Java',
    'C#',
    'PHP',
    'Ruby',
    'Go',
    'Rust',
    'Express.js',
    'Django'
  ],
  database: [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Firebase',
    'DynamoDB',
    'SQLite',
    'Oracle'
  ],
  cloud: [
    'AWS',
    'Google Cloud',
    'Azure',
    'Vercel',
    'Netlify',
    'DigitalOcean',
    'Heroku',
    'Docker'
  ],
  tools: [
    'Git',
    'GitHub',
    'GitLab',
    'Jira',
    'Figma',
    'Adobe XD',
    'Postman',
    'VS Code'
  ]
}

// Services we offer
export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices',
    icon: 'bi bi-code-slash',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Development',
      'Performance Optimization'
    ],
    technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    icon: 'bi bi-phone',
    features: [
      'iOS Development',
      'Android Development',
      'React Native',
      'Flutter',
      'App Store Deployment',
      'Mobile UI/UX Design'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    description: 'Scalable enterprise software solutions for large organizations',
    icon: 'bi bi-building',
    features: [
      'Custom Software Development',
      'System Integration',
      'Legacy System Modernization',
      'Workflow Automation',
      'Data Analytics',
      'Security Implementation'
    ],
    technologies: ['Java', 'C#', '.NET', 'Spring Boot', 'Microservices']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure and deployment solutions for modern applications',
    icon: 'bi bi-cloud',
    features: [
      'Cloud Migration',
      'DevOps Implementation',
      'CI/CD Pipelines',
      'Container Orchestration',
      'Serverless Architecture',
      'Cloud Security'
    ],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
  }
]

// Helper function to get service by ID
export const getServiceById = (id) => {
  return services.find(service => service.id === id)
}

// Team members
export const team = [
  {
    id: 'pasindu-pathum',
    name: 'Pasindu Pathum',
    position: 'Co-Founder & Full-Stack Developer',
    bio: 'Visionary leader with expertise in software development and business strategy.',
    image: '/images/team/pasindu-pathum.jpg',
    skills: ['Leadership', 'Strategy', 'Full-Stack Development'],
    social: {
      linkedin: 'https://linkedin.com/in/pasindupathum',
      github: 'https://github.com/pasindupathum'
    }
  },
  {
    id: 'kavindu-chathuranga',
    name: 'Kavindu Chathuranga',
    position: 'Co-Founder & Full-Stack Developer',
    bio: 'Technical expert specializing in scalable architecture and emerging technologies.',
    image: '/images/team/kavindu-chathuranga.jpg',
    skills: ['Architecture', 'Cloud Computing', 'DevOps', 'Full-Stack Development'],
    social: {
      linkedin: 'https://linkedin.com/in/kavinduchathuranga',
      github: 'https://github.com/kavinduchathuranga'
    }
  },
  {
    id: 'srishan-mandawala',
    name: 'Srishan Mandawala',
    position: 'Co-Founder & Full-Stack Developer',
    bio: 'UI/UX focused developer with expertise in modern frontend frameworks.',
    image: '/images/team/srishan-mandawala.jpg',
    skills: ['React', 'Vue.js', 'UI/UX Design', 'Full-Stack Development'],
    social: {
      linkedin: 'https://linkedin.com/in/srishanmandawala',
      github: 'https://github.com/srishanmandawala'
    }
  },
  {
    id: 'viduni-waidyarathna',
    name: 'Viduni Waidyarathna',
    position: 'Co-Founder & Full-Stack Developer',
    bio: 'Backend specialist with deep knowledge of databases and server architecture.',
    image: '/images/team/viduni-waidyarathna.jpg',
    skills: ['Node.js', 'Python', 'Database Design', 'Full-Stack Development'],
    social: {
      linkedin: 'https://linkedin.com/in/viduniwaidyarathna',
      github: 'https://github.com/viduniwaidyarathna'
    }
  }
]

// Portfolio/Projects
export const portfolio = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with advanced analytics and inventory management.',
    image: '/images/portfolio/ecommerce-platform.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    category: 'Web Development',
    url: 'https://demo-ecommerce.syntrix.com',
    github: 'https://github.com/syntrix/ecommerce-platform'
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    image: '/images/portfolio/mobile-banking.jpg',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Biometric API'],
    category: 'Mobile Development',
    url: 'https://apps.apple.com/syntrix-banking',
    github: null
  },
  {
    id: 'healthcare-management',
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare management system for hospitals and clinics.',
    image: '/images/portfolio/healthcare-system.jpg',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis'],
    category: 'Enterprise Solutions',
    url: 'https://healthcare.syntrix.com',
    github: null
  },
  {
    id: 'cloud-analytics',
    title: 'Cloud Analytics Dashboard',
    description: 'Real-time analytics dashboard for monitoring cloud infrastructure and applications.',
    image: '/images/portfolio/cloud-analytics.jpg',
    technologies: ['Angular', 'Python', 'FastAPI', 'InfluxDB', 'Grafana'],
    category: 'Cloud Solutions',
    url: 'https://analytics.syntrix.com',
    github: 'https://github.com/syntrix/cloud-analytics'
  }
]

// Contact information
export const contact = {
  address: {
    street: '123 Innovation Drive',
    city: 'Sri Lanka',
    state: 'CA',
    zip: '94105',
    country: 'SL'
  },
  phone: {
    primary: '+1 () 123-457',
    support: '+1 (555) 123-4568'
  },
  email: {
    info: 'info@syntrix.com',
    support: 'support@syntrix.com',
    careers: 'careers@syntrix.com'
  },
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM PST',
    weekends: 'Closed',
    timezone: 'Pacific Standard Time'
  }
}

// Default export
const syntrixData = {
  company,
  about,
  navigation,
  technologies,
  services,
  team,
  portfolio,
  contact,
  getLogo,
  getServiceById
}

export default syntrixData