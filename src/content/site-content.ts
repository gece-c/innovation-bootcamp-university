export type Track = {
  slug: string;
  name: string;
  summary: string;
  capacity: string;
  duration: string;
  skills: string[];
  careers: string[];
};

export type InternshipPosition = {
  slug: string;
  title: string;
  company?: string;
  location?: string;
  duration?: string;
  schedule?: "Full-time" | "Part-time" | "Flexible";
  status?: "Open" | "Closed" | "Coming Soon";
  summary?: string;
};

export type OpportunityPage = {
  slug: "internships";
  title: string;
  summary: string;
  ctaLabel: string;
};

export const navItems = [
  { href: "/resources/how-it-works", label: "How It Works" },
  { href: "/company", label: "About" }
];

export const hero = {
  badge: "",
  title: "Launch Your Tech Career From Student to Professional",
  body:
    "Start with foundational education, then transition to internship-based learning through real projects in high-demand tech roles.",
  actions: [
    { href: "/opportunities/internships", label: "Pre-Register" },
    { href: "/opportunities/internships", label: "Explore Internships" }
  ],
  stats: [
    { label: "Learning Journey", value: "3 Tiers" },
    { label: "Industry Sectors", value: "8+" },
    { label: "Program Structure", value: "500 Hours Required" }
  ]
};

export const whyChoose = {
  badge: "What Makes Us Different",
  title: "Why Choose Innovation Bootcamp University",
  body:
    "Start with education, progress through internship-based learning, and graduate as a tech professional with our cooperative approach.",
  points: [
    {
      title: "Learn from IBU Mentors",
      description:
        "Get mentored by experienced IBU instructors who bring practical expertise to your learning journey.",
      icon: "🎓"
    },
    {
      title: "Cooperative Education Model",
      description:
        "Start with foundational learning, then transition to internship-based learning as you develop advanced skills through guided milestones.",
      icon: "🤝"
    },
    {
      title: "Hands-on Projects",
      description:
        "Build real-world projects that demonstrate your capabilities to potential employers.",
      icon: "🛠️"
    },
    {
      title: "Collaborative Learning",
      description:
        "Join a community of learners and build your professional network from day one.",
      icon: "👥"
    },
    {
      title: "Job-Ready Skills",
      description:
        "Gain certifications and practical skills aligned to current technical role expectations.",
      icon: "💎"
    },
    {
      title: "Fast-Track Career Growth",
      description:
        "Accelerate your career progression with our structured learning paths and job placement support.",
      icon: "🚀"
    }
  ]
};

export const tracks: Track[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary:
      "Master full-stack development with modern frameworks and cloud technologies while building a job-ready portfolio.",
    capacity: "No cohort size limit",
    duration: "Completion requirement: 500 hours",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    careers: ["Frontend Developer", "Full Stack Engineer"]
  },
  {
    slug: "ai-machine-learning",
    name: "AI & Machine Learning",
    summary:
      "Build intelligent systems with Python, TensorFlow, and OpenAI tools for in-demand AI roles.",
    capacity: "No cohort size limit",
    duration: "Completion requirement: 500 hours",
    skills: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
    careers: ["Machine Learning Engineer", "AI Research Assistant"]
  },
  {
    slug: "robotics-engineering",
    name: "Robotics Engineering",
    summary:
      "Create autonomous systems through hardware integration, computer vision, and real-world engineering workflows.",
    capacity: "No cohort size limit",
    duration: "Completion requirement: 500 hours",
    skills: ["ROS", "C++", "Computer Vision", "Arduino"],
    careers: ["Robotics Engineer", "Embedded Systems Developer"]
  }
];

export const careerOpportunitiesSection = {
  title: "Career Opportunities",
  body:
    "Our curriculum prepares you for roles across a wide range of tech sectors. Here are the industries where our graduates can build successful careers.",
  highlights: [
    { label: "Industry Sectors", value: "8+", icon: "🏢", tint: "primary" },
    { label: "Program Completion", value: "500 Hours", icon: "🎒", tint: "secondary" },
    { label: "Target Placement Rate", value: "90%+", icon: "🎯", tint: "rose" }
  ],
  roles: [
    {
      title: "Web Development",
      summary: "Building modern web applications with React, Next.js, and other cutting-edge frameworks.",
      icon: "💻",
      tint: "primary"
    },
    {
      title: "Cloud Computing",
      summary: "Working with AWS, Azure, and other cloud platforms to build scalable infrastructure.",
      icon: "☁️",
      tint: "secondary"
    },
    {
      title: "AI & Machine Learning",
      summary: "Building intelligent systems and models that learn from data and make predictions.",
      icon: "🤖",
      tint: "green"
    },
    {
      title: "Data Engineering",
      summary: "Creating robust data pipelines and storage solutions for big data applications.",
      icon: "🗄️",
      tint: "amber"
    },
    {
      title: "DevOps",
      summary: "Streamlining development and operations with CI/CD pipelines and infrastructure as code.",
      icon: "⚙️",
      tint: "rose"
    },
    {
      title: "Cybersecurity",
      summary: "Protecting systems and data from threats and vulnerabilities through secure coding practices.",
      icon: "🛡️",
      tint: "green"
    },
    {
      title: "Global Tech Companies",
      summary: "Opportunities at companies solving problems at global scale with innovative technologies.",
      icon: "🌍",
      tint: "secondary"
    },
    {
      title: "Tech Startups",
      summary: "Working with innovative startups building the next generation of technology solutions.",
      icon: "💡",
      tint: "amber"
    }
  ]
};

export const opportunities = [
  "Internships"
];

export const opportunityPages: OpportunityPage[] = [
  {
    slug: "internships",
    title: "Internships",
    summary: "Explore open internship positions across engineering, AI, robotics, and business teams.",
    ctaLabel: "Check Internships"
  }
];

export const internshipPositions: InternshipPosition[] = [
  {
    slug: "ai-agi-intern",
    title: "AI/AGI Intern",
    status: "Open",
    summary: "Support AI product experiments and model evaluation workflows."
  },
  {
    slug: "animal-science-research-intern",
    title: "Animal Science and Veterinary Research Intern",
    status: "Open",
    summary: "Assist with data capture and research documentation projects."
  },
  {
    slug: "biomedical-engineering-intern",
    title: "Biomedical Engineering Intern",
    status: "Open",
    summary: "Contribute to applied engineering prototypes in healthcare technology."
  },
  {
    slug: "business-development-sales-intern",
    title: "Business Development and Sales Intern",
    status: "Open",
    summary: "Help drive outreach, lead tracking, and structured follow-up execution."
  },
  {
    slug: "business-development-sales-ai-robotics-intern",
    title: "Business Development and Sales Intern (AI and Robotics)",
    status: "Open",
    summary: "Support AI and robotics outreach pipelines and market analysis."
  },
  {
    slug: "computer-vision-engineering-intern",
    title: "Computer Vision Engineering Intern",
    status: "Open",
    summary: "Work on image processing, model testing, and deployment validation."
  },
  {
    slug: "content-marketing-intern",
    title: "Content Marketing Intern",
    status: "Open",
    summary: "Create campaign content and optimize messaging for growth channels."
  },
  {
    slug: "control-systems-engineering-intern",
    title: "Control Systems Engineering Intern",
    status: "Open",
    summary: "Assist with system modeling, tuning, and controls documentation."
  },
  {
    slug: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    status: "Open",
    summary: "Execute digital campaigns and analyze channel performance metrics."
  },
  {
    slug: "full-stack-developer-intern",
    title: "Full Stack Developer Intern",
    schedule: "Full-time",
    status: "Open",
    summary: "Build modern web features using React, Next.js, and Node.js."
  },
  {
    slug: "machine-learning-intern",
    title: "Machine Learning Intern",
    schedule: "Full-time",
    status: "Open",
    summary: "Develop and evaluate ML models for real-world AI use cases."
  },
  {
    slug: "robotics-engineering-intern",
    title: "Robotics Engineering Intern",
    schedule: "Full-time",
    status: "Open",
    summary: "Design and test robotics components for next-generation systems."
  },
  {
    slug: "data-science-intern",
    title: "Data Science Intern",
    schedule: "Part-time",
    status: "Open",
    summary: "Analyze datasets and deliver dashboards for actionable insights."
  }
];

export const resources = [
  {
    slug: "how-it-works",
    title: "How It Works",
    summary: "See the real current flow from enrollment through internship-based learning."
  }
];

export const faq = [
  {
    question: "How does the cooperative education model work?",
    answer:
      "You begin with core skill building, transition into paid project participation, and continue advancing through guided mentorship and real-world delivery."
  },
  {
    question: "What are the program prerequisites?",
    answer:
      "No prior tech experience is required. Motivation, consistency, and willingness to collaborate are the main prerequisites."
  },
  {
    question: "Can I participate while working full-time?",
    answer:
      "Yes. Scheduling support and milestone planning are designed for career changers, and time commitment can increase as you take on deeper project responsibilities."
  }
];

export const howItWorksPage = {
  title: "How It Works",
  subtitle: "Our current model combines guided learning with internship-based practice at Innovation Bootcamp University.",
  cta: { href: "/programs", label: "Explore Programs" },
  stages: [
    {
      title: "Tier 1: Core Foundations",
      description: "Build essential technical skills with structured lessons, checkpoints, and mentor guidance."
    },
    {
      title: "Tier 2: Applied Practice",
      description: "Work on supervised practical assignments to strengthen delivery quality and team collaboration."
    },
    {
      title: "Tier 3: Internship-Based Learning",
      description: "Participate in internship-style work experiences aligned with your internship type and performance readiness."
    }
  ],
  comparisonTitle: "Why This Structure Works",
  comparison: {
    traditional: [
      "Learning and practical work are often disconnected",
      "Students may finish with limited real delivery experience",
      "Progress is usually measured by time instead of outcomes",
      "Transition into internship work can feel abrupt"
    ],
    cooperative: [
      "Learning and practical application are intentionally connected",
      "Students build confidence through guided project execution",
      "Progress is milestone-based and skill-verified",
      "Internship readiness is developed step by step"
    ]
  },
  finalCta: {
    title: "Ready to Start?",
    description:
      "Apply now and begin your path through our three-tier model with internship-based learning at IBU.",
    href: "/opportunities/internships",
    label: "Apply Now"
  }
};

export const studentHandbookPage = {
  title: "Student Handbook",
  subtitle: "Everything you need to know about your journey with Innovation Bootcamp University.",
  cta: { href: "/resources/faqs", label: "View FAQs" },
  sections: [
    {
      title: "Academic Policies",
      items: ["Attendance Requirements", "Grading System", "Academic Integrity", "Project Submissions"]
    },
    {
      title: "Program Schedule",
      items: ["Daily Schedule", "Important Dates", "Break Periods", "Make-up Sessions"]
    },
    {
      title: "Student Conduct",
      items: ["Code of Conduct", "Online Etiquette", "Collaboration Guidelines", "Academic Honesty"]
    },
    {
      title: "Support Services",
      items: ["Technical Support", "Academic Support", "Career Services", "Mental Health Resources"]
    },
    {
      title: "Certification",
      items: ["Requirements", "Assessment Criteria", "Portfolio Review", "Certificate Issuance"]
    },
    {
      title: "Communication",
      items: ["Office Hours", "Mentor Meetings", "Discussion Forums", "Feedback Channels"]
    }
  ],
  helpBlock: {
    title: "Need Additional Help?",
    description:
      "Can't find what you're looking for? Our support team is here to help you with any questions or concerns.",
    href: "/company/contact",
    label: "Contact Support"
  }
};

export const blogPage = {
  title: "Latest Insights & Tutorials",
  subtitle:
    "Stay up to date with the latest trends in tech education, programming tutorials, and student success stories.",
  featured: {
    kicker: "Featured Post",
    category: "The Future of Tech Education",
    title: "The Future of Tech Education",
    excerpt:
      "Exploring how AI and virtual reality are transforming the way we learn and teach programming.",
    author: "Sarah Johnson",
    date: "March 15, 2024"
  },
  recentTitle: "Recent Posts",
  posts: [
    {
      title: "Getting Started with Web Development",
      excerpt: "A comprehensive guide for beginners looking to start their journey in web development.",
      author: "Michael Chen",
      date: "March 10, 2024"
    },
    {
      title: "The Importance of Soft Skills in Tech",
      excerpt:
        "Why technical skills alone are not enough to succeed in the modern tech industry.",
      author: "John Smith",
      date: "March 5, 2024"
    },
    {
      title: "Building Your First React Application",
      excerpt:
        "Step-by-step tutorial on creating a React app from scratch with modern best practices.",
      author: "Emily Brown",
      date: "March 1, 2024"
    }
  ]
};

export const faqPage = {
  title: "Frequently Asked Questions",
  subtitle:
    "Find answers to common questions about internship pathways, application process, financial aid, and student support services.",
  supportText: "Still have questions? We're here to help.",
  supportLink: { href: "/company/contact", label: "Contact our support team" }
};

export const faqAccordionItems = [
  {
    question: "What makes Innovation Bootcamp University different?",
    answer:
      "Our program combines hands-on learning, guided mentorship, and internship-based learning in a structured three-tier model. We focus on practical skill development and consistent progress."
  },
  {
    question: "Do I need prior programming experience?",
    answer:
      "No prior programming experience is required. We support internship types across engineering, design, marketing, QA, neuroscience, business, and other fields where coding is optional unless your role requires it."
  },
  {
    question: "How does tier progression work?",
    answer:
      "Progress follows a three-tier model with milestone-based advancement. Completion is based on fulfilling the required 500 learning and project hours."
  },
  {
    question: "How long are the programs?",
    answer:
      "Program duration depends on your track and pace.\n\n- Full-time intensive: 8–16 weeks\n- Part-time: 20+ weeks"
  },
  {
    question: "What kind of support do students receive?",
    answer:
      "Students receive support through mentoring, technical feedback, structured checkpoints, and community collaboration across their learning journey."
  },
  {
    question: "What opportunities are currently available?",
    answer:
      "Current opportunities are internship-based pathways with roles across technology, robotics, science, design, marketing, business, operations, QA, and other interdisciplinary areas."
  },
  {
    question: "What does the application process look like?",
    answer:
      "The process is simple and focused on fit:\n\n- Online application\n- Short interview to understand your goals\n- Technical assessment (for advanced roles)"
  },
  {
    question: "Is financial support available?",
    answer:
      "Yes. We offer flexible options to make the program accessible:\n\n- Scholarships\n- Income share agreements\n- Payment plans"
  },
  {
    question: "Will I need to learn coding for every internship type?",
    answer:
      "No. Some internship types are non-coding by design, while others include technical tools. You can choose a pathway based on your interests and goals, and add programming skills if you want to expand your options."
  }
];

export const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-of-service", label: "Terms of Service" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
  { href: "/legal/accessibility", label: "Accessibility" }
];

export const companyLinks = [
  { href: "/company", label: "About" },
  { href: "/company/contact", label: "Contact" },
  { href: "/company/press", label: "Press" }
];

export const stayUpdatedBlock = {
  title: "Stay Updated",
  body:
    "Be the first to know about new internship openings, company collaborations, and career opportunities.",
  placeholder: "Enter your email",
  buttonLabel: "Subscribe"
};
