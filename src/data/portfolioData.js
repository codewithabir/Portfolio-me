/**
 * Portfolio Data for Md. Abir Hossan
 * All content is centralized here for easy updates and maintenance.
 */

export const personalData = {
  name: "Md. Abir Hossan",
  preferredName: "Abir",
  role: "CSE Student | Aspiring Software Developer | Web Developer",
  tagline: "Turning Ideas into Digital Experiences Through Code.",
  footerTagline: "Building Skills, Creating Solutions, and Growing Every Day.",
  university: "National Institute of Textile Engineering and Research (NITER)",
  location: "Dhaka, Bangladesh",
  status: "Open to Collaborations & Learning Opportunities",
  email: "codewithabir@gmail.com",
  githubUsername: "codewithabir",
  githubUrl: "https://github.com/codewithabir",
  linkedinUrl: "https://linkedin.com/in/codewithabir",
  profileImage: "/profile.png", // Active profile photo in public/profile.png
  dynamicRoles: [
    "CSE Student @ NITER",
    "Aspiring Software Developer",
    "Fullstack Web Developer",
    "Problem Solver & Tech Enthusiast",
    "Junior Office Secretary @ NCC"
  ],
  resumeUrl: "#resume", // Can be linked to /resume.pdf
  
  heroIntro: "I am passionate about technology, programming, and building meaningful digital solutions. I am continuously learning, creating projects, and improving my skills to become a better software developer.",

  aboutStory: [
    "I am currently studying Computer Science and Engineering (CSE) at the National Institute of Textile Engineering and Research (NITER), Session 2023–2024.",
    "My journey in tech is driven by an insatiable curiosity for problem-solving, clean code architecture, and modern human-centric digital interfaces.",
    "I actively invest time into mastering core computer science foundations—especially Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), Java, and modern JavaScript ecosystem—while crafting fullstack web applications.",
    "Beyond independent coding, I serve as the Junior Office Secretary at the NITER Computer Club, where I actively coordinate tech seminars, programming workshops, and hackathons.",
    "My overarching mission is to grow into an exceptional Software Engineer capable of designing scalable, impactful, and high-performance digital systems."
  ],

  terminalBio: {
    name: "Md. Abir Hossan",
    currentFocus: ["Data Structures & Algorithms", "Fullstack Web Development", "Java & C++"],
    institution: "NITER (CSE Department)",
    session: "2023–2024",
    hobbies: ["Problem Solving", "Open Source Exploration", "Tech Community Leadership", "UI/UX Design"],
    motto: "Turning Ideas into Digital Experiences Through Code",
    currentStatus: "Building projects & learning every day"
  },

  quickStats: [
    { label: "Institution", value: "NITER", subtext: "CSE Department" },
    { label: "Session", value: "2023–2024", subtext: "4-Year B.Sc Program" },
    { label: "Core Focus", value: "Software Dev", subtext: "DSA & Web Tech" },
    { label: "Leadership", value: "NCC Secretary", subtext: "NITER Computer Club" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "programming",
      title: "Programming Languages",
      description: "Core languages used for algorithmic problem solving, software logic, and systems.",
      skills: [
        { name: "C", level: "Intermediate", icon: "Code2", tag: "Procedural / Foundations", color: "from-blue-500 to-indigo-500" },
        { name: "C++", level: "Proficient", icon: "Cpu", tag: "OOP / Competitive Programming", color: "from-indigo-500 to-cyan-500" },
        { name: "Java", level: "Intermediate", icon: "Coffee", tag: "OOP / Application Dev", color: "from-amber-500 to-red-500" },
        { name: "JavaScript", level: "Proficient", icon: "FileCode2", tag: "ES6+ / Dynamic Web", color: "from-yellow-400 to-amber-500" }
      ]
    },
    {
      id: "webdev",
      title: "Web Development",
      description: "Building responsive, modern, and accessible user interfaces and web applications.",
      skills: [
        { name: "HTML5", level: "Advanced", icon: "Layout", tag: "Semantic Markup / SEO", color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: "Advanced", icon: "Palette", tag: "Flexbox, Grid, Animations", color: "from-blue-400 to-cyan-500" },
        { name: "JavaScript (ES6+)", level: "Proficient", icon: "FileCode", tag: "Async/Await, DOM, APIs", color: "from-yellow-500 to-emerald-500" },
        { name: "React.js", level: "Proficient", icon: "Atom", tag: "Hooks, Components, SPA", color: "from-cyan-400 to-blue-600" },
        { name: "Tailwind CSS", level: "Advanced", icon: "Sparkles", tag: "Utility-First, Responsive", color: "from-teal-400 to-cyan-500" }
      ]
    },
    {
      id: "learning",
      title: "Currently Learning & Mastering",
      description: "Active focus areas in continuous professional development and CS fundamentals.",
      skills: [
        { name: "Data Structures & Algorithms", level: "In Progress", icon: "Network", tag: "Trees, Graphs, DP, Sorting", color: "from-violet-500 to-purple-600" },
        { name: "Object-Oriented Programming", level: "In Progress", icon: "Layers", tag: "Design Patterns, SOLID, Polymorphism", color: "from-emerald-500 to-teal-600" },
        { name: "Advanced JavaScript", level: "In Progress", icon: "Terminal", tag: "Closures, Event Loop, Prototypes", color: "from-yellow-500 to-amber-600" },
        { name: "Software Development Lifecycle", level: "In Progress", icon: "Workflow", tag: "Architecture, Clean Code, Testing", color: "from-indigo-500 to-blue-600" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Environments",
      description: "Version control, code editors, development environments, and workflows.",
      skills: [
        { name: "Git", level: "Proficient", icon: "GitBranch", tag: "Branching, Merging, Rebase", color: "from-orange-600 to-red-600" },
        { name: "GitHub", level: "Proficient", icon: "Github", tag: "codewithabir / Open Source", color: "from-slate-700 to-slate-900" },
        { name: "VS Code", level: "Advanced", icon: "Code", tag: "Extensions, Debugging, Snippets", color: "from-blue-500 to-indigo-600" },
        { name: "Command Line / Terminal", level: "Intermediate", icon: "TerminalSquare", tag: "Shell, Scripting, Automation", color: "from-emerald-600 to-cyan-600" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "featured-algo-visualizer",
    title: "Algorithm Visualizer & Pathfinding Suite",
    featured: true,
    badge: "Featured Spotlight Project",
    category: "Web Development",
    shortDescription: "An interactive, high-performance visualizer for core computer science algorithms including Dijkstra's, A* Search, BFS/DFS, and Sorting algorithms with customizable maze generation and real-time step execution.",
    fullDescription: "Built to bridge theoretical Computer Science concepts with dynamic visual intuition. Users can construct obstacle grids, adjust speed parameters, trigger step-by-step memory inspections, and observe time/space complexity analysis in real time.",
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Data Structures", "Algorithms", "HTML5 Canvas"],
    highlights: [
      "Visualizes Dijkstra, A*, Breadth-First Search, Depth-First Search",
      "Interactive maze generation (Recursive Division, Random Walls)",
      "Real-time complexity metrics and operation counters",
      "Fully responsive and touch-optimized controls"
    ],
    githubUrl: "https://github.com/codewithabir/algorithm-visualizer",
    liveUrl: "https://codewithabir.github.io/algorithm-visualizer",
    stats: { stars: 12, forks: 4, status: "Active" }
  },
  {
    id: "student-management-system",
    title: "Student Academic Record & Management System",
    featured: false,
    badge: "Core Software",
    category: "Software & C++",
    shortDescription: "A robust console and file-persistence academic management system built in C++ leveraging Object-Oriented Design, data encapsulation, and binary file streams.",
    technologies: ["C++", "OOP Principles", "File Handling", "Data Structures"],
    highlights: [
      "CRUD operations for student records and semester grades",
      "Automated SGPA/CGPA calculation engine",
      "Binary file stream encryption and persistence"
    ],
    githubUrl: "https://github.com/codewithabir/student-management-system",
    liveUrl: "https://github.com/codewithabir/student-management-system#demo",
    stats: { stars: 8, forks: 2, status: "Maintained" }
  },
  {
    id: "dev-resource-hub",
    title: "DevConnect - Developer Resources & Project Portal",
    featured: false,
    badge: "Web Platform",
    category: "Web Development",
    shortDescription: "A modern developer resource portal featuring curated documentation, interactive code snippet sharing, and clean bookmarking capabilities for tech students.",
    technologies: ["React.js", "Tailwind CSS", "Lucide Icons", "LocalStorage API"],
    highlights: [
      "Interactive search & filtering by tech categories",
      "Dark/Light theme synchronization with system preferences",
      "Mobile-first responsive glassmorphic UI"
    ],
    githubUrl: "https://github.com/codewithabir/devconnect-hub",
    liveUrl: "https://codewithabir.github.io/devconnect-hub",
    stats: { stars: 15, forks: 5, status: "Active" }
  },
  {
    id: "dsa-problem-tracker",
    title: "DSA Problem Solving Tracker & Code Vault",
    featured: false,
    badge: "DSA & Problem Solving",
    category: "Software & C++",
    shortDescription: "A structured repository and tracking tool cataloging solutions to classic DSA challenges across LeetCode, Codeforces, and Beecrowd with time & space complexity annotations.",
    technologies: ["C++", "Java", "Python", "Markdown", "Git"],
    highlights: [
      "Categorized by data structures (Arrays, Linked Lists, Trees, DP)",
      "Detailed editorial explanations and optimal approaches",
      "Continuous streak and progress dashboard"
    ],
    githubUrl: "https://github.com/codewithabir/dsa-problem-vault",
    liveUrl: "https://github.com/codewithabir/dsa-problem-vault",
    stats: { stars: 19, forks: 6, status: "Active" }
  },
  {
    id: "modern-landing-ui",
    title: "TechNext - Modern SaaS Product Showcase",
    featured: false,
    badge: "UI / UX Design",
    category: "Web Development",
    shortDescription: "A sleek, conversion-focused landing page featuring micro-interactions, smooth scroll triggers, and a modern glassmorphism aesthetic built with pure semantic HTML, modern CSS, and JavaScript.",
    technologies: ["HTML5", "Modern CSS", "JavaScript", "Responsive Design"],
    highlights: [
      "Smooth scroll navigation and dynamic testimonials",
      "Interactive pricing tier calculator",
      "100% Lighthouse performance & accessibility score"
    ],
    githubUrl: "https://github.com/codewithabir/technext-landing",
    liveUrl: "https://codewithabir.github.io/technext-landing",
    stats: { stars: 7, forks: 1, status: "Completed" }
  }
];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE)",
    institution: "National Institute of Textile Engineering and Research (NITER)",
    affiliation: "Constituent Institute of University of Dhaka",
    session: "2023–2024",
    duration: "4 Years (Undergraduate Degree)",
    status: "Currently Enrolled",
    location: "Nayarhat, Savar, Dhaka, Bangladesh",
    overview: "Pursuing a comprehensive curriculum encompassing core theoretical foundations, mathematical modeling, and practical software engineering disciplines.",
    coreCourses: [
      "Structured Programming Language (C)",
      "Object-Oriented Programming (C++ / Java)",
      "Data Structures and Algorithms",
      "Discrete Mathematics",
      "Digital Logic Design",
      "Database Management Systems",
      "Software Engineering Concepts"
    ],
    highlights: [
      "Active participant in campus programming contests and collaborative technical seminars.",
      "Dedicated to maintaining strong academic performance while building real-world projects.",
      "Engaged in peer coding groups and tech workshops through NITER Computer Club."
    ]
  }
];

export const activitiesData = [
  {
    title: "NITER Computer Club (NCC)",
    role: "Junior Office Secretary",
    badge: "Executive Leadership",
    period: "Active Tenure",
    description: "Serving as Junior Office Secretary, driving organizational efficiency, student engagement, and the planning of major campus technical activities.",
    keyResponsibilities: [
      "Coordinating intra-university programming workshops, coding bootcamps, and hackathons.",
      "Facilitating seamless communication between club executives, student members, and guest speakers.",
      "Managing event logistics, registration desks, and participant records for technical competitions.",
      "Promoting modern software development practices, open-source adoption, and problem-solving culture among juniors."
    ],
    impact: "Impacted 300+ students through hands-on technical sessions and campus tech festivals."
  },
  {
    title: "Programming & Technology Events",
    role: "Organizer & Participant",
    badge: "Workshops & Contests",
    period: "Ongoing",
    description: "Actively involved in organizing and competing in regional tech fests, inter-university hackathons, and programming sessions.",
    keyResponsibilities: [
      "Participated in competitive programming contests solving algorithmic problems under time constraints.",
      "Organized student workshops on Git/GitHub fundamentals, Web Development essentials, and modern IDE workflows.",
      "Attended industry guest lectures on cloud computing, modern software architectures, and career pathways."
    ],
    impact: "Cultivating a culture of continuous learning and teamwork."
  },
  {
    title: "Future Milestones & Certifications",
    role: "Lifelong Learner",
    badge: "Roadmap 2026",
    period: "In Progress",
    description: "Actively working toward industry-recognized certifications and open-source contributions.",
    keyResponsibilities: [
      "Targeting certifications in Advanced Data Structures & Algorithms, Java Software Architecture, and Fullstack Development.",
      "Contributing to reputable open-source repositories and expanding community developer tooling.",
      "Preparing for competitive hackathons and engineering internships."
    ],
    impact: "Designed to be seamlessly updated as new certifications and accolades are achieved."
  }
];

export const githubData = {
  username: "codewithabir",
  profileUrl: "https://github.com/codewithabir",
  tagline: "Building open source tools, exploring algorithms, and sharing code experiments.",
  stats: {
    repositories: "15+",
    contributions: "450+ Commits",
    followers: "Growing Community",
    streak: "Active Coding Habits"
  },
  featuredRepos: [
    {
      name: "algorithm-visualizer",
      description: "Interactive pathfinding and sorting algorithm visualizer built with modern web technologies.",
      language: "JavaScript / React",
      stars: 12,
      forks: 4,
      url: "https://github.com/codewithabir/algorithm-visualizer"
    },
    {
      name: "dsa-problem-vault",
      description: "Curated solutions to LeetCode, Codeforces, and Beecrowd problems with optimal time/space complexity analysis.",
      language: "C++ / Java",
      stars: 19,
      forks: 6,
      url: "https://github.com/codewithabir/dsa-problem-vault"
    },
    {
      name: "student-management-system",
      description: "Object-oriented student record management system with file persistence and CGPA calculations.",
      language: "C++",
      stars: 8,
      forks: 2,
      url: "https://github.com/codewithabir/student-management-system"
    },
    {
      name: "portfolio-md-abir-hossan",
      description: "Personal modern developer portfolio website built with React and Tailwind CSS.",
      language: "React / Tailwind",
      stars: 14,
      forks: 3,
      url: "https://github.com/codewithabir/portfolio"
    }
  ]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Activities", href: "#activities" },
  { name: "Contact", href: "#contact" }
];
