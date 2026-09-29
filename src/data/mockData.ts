import { CareerTrack, Specialist, CountryDestination, Agency, CareerSprint, Testimonial } from '../types';

export const FOUNDER_DATA = {
  name: 'Md. Masruk Esrak',
  title: 'CSE Student | Career & Study Mentor',
  roleBadge: 'Verified CSE Ecosystem Guide',
  statusBadge: '🟢 Available 1-on-1',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCoqRBNKN6Egw49v3lEy0S-OrmazXej6UWmHfzJ9GXuP1iUJP8fO8umLPJZmKHS7iCiNnWFfArTfgnKpBDP-U6pxOmbR7TyG3jo4upVmx08GrB5eXt4-eVbLYnJOu2td5xMzcJpVVgFErkrJmHpsAfhKjuLYeUmMgpy_OXpImBb15lScWLTO0JqjBtkdz-SpNF4WFBcrH1MpiSOOJYQES7JClX9aZ9Hj7Ic-xXptJqrX1Ogj3N71KR',
  bio: 'Helping Computer Science & Engineering students across Bangladesh navigate high-paying local software jobs, European Master\'s applications, and structured coding roadmaps.',
  tags: ['CSE Roadmap', 'Full Stack Dev', 'AI & Tech', 'Master\'s Abroad', 'Scholarship Strategy'],
  stats: [
    { label: 'Sessions Given', value: '140+' },
    { label: 'EU Visas Got', value: '42' },
    { label: 'Satisfaction', value: '98%' },
  ],
  education: 'Department of Computer Science & Engineering',
  location: 'Dhaka, Bangladesh',
  whatsapp: '+880 1700-000000',
  email: 'connect@runwithme.bd',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com'
};

export const MARKET_DEMAND_DATA = [
  { skill: 'Software Engineering', percentage: 88, color: 'bg-secondary', note: 'Backend, OOP, Systems' },
  { skill: 'Full Stack Dev', percentage: 84, color: 'bg-secondary', note: 'React/Next.js, Node, Postgres' },
  { skill: 'AI / ML Engineering', percentage: 76, color: 'bg-secondary-container', note: 'Python, PyTorch, LLMs' },
  { skill: 'Data Analysis', percentage: 71, color: 'bg-surface-tint', note: 'SQL, Power BI, Python' },
  { skill: 'DevOps / Cloud', percentage: 68, color: 'bg-surface-tint', note: 'AWS, Docker, K8s, CI/CD' },
  { skill: 'Cyber Security', percentage: 62, color: 'bg-outline', note: 'SOC, Pen Testing, CEH' },
];

export const SPECIALISTS_DATA: Specialist[] = [
  {
    id: 'tanvir-ahmed',
    name: 'Tanvir Ahmed',
    role: 'Lead SE @ Chaldal',
    company: 'Chaldal',
    yearsExp: '5+ Yrs Exp',
    initials: 'TA',
    bio: 'Architecting high-throughput distributed microservices for grocery supply chain and retail systems in BD.',
    skills: ['Java', 'Spring Boot', 'System Design', 'Microservices'],
    category: 'Software Eng',
    isAvailable: true,
    statusText: 'Available',
    rating: 4.9,
    sessionsCompleted: 48
  },
  {
    id: 'ayesha-siddiqua',
    name: 'Ayesha Siddiqua',
    role: 'Senior Full Stack @ Pathao',
    company: 'Pathao',
    yearsExp: '4+ Yrs Exp',
    initials: 'AS',
    bio: 'Scaling fintech ride-hailing interfaces, payment gateways, and resilient SSR web apps on Next.js.',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    category: 'Full Stack',
    isAvailable: true,
    statusText: 'Available',
    rating: 5.0,
    sessionsCompleted: 62
  },
  {
    id: 'rafiqul-islam',
    name: 'Rafiqul Islam',
    role: 'ML Engineer @ Intelligent Machines',
    company: 'Intelligent Machines',
    yearsExp: '3+ Yrs Exp',
    initials: 'RI',
    bio: 'Building enterprise LLM pipelines, Bengali OCR engines, and automated document vision systems.',
    skills: ['PyTorch', 'LLMs', 'NLP', 'FastAPI'],
    category: 'AI & Data',
    isAvailable: true,
    statusText: 'Available',
    rating: 4.8,
    sessionsCompleted: 35
  },
  {
    id: 'farhana-zaman',
    name: 'Farhana Zaman',
    role: 'Data Analyst @ bKash',
    company: 'bKash',
    yearsExp: '4+ Yrs Exp',
    initials: 'FZ',
    bio: 'Analyzing user transaction funnels, fraud patterns, and delivering C-level BI dashboards.',
    skills: ['SQL', 'Power BI', 'Python', 'Tableau'],
    category: 'AI & Data',
    isAvailable: true,
    statusText: 'Booking Fast',
    rating: 4.9,
    sessionsCompleted: 51
  },
  {
    id: 'zubair-hossain',
    name: 'Zubair Hossain',
    role: 'SOC Specialist @ Banglalink',
    company: 'Banglalink',
    yearsExp: '5+ Yrs Exp',
    initials: 'ZH',
    bio: 'Telecom threat monitoring, vulnerability management, SIEM incident triage, and CEH coaching.',
    skills: ['CEH', 'SIEM', 'Pen Testing', 'Splunk'],
    category: 'DevOps & Security',
    isAvailable: true,
    statusText: 'Available',
    rating: 4.7,
    sessionsCompleted: 29
  },
  {
    id: 'mahmud-hasan',
    name: 'Mahmud Hasan',
    role: 'Cloud Engineer @ Brain Station 23',
    company: 'Brain Station 23',
    yearsExp: '4+ Yrs Exp',
    initials: 'MH',
    bio: 'Automating containerized workloads, Kubernetes orchestrations, and zero-downtime CI/CD pipelines.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    category: 'DevOps & Security',
    isAvailable: true,
    statusText: 'Available',
    rating: 4.9,
    sessionsCompleted: 44
  },
  {
    id: 'kamrul-islam',
    name: 'Kamrul Islam',
    role: 'Network Architect @ Grameenphone',
    company: 'Grameenphone',
    yearsExp: '6+ Yrs Exp',
    initials: 'KI',
    bio: 'Core ISP routing, BGP peering, enterprise VPN architecture, and CCNA/CCNP professional mentoring.',
    skills: ['CCNA / CCNP', 'BGP', 'Firewalls', 'Cisco Core'],
    category: 'Networking',
    isAvailable: true,
    statusText: 'Available',
    rating: 4.9,
    sessionsCompleted: 57
  }
];

export const CAREER_TRACKS: CareerTrack[] = [
  {
    id: 'full-stack-dev',
    title: 'Full Stack Development',
    category: 'FullStack',
    entrySalaryBDT: '৳35k - ৳65k',
    midSalaryBDT: '৳80k - ৳150k',
    marketDemandPct: 84,
    demandLevel: 'Very High',
    prepTimeline: '6 - 9 Months',
    shortDescription: 'Build complete web applications bridging frontend interfaces, relational databases, and server APIs.',
    fullDescription: 'Full Stack Engineers bridge product design, frontend user interfaces, business logic backends, and databases. In Bangladesh, startups and software consultancies prioritize full-stack engineers to rapidly deploy web products.',
    skills: ['TypeScript', 'React & Next.js', 'Node.js & Express', 'PostgreSQL & Prisma', 'Tailwind CSS', 'Docker & CI/CD'],
    portfolioProjects: [
      'Multi-vendor e-commerce with bKash / SSLCommerz sandbox payment integration',
      'Multi-tenant SaaS with Role-Based Access Control (RBAC) and invoice generation',
      'Real-time team chat application with WebSockets, Redis pub/sub and media storage',
      'Full-stack student portal with course registration and automated PDF report card builder'
    ],
    interviewTips: [
      'Master LeetCode Easy & Medium patterns (Two Pointers, HashMaps, Sliding Window)',
      'Be ready to explain React Virtual DOM, re-renders, useMemo vs useCallback with whiteboard code',
      'Demonstrate clean Git commit history, pull request hygiene, and comprehensive README files',
      'Explain relational normalization (1NF-3NF) and database indexing tradeoffs'
    ],
    roadmapSteps: [
      { step: 1, title: 'HTML & CSS', subtext: 'Tailwind CSS, Flexbox/Grid', detail: 'Semantic web markup, responsive breakpoints, accessible UI components' },
      { step: 2, title: 'JavaScript', subtext: 'ES6+, Async, DOM', detail: 'Promises, closures, event loop, fetch API, modular code organization' },
      { step: 3, title: 'React & Next', subtext: 'Hooks, SSR, State', detail: 'App router, Server Components, client state (Zustand), TanStack Query' },
      { step: 4, title: 'Node.js', subtext: 'Express, Auth', detail: 'RESTful architecture, middleware, JWT tokens, bcrypt encryption, validation' },
      { step: 5, title: 'Databases', subtext: 'Postgres & Mongo', detail: 'Schema design, migrations, indexing, Prisma / Drizzle ORM queries' },
      { step: 6, title: 'APIs & Auth', subtext: 'REST, JWT, OAuth', detail: 'Rate limiting, API security headers, role based guards, error handling' },
      { step: 7, title: 'Docker / CI', subtext: 'GitHub Actions', detail: 'Containerization, environment isolation, automated testing and build workflows' },
      { step: 8, title: 'Production Capstone', subtext: 'Live SaaS Deployment', detail: 'Production deployment to VPS / Cloud Run with custom domain, SSL & monitoring' }
    ]
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering (Backend/Core)',
    category: 'Software',
    entrySalaryBDT: '৳40k - ৳70k',
    midSalaryBDT: '৳90k - ৳180k',
    marketDemandPct: 88,
    demandLevel: 'Very High',
    prepTimeline: '6 - 10 Months',
    shortDescription: 'Design resilient microservices, concurrent backend systems, and high-performance algorithms.',
    fullDescription: 'Software engineers focus on backend robustness, data consistency, system scalability, and algorithmic optimization. In Dhaka, companies like Chaldal, bKash, Therap, and Kaz Software actively hire strong core engineers.',
    skills: ['Java / Spring Boot', 'C# / .NET Core', 'Go / C++', 'Microservices', 'Distributed Systems', 'PostgreSQL / MySQL'],
    portfolioProjects: [
      'High-throughput banking ledger service with transactional consistency (ACID)',
      'Distributed task scheduler using Redis and rabbitMQ with retry policies',
      'URL shortener service handling 10,000 req/sec with caching layer',
      'Custom HTTP reverse proxy and load balancer written in Go'
    ],
    interviewTips: [
      'Heavy focus on Data Structures & Algorithms (Trees, Graphs, Dynamic Programming)',
      'System design rounds: Design tinyURL, WhatsApp, or ride-matching algorithm',
      'Deep knowledge of concurrency, multithreading, race conditions, and thread pools'
    ],
    roadmapSteps: [
      { step: 1, title: 'Core Language', subtext: 'Java or C# or Go', detail: 'Memory management, type systems, standard library mastery' },
      { step: 2, title: 'Data Structures', subtext: 'Algo & Complexity', detail: 'Arrays, Trees, Graphs, Sorting, Space/Time Big O analysis' },
      { step: 3, title: 'OOP & SOLID', subtext: 'Design Patterns', detail: 'Factory, Singleton, Observer, Strategy, Dependency Injection' },
      { step: 4, title: 'Backend Framework', subtext: 'Spring / ASP.NET', detail: 'Dependency injection, ORM, REST endpoints, Unit testing' },
      { step: 5, title: 'Databases & ACID', subtext: 'PostgreSQL Internals', detail: 'Indexes, query plans, transactions, isolation levels' },
      { step: 6, title: 'Messaging Queues', subtext: 'Kafka / RabbitMQ', detail: 'Event-driven architecture, consumer groups, idempotency' },
      { step: 7, title: 'System Design', subtext: 'Scalability', detail: 'Caching (Redis), Load balancing, CDN, sharding, replication' },
      { step: 8, title: 'Production Capstone', subtext: 'Enterprise Service', detail: 'High-availability microservice with health checks & tracing' }
    ]
  },
  {
    id: 'ai-ml-engineering',
    title: 'AI & Machine Learning Engineering',
    category: 'AI',
    entrySalaryBDT: '৳45k - ৳80k',
    midSalaryBDT: '৳100k - ৳220k',
    marketDemandPct: 76,
    demandLevel: 'High',
    prepTimeline: '8 - 12 Months',
    shortDescription: 'Develop neural pipelines, LLM systems, computer vision models, and natural language applications.',
    fullDescription: 'AI Engineers transition theoretical machine learning concepts into production APIs and automated workflows. The Bangladeshi ecosystem is expanding in Bengali NLP, fintech credit scoring, and computer vision.',
    skills: ['Python', 'PyTorch / TensorFlow', 'Hugging Face', 'FastAPI', 'LangChain / LlamaIndex', 'Vector DBs (Chroma/Pinecone)'],
    portfolioProjects: [
      'Bengali document OCR and structured information extraction pipeline',
      'Retrieval-Augmented Generation (RAG) system for academic CSE research papers',
      'Customer churn prediction model with SHAP explainability dashboard',
      'Defect detection computer vision model using YOLOv8 with real-time video feed'
    ],
    interviewTips: [
      'Explain math behind loss functions, gradient descent, attention mechanisms',
      'Be ready to code data preprocessing pipelines without high-level library shortcuts',
      'Explain trade-offs between model latency, quantization, and fine-tuning'
    ],
    roadmapSteps: [
      { step: 1, title: 'Math & Python', subtext: 'Linear Algebra / Calc', detail: 'Vector operations, gradients, matrix transformations, NumPy' },
      { step: 2, title: 'Data Wrangling', subtext: 'Pandas & Visualization', detail: 'Data cleaning, feature engineering, exploratory data analysis' },
      { step: 3, title: 'Classical ML', subtext: 'Scikit-Learn', detail: 'Regression, Random Forests, SVMs, clustering, cross-validation' },
      { step: 4, title: 'Deep Learning', subtext: 'PyTorch Fundamentals', detail: 'Tensors, autograd, CNNs, RNNs, backpropagation mechanics' },
      { step: 5, title: 'Modern NLP & Vision', subtext: 'Transformers & LLMs', detail: 'Self-attention, BERT, GPT, fine-tuning pretrained weights' },
      { step: 6, title: 'RAG & Vectors', subtext: 'Embeddings & Search', detail: 'Chunking strategies, semantic search, vector indexing' },
      { step: 7, title: 'MLOps & Serving', subtext: 'FastAPI & Docker', detail: 'Model deployment, batching, GPU inference optimization' },
      { step: 8, title: 'Production Capstone', subtext: 'End-to-End AI System', detail: 'Live AI product serving user queries with benchmark metrics' }
    ]
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Business Intelligence',
    category: 'Data',
    entrySalaryBDT: '৳30k - ৳55k',
    midSalaryBDT: '৳70k - ৳130k',
    marketDemandPct: 71,
    demandLevel: 'High',
    prepTimeline: '4 - 7 Months',
    shortDescription: 'Transform raw enterprise transactions into executive insights, metrics, and actionable decisions.',
    fullDescription: 'Data Analysts bridge business strategy and technical databases. Telecoms, banks, e-commerce, and logistics firms in Dhaka rely heavily on SQL analysts to drive data-informed growth.',
    skills: ['Advanced SQL', 'Power BI / Tableau', 'Python (Pandas, Matplotlib)', 'Excel Modeling', 'Cohort Analysis'],
    portfolioProjects: [
      'Ride-sharing retention & cohort analysis dashboard with interactive filters',
      'Telecom customer churn analysis with feature importance breakdown',
      'Financial transaction fraud detection and anomaly pattern tracker',
      'E-commerce marketing funnel and conversion attribution dashboard'
    ],
    interviewTips: [
      'Expect complex live SQL tests: Window functions, self-joins, CTEs, subqueries',
      'Demonstrate business acumen: How does your metric impact revenue or churn?',
      'Present clean visual dashboards with clear storytelling hierarchy'
    ],
    roadmapSteps: [
      { step: 1, title: 'Advanced Excel', subtext: 'VLOOKUP / XLOOKUP', detail: 'Pivot tables, financial formulas, statistical functions' },
      { step: 2, title: 'Relational SQL', subtext: 'PostgreSQL / MySQL', detail: 'GROUP BY, HAVING, CASE WHEN, multi-table JOINs' },
      { step: 3, title: 'Advanced SQL', subtext: 'Window Functions', detail: 'ROW_NUMBER, RANK, LAG/LEAD, running totals, CTEs' },
      { step: 4, title: 'Power BI / Tableau', subtext: 'DAX & Modeling', detail: 'Star schema, relationship modeling, calculated measures' },
      { step: 5, title: 'Python for Data', subtext: 'Pandas & Seaborn', detail: 'Automated data manipulation, hypothesis testing, stats' },
      { step: 6, title: 'Business Metrics', subtext: 'SaaS / E-com KPIs', detail: 'LTV, CAC, MRR, churn rate, retention curves' },
      { step: 7, title: 'Data Storytelling', subtext: 'Executive Presentations', detail: 'Translating numbers into executive recommendations' },
      { step: 8, title: 'Production Capstone', subtext: 'Live Portfolio Dashboard', detail: 'Interactive public dashboard hosted on Power BI Service / Streamlit' }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & SOC Analysis',
    category: 'Security',
    entrySalaryBDT: '৳35k - ৳60k',
    midSalaryBDT: '৳80k - ৳160k',
    marketDemandPct: 62,
    demandLevel: 'Moderate',
    prepTimeline: '6 - 9 Months',
    shortDescription: 'Guard telecom networks, banking infrastructure, and web applications from hostile exploitation.',
    fullDescription: 'Cybersecurity professionals protect organizations through vulnerability assessments, penetration testing, security operations center (SOC) monitoring, and compliance frameworks.',
    skills: ['Linux Kernel & Bash', 'Networking (TCP/IP)', 'SIEM (Splunk, Wazuh)', 'Burp Suite & OWASP Top 10', 'Wireshark', 'Metasploit'],
    portfolioProjects: [
      'Home lab penetration testing environment documenting vulnerability exploitation',
      'Custom Wazuh SIEM deployment monitoring Linux servers with alert rules',
      'Automated Python vulnerability scanner for web application headers & SSL',
      'Detailed CTF write-ups on Hack The Box and TryHackMe platforms'
    ],
    interviewTips: [
      'In-depth networking questions: 3-way handshake, DNS amplification, ARP poisoning',
      'Explain OWASP Top 10 vulnerabilities with mitigation code examples (SQLi, XSS, CSRF)',
      'Explain incident response lifecycle (NIST / SANS frameworks)'
    ],
    roadmapSteps: [
      { step: 1, title: 'Linux Fundamentals', subtext: 'Bash scripting & permissions', detail: 'File permissions, systemd services, SSH configuration, command line' },
      { step: 2, title: 'Networking Fundamentals', subtext: 'TCP/IP & OSI model', detail: 'Subnetting, routing protocols, DNS, TLS/SSL handshake analysis' },
      { step: 3, title: 'Security Basics', subtext: 'CIA triad & cryptography', detail: 'Symmetric/asymmetric encryption, hashing, digital signatures' },
      { step: 4, title: 'Web App Security', subtext: 'OWASP Top 10 & Burp', detail: 'SQL Injection, XSS, CSRF, IDOR, authorization bypass' },
      { step: 5, title: 'Defensive Operations', subtext: 'SIEM & SOC Tools', detail: 'Log analysis, Splunk, Wazuh, intrusion detection systems' },
      { step: 6, title: 'Offensive Testing', subtext: 'Metasploit & Nmap', detail: 'Network scanning, payload delivery, privilege escalation' },
      { step: 7, title: 'Certification Prep', subtext: 'CEH / CompTIA Security+', detail: 'Theory, legal frameworks, ethics, incident handling' },
      { step: 8, title: 'Production Capstone', subtext: 'SOC / Lab Assessment', detail: 'Documented security audit report of a simulated enterprise infrastructure' }
    ]
  },
  {
    id: 'devops-cloud',
    title: 'DevOps & Cloud Engineering',
    category: 'Cloud',
    entrySalaryBDT: '৳40k - ৳75k',
    midSalaryBDT: '৳90k - ৳190k',
    marketDemandPct: 68,
    demandLevel: 'High',
    prepTimeline: '6 - 9 Months',
    shortDescription: 'Automate build pipelines, orchestrate Kubernetes clusters, and manage scalable cloud infrastructure.',
    fullDescription: 'DevOps engineers bridge software development and operations teams, eliminating manual deployments and ensuring 99.9% uptime for cloud applications.',
    skills: ['AWS / GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus & Grafana'],
    portfolioProjects: [
      'Zero-downtime CI/CD deployment pipeline for microservices on AWS EKS',
      'Infrastructure as Code (IaC) Terraform repository creating VPC, subnets, and RDS',
      'Observability dashboard with Prometheus alerts and Grafana visualization',
      'Automated disaster recovery and backup script with cloud storage archiving'
    ],
    interviewTips: [
      'Explain Kubernetes architecture: kube-apiserver, etcd, scheduler, kubelet, pods',
      'Explain zero-downtime deployment strategies (Blue/Green vs Canary)',
      'Explain Terraform state file management and locking mechanisms'
    ],
    roadmapSteps: [
      { step: 1, title: 'Linux & Scripting', subtext: 'Bash & Python automation', detail: 'Process management, cron jobs, network diagnostics' },
      { step: 2, title: 'Git & Version Control', subtext: 'Branching strategies', detail: 'Gitflow, trunk-based development, rebase vs merge' },
      { step: 3, title: 'Containerization', subtext: 'Docker mastery', detail: 'Multi-stage builds, layer caching, Docker compose networking' },
      { step: 4, title: 'CI/CD Pipelines', subtext: 'GitHub Actions / GitLab CI', detail: 'Automated test runners, artifacts, linting, release tags' },
      { step: 5, title: 'Cloud Infrastructure', subtext: 'AWS Core Services', detail: 'EC2, S3, IAM roles, VPC peering, RDS, CloudFront' },
      { step: 6, title: 'Orchestration', subtext: 'Kubernetes (K8s)', detail: 'Deployments, services, ingress controllers, configMaps, secrets' },
      { step: 7, title: 'Infrastructure as Code', subtext: 'Terraform & Ansible', detail: 'Declarative configs, modular state files, server provisioning' },
      { step: 8, title: 'Production Capstone', subtext: 'Resilient Microservices Env', detail: 'Fully automated, monitored cloud environment with auto-scaling' }
    ]
  },
  {
    id: 'networking-infrastructure',
    title: 'Enterprise Networking & Infrastructure',
    category: 'Networking',
    entrySalaryBDT: '৳30k - ৳50k',
    midSalaryBDT: '৳65k - ৳130k',
    marketDemandPct: 58,
    demandLevel: 'Moderate',
    prepTimeline: '5 - 8 Months',
    shortDescription: 'Architect ISP connectivity, BGP routing, enterprise firewalls, and telecom backbone circuits.',
    fullDescription: 'Network engineers maintain the physical and virtual internet backbone for internet service providers (ISPs), telecom operators, and corporate headquarters across Bangladesh.',
    skills: ['Cisco IOS', 'BGP & OSPF Routing', 'VLAN & Trunking', 'MikroTik RouterOS', 'Fortinet / pfSense Firewalls', 'CCNA/CCNP'],
    portfolioProjects: [
      'Dual-ISP failover and load balancing lab using MikroTik RouterOS',
      'Enterprise campus network simulation in Cisco Packet Tracer / GNS3 with VLANs',
      'Site-to-site IPsec VPN tunnel between head office and branch networks',
      'Network bandwidth monitoring server using SNMP and LibreNMS'
    ],
    interviewTips: [
      'Master IP subnetting without a calculator (CIDR notation, usable IPs)',
      'Explain BGP peering, AS numbers, and attribute selection hierarchy',
      'Explain differences between Layer 2 switching and Layer 3 routing'
    ],
    roadmapSteps: [
      { step: 1, title: 'Network Fundamentals', subtext: 'OSI & TCP/IP stack', detail: 'Cables, frames, packets, segments, MAC vs IP addresses' },
      { step: 2, title: 'IP Subnetting', subtext: 'IPv4 & IPv6 addressing', detail: 'VLSM, CIDR, public vs private subnets, NAT/PAT translation' },
      { step: 3, title: 'LAN Switching', subtext: 'Cisco Catalyst / VLANs', detail: 'VLAN trunking protocol (802.1Q), Spanning Tree Protocol (STP)' },
      { step: 4, title: 'IP Routing', subtext: 'OSPF & Static routes', detail: 'Link-state protocols, cost metric, route summarization' },
      { step: 5, title: 'Edge Routing', subtext: 'BGP for ISPs', detail: 'Autonomous systems, eBGP vs iBGP, prefix advertisement' },
      { step: 6, title: 'Firewalls & Security', subtext: 'Access Control Lists (ACL)', detail: 'Stateful packet inspection, NAT rules, Port forwarding, VPN' },
      { step: 7, title: 'MikroTik & Hardware', subtext: 'RouterOS & Queues', detail: 'Bandwidth queues, hotspot servers, PPPoE server setups' },
      { step: 8, title: 'Production Capstone', subtext: 'Enterprise ISP Lab', detail: 'Simulated high-availability ISP core network with redundant links' }
    ]
  }
];

export const COUNTRIES_DATA: CountryDestination[] = [
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    topUniversities: ['Politecnico di Milano (QS #111)', 'Politecnico di Torino', 'Sapienza University of Rome', 'University of Padua'],
    avgTuitionEUR: '€0 - €2,800 / yr',
    livingCostEUR: '€600 - €800 / mo',
    scholarshipName: 'DSU / ER.GO Regional Scholarship',
    scholarshipDetails: '100% tuition waiver + ~€7,200/yr stipend + free university cafeteria meal based on family income index (ISEE).',
    postStudyWork: '1 Year (Permesso per attesa occupazione)',
    budgetCategory: 'under10',
    budgetBDTFormatted: '3.5 - 5 Lakh BDT (Initial Outlay)',
    blockedAccountRequired: false,
    keyTags: ['Low Tuition', '100% Scholarship', 'Milan Tech', 'Dhaka VFS'],
    highlights: ['Public polytechnic tuition reduced based on family income', 'High English-taught CS curriculum availability', 'Northern Italy industrial manufacturing & fintech corridor'],
    prPathway: '5 continuous years legal stay + tax contributions for EU long-term residency permit.',
    partTimeJobDetails: 'Legal 20 hrs/week (1,040 hrs/yr) allowed. Typical pay €9 - €14/hr.',
    embassyDhakaLocation: 'Italian Embassy in Dhaka (VFS Global Gulshan)',
    visaSuccessRate: '94% for properly legalized DSU & Universitaly files'
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    topUniversities: ['Technical University of Munich (TUM)', 'RWTH Aachen', 'TU Berlin', 'University of Stuttgart'],
    avgTuitionEUR: '€0 (Semester fee ~€300)',
    livingCostEUR: '€850 - €1,050 / mo',
    scholarshipName: 'DAAD & Deutschlandstipendium',
    scholarshipDetails: 'DAAD covers living stipend; public universities charge zero tuition fees.',
    postStudyWork: '18 Months Job Seeker Visa',
    budgetCategory: '15-20',
    budgetBDTFormatted: '16 - 19 Lakh BDT (Incl. Blocked Acct)',
    blockedAccountRequired: true,
    blockedAccountEUR: '€11,208 / yr (€934/mo)',
    keyTags: ['Tuition Free', 'Massive Tech Hub', 'EU Blue Card', 'Werkstudent'],
    highlights: ['Virtually free tuition across public technical universities', 'Direct pipeline to German engineering & automotive software roles', 'Fast-track permanent residency via EU Blue Card (21-27 months with German B1)'],
    prPathway: 'EU Blue Card holders can obtain Niederlassungserlaubnis (PR) in 21 months with German B1 language certificate.',
    partTimeJobDetails: '120 full days or 240 half days/year. Werkstudent software roles pay €14 - €20/hr.',
    embassyDhakaLocation: 'German Embassy Dhaka (Madani Avenue, Baridhara)',
    visaSuccessRate: '92% with valid admission letter & verified blocked account'
  },
  {
    id: 'poland',
    name: 'Poland',
    flag: '🇵🇱',
    topUniversities: ['Warsaw University of Technology', 'Wrocław University of Science & Tech', 'AGH University of Krakow'],
    avgTuitionEUR: '€2,000 - €4,000 / yr',
    livingCostEUR: '€500 - €650 / mo',
    scholarshipName: 'Stefan Banach Scholarship & Uni Waivers',
    scholarshipDetails: 'Tuition discount for high academic GPA + government bilateral agreements.',
    postStudyWork: '9 Months Stayback Visa',
    budgetCategory: '10-15',
    budgetBDTFormatted: '9 - 13 Lakh BDT',
    blockedAccountRequired: false,
    keyTags: ['Budget Friendly', 'Krakow Tech Hub', 'Easy Visa File', 'Schengen Area'],
    highlights: ['One of Europe\'s fastest growing tech outsourcing hubs (Google, CD Projekt, Motorola)', 'Low cost of living compared to Western Europe', 'Full-time student work rights without requiring separate work permit'],
    prPathway: '5 years legal continuous residence with B1 Polish leads to EU Long-term resident status.',
    partTimeJobDetails: 'Full-time students have unrestricted work rights without extra work permits. Approx. 25-35 PLN/hr.',
    embassyDhakaLocation: 'Embassy of Poland in New Delhi (Submissions via VFS Dhaka)',
    visaSuccessRate: '88% with clear financial sponsorship'
  },
  {
    id: 'czech-republic',
    name: 'Czech Republic',
    flag: '🇨🇿',
    topUniversities: ['Czech Technical University in Prague (CTU)', 'Brno University of Technology', 'Charles University'],
    avgTuitionEUR: '€2,500 - €5,000 / yr (Free in Czech)',
    livingCostEUR: '€600 - €750 / mo',
    scholarshipName: 'South Moravian Centre (JCMM) & Gov Grants',
    scholarshipDetails: 'Regional grants for international students pursuing technical degree programs.',
    postStudyWork: '9 Months Stayback Visa',
    budgetCategory: '10-15',
    budgetBDTFormatted: '10 - 14 Lakh BDT',
    blockedAccountRequired: false,
    keyTags: ['Central Europe', 'Prague Startups', 'Low Unemployment', 'Avast/JetBrains'],
    highlights: ['Lowest unemployment rate in the European Union', 'Prague is home to cybersecurity giants (Avast/Gen Digital) and JetBrains', 'Completely tuition-free if studying in Czech language'],
    prPathway: 'Permanent residency granted after 5 continuous years of legal stay.',
    partTimeJobDetails: 'Free access to Czech labor market during studies without requiring a work permit.',
    embassyDhakaLocation: 'Embassy of the Czech Republic in New Delhi (VFS Dhaka)',
    visaSuccessRate: '86% with verified super-legalization of documents'
  },
  {
    id: 'hungary',
    name: 'Hungary',
    flag: '🇭🇺',
    topUniversities: ['Budapest University of Technology and Economics (BME)', 'Eötvös Loránd University (ELTE)', 'University of Debrecen'],
    avgTuitionEUR: '€0 (Under Stipendium) or €3,500/yr',
    livingCostEUR: '€500 - €650 / mo',
    scholarshipName: 'Stipendium Hungaricum (Gov Funded)',
    scholarshipDetails: '100% tuition waiver + monthly stipend (HUF 43,700) + free dormitory + medical insurance via Bangladesh Ministry of Education nomination.',
    postStudyWork: '9 Months Job Seeker (Study-to-Work)',
    budgetCategory: 'under10',
    budgetBDTFormatted: '3 - 6 Lakh BDT (With Scholarship)',
    blockedAccountRequired: false,
    keyTags: ['Full Scholarship', 'Dormitory Included', 'Budapest Hub', 'Gov Quota'],
    highlights: ['Annual quota of 140+ Bangladeshi students nominated by BD Ministry of Education', 'Complete coverage including health insurance and student housing', 'Budapest has vibrant tech developer communities and Nokia/Ericsson R&D centers'],
    prPathway: 'National permanent residence permit after 3-5 years of continuous legal residence.',
    partTimeJobDetails: 'Up to 30 hours per week during term time, full-time during holidays.',
    embassyDhakaLocation: 'Consulate of Hungary in Dhaka (VFS Dhaka)',
    visaSuccessRate: '95% for Stipendium Hungaricum awardees'
  },
  {
    id: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    topUniversities: ['Instituto Superior Técnico (IST Lisbon)', 'University of Porto', 'University of Coimbra'],
    avgTuitionEUR: '€1,500 - €4,000 / yr',
    livingCostEUR: '€650 - €800 / mo',
    scholarshipName: 'FCT Research Fellowships & University Grants',
    scholarshipDetails: 'Merit-based tuition discounts for outstanding international students.',
    postStudyWork: '1 - 2 Years Stayback Visa',
    budgetCategory: '10-15',
    budgetBDTFormatted: '11 - 15 Lakh BDT',
    blockedAccountRequired: false,
    keyTags: ['Mild Climate', 'Startup Nation', 'Fast Citizenship Path', 'Web Summit'],
    highlights: ['Fastest citizenship track in Europe (5 years legal residence counts toward passport)', 'Web Summit host city with growing international tech startup scene', 'Pleasant Mediterranean climate and affordable lifestyle'],
    prPathway: 'Eligible for Portuguese citizenship or PR after 5 years of legal residency.',
    partTimeJobDetails: 'Legal 20 hours/week during semester, full-time during breaks.',
    embassyDhakaLocation: 'Embassy of Portugal in New Delhi (VFS Global Dhaka)',
    visaSuccessRate: '85%'
  },
  {
    id: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    topUniversities: ['Trinity College Dublin', 'University College Dublin (UCD)', 'TU Dublin', 'University of Galway'],
    avgTuitionEUR: '€12,000 - €18,000 / yr',
    livingCostEUR: '€1,000 - €1,400 / mo',
    scholarshipName: 'Government of Ireland International Scholarship',
    scholarshipDetails: '€10,000 stipend + full tuition waiver; plus institutional merit scholarships of €2,000 - €5,000.',
    postStudyWork: '2 Years Third Level Graduate Scheme (Stamp 1G)',
    budgetCategory: '20-30',
    budgetBDTFormatted: '22 - 28 Lakh BDT',
    blockedAccountRequired: false,
    keyTags: ['English Speaking', 'EU Silicon Valley', 'High Starting Salaries', '2-Yr Stamp 1G'],
    highlights: ['European headquarters of Google, Meta, Apple, Stripe, Microsoft, Amazon', 'Native English-speaking country with seamless cultural integration', '2 full years stayback to work in tech with entry salaries of €45,000 - €60,000/yr'],
    prPathway: 'Critical Skills Employment Permit leads to Stamp 4 permanent residency in 2 years.',
    partTimeJobDetails: '20 hours/week during semester, 40 hours/week during holidays. Minimum wage €12.70/hr.',
    embassyDhakaLocation: 'Embassy of Ireland in New Delhi (Submissions via VFS Dhaka)',
    visaSuccessRate: '91% with strong financial sponsorship'
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    topUniversities: ['University of Waterloo', 'University of British Columbia (UBC)', 'University of Alberta', 'Concordia University'],
    avgTuitionEUR: 'CAD 18,000 - 32,000 / yr',
    livingCostEUR: 'CAD 1,500 - 1,900 / mo',
    scholarshipName: 'Graduate Teaching & Research Assistantships (TA/RA)',
    scholarshipDetails: 'Thesis-based Master of Science programs often come with full funding + CAD 20k/yr stipend.',
    postStudyWork: 'Up to 3 Years Post-Graduation Work Permit (PGWP)',
    budgetCategory: '30plus',
    budgetBDTFormatted: '28 - 38 Lakh BDT (Incl. GIC)',
    blockedAccountRequired: true,
    blockedAccountEUR: 'CAD 20,635 (GIC account)',
    keyTags: ['3-Yr PGWP', 'Spouse Work Permit', 'Express Entry PR', 'High Standard'],
    highlights: ['3-year post-study open work permit for 2-year masters degrees', 'Spouse eligible for open work permit during study period', 'Clear provincial nominee programs (PNP) specifically for STEM Master graduates'],
    prPathway: 'Canadian Experience Class (Express Entry) and BC PNP Tech / Ontario Masters Stream.',
    partTimeJobDetails: '20 hours per week off-campus during academic sessions.',
    embassyDhakaLocation: 'High Commission of Canada in Dhaka (VFS Dhaka)',
    visaSuccessRate: '82% under student SDS stream'
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    topUniversities: ['Delft University of Technology (TU Delft)', 'University of Amsterdam', 'Eindhoven University of Tech'],
    avgTuitionEUR: '€14,000 - €19,000 / yr',
    livingCostEUR: '€1,000 - €1,300 / mo',
    scholarshipName: 'Holland Scholarship & Justo / TU Delft Excellence',
    scholarshipDetails: 'Tuition reduction of €5,000 to full tuition waivers for top 10% applicants.',
    postStudyWork: '1 Year Search Year Visa (Zoekjaar)',
    budgetCategory: '20-30',
    budgetBDTFormatted: '24 - 30 Lakh BDT',
    blockedAccountRequired: false,
    keyTags: ['High English Fluency', 'ASML & Booking.com', 'Zoekjaar Visa', 'Cycling Capital'],
    highlights: ['Over 95% of Dutch citizens speak fluent English', 'Home to semiconductor monopoly ASML, Philips, Booking.com, and Uber EMEA HQ', 'Highly regarded master degrees with strong industry links'],
    prPathway: 'Highly Skilled Migrant status leads to Dutch PR / citizenship in 5 years.',
    partTimeJobDetails: 'Up to 16 hours per week with TWV work permit.',
    embassyDhakaLocation: 'Embassy of the Kingdom of the Netherlands in Dhaka (Gulshan)',
    visaSuccessRate: '93%'
  },
  {
    id: 'finland',
    name: 'Finland',
    flag: '🇫🇮',
    topUniversities: ['Aalto University', 'University of Helsinki', 'Tampere University'],
    avgTuitionEUR: '€12,000 - €15,000 / yr',
    livingCostEUR: '€800 - €1,000 / mo',
    scholarshipName: 'Finland Scholarship & University Tuition Waivers',
    scholarshipDetails: '50% to 100% tuition fee waiver automatically considered during university application.',
    postStudyWork: '2 Years Post-study Work Permit',
    budgetCategory: '15-20',
    budgetBDTFormatted: '15 - 22 Lakh BDT (With 50% waiver)',
    blockedAccountRequired: false,
    keyTags: ['Happiest Country', 'Generous Waivers', '2-Yr Stayback', 'Nokia/Supercell'],
    highlights: ['50% - 100% tuition waivers very common for Bangladeshi CSE applicants with CGPA 3.4+', 'Continuous residence permit granted for the full study duration (Type A permit)', '2-year post-study job seeker visa after graduation'],
    prPathway: 'Permanent residency (Type P) after 4 continuous years on Type A permit (study time counts 50%).',
    partTimeJobDetails: 'Up to 30 hours per week average during terms.',
    embassyDhakaLocation: 'Embassy of Finland in New Delhi (VFS Dhaka for biometrics)',
    visaSuccessRate: '90%'
  }
];

export const AGENCIES_DATA: Agency[] = [
  {
    id: 'eurotech-pathways',
    name: 'EuroTech Pathways',
    specialty: 'Specialist in Central & Western Europe',
    rating: 4.9,
    reviewCount: 120,
    description: 'Expert handling of Uni-Assist Germany blocked accounts, Universitaly admission files, and Poland technical polytechnic enrolments.',
    destinations: ['Germany', 'Italy', 'Poland'],
    services: ['Blocked Account Guidance', 'SOP & Motivation Letter Audit', 'Visa Mock Interview', 'Pre-departure Briefing'],
    isVerified: true,
    officeLocation: 'Banani, Dhaka',
    guaranteeText: 'Zero file processing fee if university admission is not secured.'
  },
  {
    id: 'nordic-eu-scholar-hub',
    name: 'Nordic & EU Scholar Hub',
    specialty: 'Specialist in Fully Funded Scholarships',
    rating: 4.8,
    reviewCount: 95,
    description: 'Dedicated coaching for Stipendium Hungaricum, Swedish Institute, Finland tuition waivers, and Italian regional DSU frameworks.',
    destinations: ['Sweden', 'Finland', 'Denmark', 'Germany', 'Hungary'],
    services: ['Scholarship Dossier Legalization', 'Research Proposal Review', 'Financial Affidavit Guidance', 'Embassy Submission Checklist'],
    isVerified: true,
    officeLocation: 'Gulshan 1, Dhaka',
    guaranteeText: 'Strict verification of documents under Ministry of Foreign Affairs protocols.'
  },
  {
    id: 'global-cs-admissions-advisory',
    name: 'Global CS Admissions Advisory',
    specialty: 'High Tech Hub Specialization',
    rating: 4.9,
    reviewCount: 180,
    description: 'Specialized graduate admissions prep for competitive Computer Science programs with high post-graduation employment rates.',
    destinations: ['Ireland', 'Canada', 'Netherlands', 'Germany'],
    services: ['GitHub Portfolio Review', 'Technical SOP Writing', 'Scholarship Matching', 'Post-study Blue Card Strategy'],
    isVerified: true,
    officeLocation: 'Dhanmondi, Dhaka',
    guaranteeText: 'Direct alumni mentorship from graduates currently working at European tech giants.'
  },
  {
    id: 'transatlantic-stem-counsel',
    name: 'Trans-Atlantic STEM Counsel',
    specialty: 'North American Graduate Fellowship',
    rating: 4.8,
    reviewCount: 88,
    description: 'Focused exclusively on thesis-based Computer Science and Data Science Master degrees in Canada and top European polytechnics.',
    destinations: ['Canada', 'Ireland', 'Germany'],
    services: ['Professor Cold Email Strategy', 'Research CV Optimization', 'GIC Account Setup', 'Visa File Compilation'],
    isVerified: true,
    officeLocation: 'Uttara, Dhaka',
    guaranteeText: 'Licensed education agent with zero visa fraud record.'
  }
];

export const CAREER_SPRINTS: CareerSprint[] = [
  {
    id: 'sprint-se',
    sprintNumber: 1,
    title: 'CSE → Software Engineer',
    subtitle: 'Core algorithmic & engineering foundation.',
    stages: ['Language Syntax (Java/C++)', 'Data Structures & Algo', 'OOP & Design Patterns', 'System Design Basics', 'LeetCode / Mock Tech'],
    outcomes: 'Ready for Dhaka product firms (Chaldal, Pathao, bKash) entry rounds.'
  },
  {
    id: 'sprint-ai',
    sprintNumber: 2,
    title: 'CSE → AI Engineer',
    subtitle: 'Mathematical modeling & neural pipelines.',
    stages: ['Linear Algebra & Calculus', 'Python, NumPy & Pandas', 'Classical ML (Scikit-Learn)', 'Deep Learning (PyTorch)', 'LLMs & RAG Systems'],
    outcomes: 'Capable of shipping production AI models and working at AI labs.'
  },
  {
    id: 'sprint-data',
    sprintNumber: 3,
    title: 'CSE → Data Analyst',
    subtitle: 'Business intelligence & query optimization.',
    stages: ['Advanced Excel & Math', 'SQL & Query Optimization', 'Power BI / Tableau Viz', 'Python Exploratory Data', 'Fintech Case Studies'],
    outcomes: 'Equipped to handle analytics pipelines in telecom, fintech and logistics.'
  },
  {
    id: 'sprint-security',
    sprintNumber: 4,
    title: 'CSE → Cyber Security',
    subtitle: 'Offensive testing & defense operations.',
    stages: ['Linux Kernels & CCNA', 'Security Principles & Crypto', 'CEH & Hands-on Labs', 'SIEM & Threat Hunting', 'Bug Bounty / SOC Level 1'],
    outcomes: 'Qualified for junior SOC analyst positions and penetration testing.'
  },
  {
    id: 'sprint-abroad',
    sprintNumber: 5,
    title: 'CSE → Master\'s Abroad',
    subtitle: 'Global graduate study & relocation.',
    stages: ['CGPA Audit (Min 3.0+)', 'IELTS Exam (Target 6.5)', 'Uni-Assist / Universitaly', 'DSU / Gov Scholarship', 'Dhaka VFS Visa Stamp'],
    outcomes: 'Direct enrolment at European polytechnics with subsidized tuition.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Saiful Islam',
    university: 'BRAC University \'23',
    currentRole: 'MSc Computer Science',
    destination: 'Politecnico di Milano 🇮🇹',
    quote: 'Masruk\'s Italy Universitaly and DSU scholarship guide saved me over 3 Lakh BDT in agency fees. I received my full tuition waiver at Politecnico di Milano without a single middleman.',
    rating: 5,
    initials: 'SI'
  },
  {
    id: '2',
    name: 'Nafis Hasan',
    university: 'AIUB \'24',
    currentRole: 'Software Engineer',
    destination: 'Pathao 🇧🇩',
    quote: 'The Full Stack portfolio guide made all the difference. Instead of showing the same generic To-Do app everyone builds, I built a micro-fintech prototype with bKash API. Cracked Pathao in 3 rounds.',
    rating: 5,
    initials: 'NH'
  },
  {
    id: '3',
    name: 'Farzana Akter',
    university: 'BUET \'22',
    currentRole: 'MSc Informatics & Werkstudent',
    destination: 'Technical University of Munich (TUM) 🇩🇪',
    quote: 'The blocked account breakdown and Uni-Assist timeline gave me exact clarity. Sitting now in Munich pursuing my Master\'s at TU Munich, doing a Werkstudent role in AI earning €18/hour.',
    rating: 5,
    initials: 'FA'
  },
  {
    id: '4',
    name: 'Tanvir Hossain',
    university: 'UIU \'23',
    currentRole: 'Cloud Engineer',
    destination: 'Brain Station 23 🇧🇩',
    quote: 'Following the DevOps track gave me real containerization experience before my graduation. Brain Station interviewers loved that I had automated GitHub Actions deployed to AWS.',
    rating: 5,
    initials: 'TH'
  }
];

export const ITALY_GUIDE_SECTIONS = [
  {
    title: '1. Why Italy for CSE?',
    content: 'Top-ranked historical polytechnics with full English curricula, access to northern Italy\'s advanced manufacturing & Milan software industry, and zero financial tuition burden.'
  },
  {
    title: '2. Low Tuition (€0 - €2,800)',
    content: 'Public universities calculate tuition via ISEE Parificato (Family Income Index). 95% of Bangladeshi students qualify for lowest tier tuition reductions (€156 - €500 regional tax only).'
  },
  {
    title: '3. Living Costs Breakdown',
    content: 'Milan / Rome: €700 - €950/mo. Turin / Bologna / Genoa / Pisa: €550 - €700/mo. Southern Italy (Messina, Calabria): €450 - €600/mo including single room & groceries.'
  },
  {
    title: '4. Top Politecnicos',
    content: 'Politecnico di Milano (Polimi, QS #111), Politecnico di Torino (PoliTo), Sapienza University of Rome, University of Padua, and University of Pisa (birthplace of Italian CS).'
  },
  {
    title: '5. DSU / ER.GO Regional Grant',
    content: 'Provides: 100% tuition waiver + ~€7,200/year cash stipend + 1 free meal/day at student cantina. Requires family income certificate legalized from Dhaka Foreign Ministry.'
  },
  {
    title: '6. CIMEA & Pre-enrolment',
    content: 'CIMEA Statement of Comparability replaces the old embassy DOV. Applied digitally via CIMEA portal with BUET, DU, BRACU, NSU, AIUB transcript copies.'
  },
  {
    title: '7. IELTS Requirements',
    content: 'Most Italian CS programs require 6.0 overall (no band less than 5.5). Some accept Medium of Instruction (MOI) certificates from Bangladeshi universities if stated on syllabus.'
  },
  {
    title: '8. Universitaly Portal',
    content: 'Mandatory Italian government portal where you upload your university offer letter and select "Embassy of Italy in Dhaka" for national visa processing.'
  },
  {
    title: '9. Italian Embassy Dhaka Visa',
    content: 'Submissions processed through VFS Global Dhaka (Gulshan). Key items: Passport, Universitaly summary, Bank statement, Sponsor Affidavit, and accommodation booking.'
  },
  {
    title: '10. Sponsor & Bank Balance',
    content: 'Embassy typically requires 6-month continuous bank statement showing ~10 to 14 Lakh BDT with verified source of income, land property documents, and tax TIN certificates.'
  },
  {
    title: '11. 20 Hrs/Week Part-time Work',
    content: 'International students can legally work up to 20 hrs/week (1,040 hrs/year). Typical rates: €9 - €14/hour in warehousing, delivery, university admin, or tech freelancing.'
  },
  {
    title: '12. Permesso di Soggiorno',
    content: 'Upon graduation, you can apply for "Permesso di Soggiorno per Attesa Occupazione" (12-month job seeker permit) to convert into a regular Work Residence Permit.'
  },
  {
    title: '13. Northern Italy Tech Market',
    content: 'Lombardy, Piedmont, and Emilia-Romagna boast fast-growing software hubs. Entry level software developer salaries range between €28,000 - €36,000/year.'
  },
  {
    title: '14. Permanent Residence (PR)',
    content: 'Eligible for the EU Blue Card or Long-term Residence Permit (Carta di Soggiorno) after 5 continuous years of legal stay and tax contributions.'
  },
  {
    title: '15. Total Initial Outlay (BDT)',
    content: 'CIMEA + Universitaly + VFS Visa Fee + Flight Ticket + 1st Month Rent = Approx. 3.5 - 4.5 Lakh BDT total spend before landing in Italy.'
  }
];

export const GERMANY_GUIDE_SECTIONS = [
  {
    title: '1. Public University Zero Tuition',
    content: 'Almost all public universities in Germany charge €0 tuition fees (except Baden-Württemberg which charges €1,500/sem). You only pay a semester ticket fee of ~€250 - €350.'
  },
  {
    title: '2. Blocked Account Requirement (€11,208)',
    content: 'For German student visa, you must deposit €11,208 into a recognized blocked account provider (Expatrio, Fintiba, or Coracle). You can withdraw €934/month after arrival.'
  },
  {
    title: '3. Uni-Assist Portal & VPD',
    content: 'Most technical universities process foreign credentials through Uni-Assist. Requires certified copies of transcripts and Vorprüfungsdokumentation (VPD).'
  },
  {
    title: '4. German Embassy Dhaka Wait Times',
    content: 'Appointment slots on the German Embassy Dhaka waiting list can take 6 to 12 months. Students are strongly advised to enter the waitlist early with proof of bachelor degree.'
  },
  {
    title: '5. Werkstudent (Working Student) Jobs',
    content: 'In Germany, tech students enjoy privileged tax status as "Werkstudent". You can work up to 20 hrs/week at tech firms like BMW, Siemens, SAP, earning €15 - €22/hour.'
  },
  {
    title: '6. 18-Month Job Search Visa',
    content: 'After completing your MSc in Germany, you get an 18-month Job Seeker Visa with unrestricted full-time work rights in any profession.'
  },
  {
    title: '7. EU Blue Card & Fast-Track PR',
    content: 'Once you secure a tech role with minimum qualifying salary (~€45,300/yr for shortage occupations), you receive an EU Blue Card. PR is granted in 21 months with German B1.'
  },
  {
    title: '8. Top German Tech Universities',
    content: 'Technical University of Munich (TUM), RWTH Aachen, Technical University of Berlin, University of Stuttgart, Karlsruhe Institute of Technology (KIT).'
  }
];
