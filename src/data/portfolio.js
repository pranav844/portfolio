export const personal = {
  name: 'Pranav Saxena',
  title: 'Full Stack Developer',
  subtitle: 'Java · Spring Boot · React.js · REST APIs',
  bio: "I'm a Full Stack Developer with hands-on experience building end-to-end web applications — from scalable Spring Boot backends and REST APIs to responsive React.js frontends. I transitioned from a Civil Engineering background into software development, proving that adaptability and persistence matter more than a traditional CS degree. My focus is on clean architecture, secure authentication systems, and software that actually works in production.",
  heroStatement: 'Building reliable backend systems, modern web applications, and products that solve real problems.',
  email: 'saxenapranav844@gmail.com',
  github: 'https://github.com/pranav844',
  linkedin: 'https://www.linkedin.com/in/pranav-saxena-5726ab301',
  resumeUrl: `${import.meta.env.BASE_URL}Pranav_Saxena_FullStack_Resume.pdf`,
  phone: '+91 6261630062',
};

export const skills = [
  {
    category: 'Languages',
    icon: '{ }',
    color: '#00d4ff',
    items: ['Java', 'JavaScript', 'C#', 'C', 'C++'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    color: '#7c3aed',
    items: ['Spring Boot', 'Spring Security', 'REST APIs', 'Hibernate', 'JPA', 'JWT Auth', 'MVC Architecture', 'Microservices', '.NET', 'ASP.NET', 'Node.js', 'Express.js'],
  },
  {
    category: 'Frontend',
    icon: '◈',
    color: '#06b6d4',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    category: 'Database',
    icon: '▦',
    color: '#10b981',
    items: ['MySQL', 'Schema Design', 'Normalization', 'MySQL Workbench'],
  },
  {
    category: 'Testing & Tools',
    icon: '◉',
    color: '#f59e0b',
    items: ['Postman', 'Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'STS', 'Maven', 'npm', 'Docker'],
  },
];

export const skillNodes = [
  { id: 'java',        label: 'Java',         category: 'language', x: 50,  y: 15,  related: ['spring', 'hibernate', 'jwt'] },
  { id: 'spring',      label: 'Spring Boot',  category: 'backend',  x: 80,  y: 35,  related: ['java', 'hibernate', 'jwt', 'rest'] },
  { id: 'react',       label: 'React.js',     category: 'frontend', x: 20,  y: 35,  related: ['js', 'html', 'css'] },
  { id: 'mysql',       label: 'MySQL',        category: 'database', x: 80,  y: 65,  related: ['hibernate', 'spring'] },
  { id: 'rest',        label: 'REST APIs',    category: 'backend',  x: 50,  y: 85,  related: ['spring', 'jwt', 'postman'] },
  { id: 'hibernate',   label: 'Hibernate',    category: 'backend',  x: 20,  y: 65,  related: ['java', 'mysql', 'spring'] },
  { id: 'jwt',         label: 'JWT Auth',     category: 'backend',  x: 65,  y: 55,  related: ['spring', 'java'] },
  { id: 'git',         label: 'Git',          category: 'tool',     x: 35,  y: 55,  related: ['github'] },
  { id: 'postman',     label: 'Postman',      category: 'tool',     x: 50,  y: 50,  related: ['rest'] },
  { id: 'js',          label: 'JavaScript',   category: 'language', x: 10,  y: 50,  related: ['react', 'html'] },
  { id: 'html',        label: 'HTML/CSS',     category: 'frontend', x: 15,  y: 75,  related: ['react', 'js'] },
  { id: 'github',      label: 'GitHub',       category: 'tool',     x: 40,  y: 70,  related: ['git'] },
];

export const journey = [
  {
    year: '2021–2025',
    title: 'B.Tech – Civil Engineering',
    company: 'MITS Gwalior',
    description: 'Studied Civil Engineering. Developed strong analytical and problem-solving foundations. Discovered a genuine passion for programming and began self-learning software development.',
    type: 'education',
    highlight: false,
  },
  {
    year: '2023',
    title: 'Frontend Intern',
    company: 'Deeporion Technology Pvt Ltd',
    description: 'First real industry exposure. Built React.js components for live product development. Experienced professional workflows, version control, and team collaboration.',
    type: 'experience',
    highlight: true,
  },
  {
    year: '2025–2026',
    title: 'PG in Advanced Computing',
    company: 'CDAC Pune',
    description: 'Intensive postgraduate program focused on full-stack development, backend architecture, microservices, MVC, OOP, and production-ready software engineering.',
    type: 'education',
    highlight: false,
  },
  {
    year: '2025',
    title: 'CODEVA – E-Commerce Platform',
    company: 'Full Stack Project',
    description: 'Built a complete e-commerce web app with JWT auth, product catalog, shopping cart, and MySQL backend using Node.js + React.js.',
    type: 'project',
    highlight: false,
  },
  {
    year: '2026',
    title: 'AdElevate – SaaS Ad Platform',
    company: 'Full Stack Project',
    description: 'Architected a full SaaS advertising platform with Spring Boot, microservices, Razorpay payments, role-based access, and a .NET logging service.',
    type: 'project',
    highlight: true,
  },
];

export const projects = [
  {
    id: 'adelevate',
    name: 'AdElevate',
    tagline: 'SaaS Advertising & Subscription Platform',
    year: '2026',
    status: 'Completed',
    problem: 'Small businesses lack an affordable, structured platform to promote their services, manage their visibility, and handle customer discovery — leaving them dependent on word-of-mouth or expensive ad platforms.',
    solution: 'AdElevate is a full-stack SaaS platform that lets small businesses subscribe to ad plans, create verified advertisements, and gain customer discovery — all within a tiered subscription model backed by Razorpay payments.',
    role: 'Sole backend architect and full-stack developer. Designed the system architecture, built all REST APIs, implemented security, payment integration, and the .NET logging microservice.',
    architecture: {
      layers: [
        { name: 'React.js Frontend', desc: 'Admin, Vendor & Customer dashboards with real-time data', color: '#00d4ff' },
        { name: 'REST API Layer', desc: '20+ RESTful endpoints with MVC architecture', color: '#7c3aed' },
        { name: 'Spring Boot Backend', desc: 'Service layer, DTO pattern, global exception handling', color: '#06b6d4' },
        { name: 'Spring Security + JWT', desc: 'Role-based access control for Admin / Vendor / Customer', color: '#f59e0b' },
        { name: 'MySQL + Hibernate', desc: 'Relational schema with JPA/Hibernate ORM', color: '#10b981' },
        { name: 'Payment Microservice', desc: 'Razorpay integration with ad status synchronization', color: '#ef4444' },
        { name: '.NET Logging Service', desc: 'Activity tracking via RestTemplate inter-service calls', color: '#8b5cf6' },
      ],
    },
    features: [
      'JWT authentication + 3-role RBAC (Admin, Vendor, Customer)',
      '20+ REST APIs — ad management, subscriptions, billing, user verification',
      'Razorpay payment integration with end-to-end payment workflow',
      'Payment microservice syncing advertisement and payment status',
      '.NET activity logging microservice with polyglot inter-service communication',
      'Admin dashboard — pending ads, user management, plan management, analytics',
      'Vendor dashboard — campaign analytics, ad management, subscription billing',
      'Customer-facing ad discovery with category and location filters',
      'Ratings and reviews system for businesses',
      'Tiered subscription plans (Silver, Gold, Platinum)',
    ],
    challenge: {
      title: 'Cross-Service Status Synchronization',
      description: 'The hardest engineering problem was maintaining consistent advertisement status between the main Spring Boot backend and the payment microservice. When a vendor subscribes and pays, the payment microservice must notify the backend to activate the advertisement — but network failures, latency, or service restarts could leave data in inconsistent states. I solved this by designing a clear API contract between services and handling status transitions explicitly, ensuring payment confirmation always preceded advertisement activation.',
    },
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA/Hibernate', 'MySQL', 'React.js', 'Razorpay', 'Microservices', '.NET', 'RestTemplate'],
    github: 'https://github.com/pranav844/AdElevate',
    live: null,
    color: '#00d4ff',
  },
  {
    id: 'codeva',
    name: 'CODEVA',
    tagline: 'Full-Stack E-Commerce Web Application',
    year: '2025',
    status: 'Completed',
    problem: 'Building a complete e-commerce system that handles authentication, product management, cart state, and order processing while maintaining clean API boundaries between frontend and backend.',
    solution: 'CODEVA is a full-stack e-commerce platform with JWT-based user auth, product catalog, persistent shopping cart, and order management — with a Node.js/Express backend and React.js frontend.',
    role: 'Full-stack developer — owned backend (Node.js + Express + MySQL), API design, and frontend (React.js) end-to-end.',
    architecture: null,
    features: [
      'JWT-based user authentication and session management',
      'Product catalog with category browsing',
      'Persistent shopping cart across sessions',
      'Responsive UI for mobile and desktop',
      'Normalized MySQL schema — no data redundancy',
      'RESTful APIs connecting React frontend to Node.js backend',
    ],
    challenge: {
      title: 'Full-Stack Ownership Across the Entire Stack',
      description: 'Owning every layer — database schema design, Express API, and React UI — required maintaining clean API contracts so changes on one layer did not break others. Normalizing the MySQL schema correctly to avoid inventory redundancy while keeping frontend display needs in sync was a key design challenge.',
    },
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'JavaScript', 'HTML5', 'CSS3'],
    github: null,
    live: null,
    color: '#7c3aed',
  },
];

export const experience = [
  {
    company: 'Deeporion Technology Pvt Ltd',
    role: 'Software Developer Intern',
    period: '2023 · 7 Months',
    type: 'Internship',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    points: [
      'Worked on the frontend team, building and designing web pages using React.js as part of ongoing product development.',
      'Translated page designs into responsive, functional React components, contributing to the overall product UI.',
      'Gained hands-on exposure to professional development workflows including team collaboration and version control.',
    ],
  },
];

export const education = [
  {
    degree: 'Post Graduation in Advanced Computing',
    institution: 'Center For Development of Advanced Computing (CDAC)',
    location: 'Pune, India',
    year: '2026',
    focus: 'Full-stack development, backend architecture, microservices, OOP, MVC',
    highlight: true,
  },
  {
    degree: 'B.Tech – Civil Engineering',
    institution: 'Madhav Institute of Technology & Science',
    location: 'Gwalior, India',
    year: '2025',
    focus: 'Analytical foundations, problem-solving, mathematics',
    highlight: false,
  },
];

export const certifications = [
  { name: 'IBM SQL and Relational Database', issuer: 'IBM', color: '#00d4ff' },
  { name: 'AWS Foundations of Prompt Engineering', issuer: 'Amazon Web Services', color: '#f59e0b' },
  { name: 'Generative AI', issuer: 'Microsoft & LinkedIn', color: '#7c3aed' },
  { name: 'Google Data Analytics Professional Certificate', issuer: 'Google', color: '#10b981' },
];

export const backendConcepts = [
  { step: '01', label: 'Request', icon: '→', desc: 'HTTP request arrives with headers, body, auth token' },
  { step: '02', label: 'Controller', icon: '⊕', desc: 'Routes the request, validates input, maps to DTO' },
  { step: '03', label: 'DTO', icon: '⬡', desc: 'Data Transfer Object — shapes data between layers' },
  { step: '04', label: 'Service', icon: '⚙', desc: 'Business logic, validation, orchestration' },
  { step: '05', label: 'Repository', icon: '▦', desc: 'JPA/Hibernate queries — data access layer' },
  { step: '06', label: 'Database', icon: '◈', desc: 'MySQL — normalized schema, relationships' },
];

export const apiFlow = [
  { label: 'Client', type: 'client', desc: 'React.js / Postman / Browser' },
  { label: 'POST /auth/login', type: 'endpoint', desc: 'HTTP Request with credentials' },
  { label: 'Spring Security', type: 'security', desc: 'Filter chain — authenticates request' },
  { label: 'JWT Token', type: 'token', desc: 'Signed token issued on success' },
  { label: 'Protected API', type: 'protected', desc: 'Token validated on every request' },
  { label: 'Controller', type: 'controller', desc: 'Maps to handler method' },
  { label: 'Service Layer', type: 'service', desc: 'Business logic execution' },
  { label: 'Repository', type: 'repo', desc: 'JPA query to database' },
  { label: 'MySQL', type: 'db', desc: 'Data retrieved and returned up the chain' },
];
