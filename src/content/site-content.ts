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
  slug: "internships" | "industry-partners" | "become-an-advisor" | "career-support";
  title: string;
  summary: string;
  ctaLabel: string;
};

export type IndustryPartner = {
  name: string;
  category: string;
  summary: string;
  support: string[];
};

export const navItems = [
  { href: "/programs", label: "Programs" },
  { href: "/resources", label: "Resources" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/company", label: "About" }
];

export const hero = {
  badge: "Applications Open",
  title: "Launch Your Tech Career From Student to Professional",
  body:
    "Start with foundational education, then transition to earning while you learn through real projects in high-demand tech roles.",
  actions: [
    { href: "/company#contact", label: "Pre-Register" },
    { href: "/opportunities/internships", label: "Explore Internships" }
  ],
  stats: [
    { label: "Tier Learning Path", value: "3" },
    { label: "Potential Earnings", value: "$65K+" },
    { label: "Initial Student Capacity", value: "100+" },
    { label: "Industry Sectors", value: "8+" }
  ]
};

export const whyChoose = {
  badge: "What Makes Us Different",
  title: "Why Choose Innovation Bootcamp University",
  body:
    "Start with education, progress to earning, and graduate as a tech professional with our cooperative approach.",
  points: [
    {
      title: "Learn from Industry Experts",
      description:
        "Get mentored by experienced professionals who bring real-world expertise to your learning journey.",
      icon: "🎓"
    },
    {
      title: "Cooperative Education Model",
      description:
        "Start with foundational learning, then transition to earning as you develop advanced skills in our tiered program.",
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
      title: "Industry-Recognized Skills",
      description:
        "Gain certifications and skills that are in high demand across the tech industry.",
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
    capacity: "45+ initial capacity",
    duration: "24 weeks",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    careers: ["Frontend Developer", "Full Stack Engineer"]
  },
  {
    slug: "ai-machine-learning",
    name: "AI & Machine Learning",
    summary:
      "Build intelligent systems with Python, TensorFlow, and OpenAI tools for in-demand AI roles.",
    capacity: "35+ initial capacity",
    duration: "28 weeks",
    skills: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
    careers: ["Machine Learning Engineer", "AI Research Assistant"]
  },
  {
    slug: "robotics-engineering",
    name: "Robotics Engineering",
    summary:
      "Create autonomous systems through hardware integration, computer vision, and real-world engineering workflows.",
    capacity: "30+ initial capacity",
    duration: "32 weeks",
    skills: ["ROS", "C++", "Computer Vision", "Arduino"],
    careers: ["Robotics Engineer", "Embedded Systems Developer"]
  }
];

export const tiers = [
  {
    id: "tier-1",
    title: "Foundation Builder",
    duration: "2-3 months",
    earning: "You Pay",
    skills: ["HTML/CSS", "JavaScript", "Git Basics", "UI/UX Fundamentals"]
  },
  {
    id: "tier-2",
    title: "Skill Accelerator",
    duration: "3-4 months",
    earning: "Start Earning",
    skills: ["React/Next.js", "Node.js", "Database Design", "API Development"]
  },
  {
    id: "tier-3",
    title: "Professional Developer",
    duration: "4-6 months",
    earning: "Earn More",
    skills: ["System Design", "Cloud Services", "DevOps", "Team Leadership"]
  }
];

export const careerOpportunitiesSection = {
  title: "Career Opportunities",
  body:
    "Our curriculum prepares you for roles across a wide range of tech sectors. Here are the industries where our graduates can build successful careers.",
  highlights: [
    { label: "Industry Sectors", value: "8+", icon: "🏢", tint: "primary" },
    { label: "Initial Student Capacity", value: "100+", icon: "🎒", tint: "secondary" },
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

export const industryFeedbackSection = {
  badge: "Industry Feedback",
  title: "What Industry Partners Say",
  body: "Hear from the tech industry professionals who have helped shape our program.",
  testimonials: [
    {
      quote:
        "The curriculum and hands-on approach designed by Innovation Bootcamp University aligns perfectly with what we look for in junior developers. We're excited to welcome their first cohort of students as interns.",
      name: "David Park",
      role: "Tech Lead at TechCorp Solutions",
      tag: "Industry Partner"
    },
    {
      quote:
        "The Innovation Bootcamp University model addresses the biggest challenge we face - finding entry-level talent with practical experience. We're proud to be an early partner in this initiative.",
      name: "Lisa Rodriguez",
      role: "HR Director at InnovateTech",
      tag: "Hiring Partner"
    },
    {
      quote:
        "The program's focus on real-world projects and industry collaboration sets it apart from traditional learning paths. I've been impressed with their comprehensive curriculum design.",
      name: "Thomas Chen",
      role: "Education Consultant at Future Skills Institute",
      tag: "Education Advisor"
    }
  ]
};

export const opportunities = [
  "Internships",
  "Industry Partners",
  "Become an Advisor",
  "Career Support"
];

export const opportunityPages: OpportunityPage[] = [
  {
    slug: "internships",
    title: "Internships",
    summary: "Explore open internship positions across engineering, AI, robotics, and business teams.",
    ctaLabel: "Check Internships"
  },
  {
    slug: "industry-partners",
    title: "Industry Partners",
    summary: "Collaborate with us as a hiring and project partner to support real student outcomes.",
    ctaLabel: "View Partner Program"
  },
  {
    slug: "become-an-advisor",
    title: "Become an Advisor",
    summary: "Mentor learners, guide curriculum quality, and shape practical training pathways.",
    ctaLabel: "Explore Advisor Role"
  },
  {
    slug: "career-support",
    title: "Career Support",
    summary: "Get interview preparation, portfolio guidance, and placement support throughout your journey.",
    ctaLabel: "See Career Support"
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
    summary: "Help drive outreach, lead tracking, and partnership follow-ups."
  },
  {
    slug: "business-development-sales-ai-robotics-intern",
    title: "Business Development and Sales Intern (AI and Robotics)",
    status: "Open",
    summary: "Support AI and robotics partnership pipelines and market analysis."
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
    company: "TechCorp",
    location: "San Francisco, CA",
    duration: "3 months",
    schedule: "Full-time",
    status: "Open",
    summary: "Build modern web features using React, Next.js, and Node.js."
  },
  {
    slug: "machine-learning-intern",
    title: "Machine Learning Intern",
    company: "AI Solutions",
    location: "Remote",
    duration: "6 months",
    schedule: "Full-time",
    status: "Open",
    summary: "Develop and evaluate ML models for real-world AI use cases."
  },
  {
    slug: "robotics-engineering-intern",
    title: "Robotics Engineering Intern",
    company: "RoboTech",
    location: "Boston, MA",
    duration: "4 months",
    schedule: "Full-time",
    status: "Open",
    summary: "Design and test robotics components for next-generation systems."
  },
  {
    slug: "data-science-intern",
    title: "Data Science Intern",
    company: "DataViz Inc",
    location: "Remote",
    duration: "6 months",
    schedule: "Part-time",
    status: "Open",
    summary: "Analyze datasets and deliver dashboards for actionable insights."
  }
];

export const industryPartnersPage = {
  title: "Industry Partners",
  subtitle: "Collaborate with leading companies shaping the future of technology",
  primaryCta: { href: "/company#contact", label: "Become a Partner" },
  partners: [
    {
      name: "TechCorp",
      category: "Technology",
      summary: "Leading provider of enterprise software solutions.",
      support: ["Internships", "Graduate Roles", "Mentorship"]
    },
    {
      name: "AI Solutions",
      category: "Artificial Intelligence",
      summary: "Pioneering AI research and development company.",
      support: ["Research Programs", "Internships", "Workshops"]
    },
    {
      name: "RoboTech",
      category: "Robotics",
      summary: "Innovative robotics and automation solutions.",
      support: ["Lab Access", "Internships", "Project Collaboration"]
    },
    {
      name: "DataViz Inc",
      category: "Data Analytics",
      summary: "Data visualization and analytics platform.",
      support: ["Training Programs", "Internships", "Certifications"]
    }
  ] as IndustryPartner[],
  benefitsTitle: "Partner Benefits",
  benefits: [
    {
      title: "Access to Talent",
      description: "Connect with skilled graduates and interns from our programs."
    },
    {
      title: "Industry Projects",
      description: "Collaborate on real-world projects with our students."
    },
    {
      title: "Global Network",
      description: "Join our network of leading technology companies."
    }
  ],
  finalCta: {
    title: "Ready to Partner With Us?",
    description: "Join our network of industry partners and help shape the future of tech education.",
    href: "/company#contact",
    label: "Get in Touch"
  }
};

export const becomeAdvisorPage = {
  title: "Become an Advisor",
  subtitle: "Share your expertise and help shape the next generation of tech professionals",
  primaryCta: { href: "/company#contact", label: "Apply Now" },
  requirementsTitle: "Requirements",
  requirements: [
    {
      title: "3+ Years Experience",
      description: "Professional experience in tech industry"
    },
    {
      title: "Expertise",
      description: "Deep knowledge in one or more of our program areas"
    },
    {
      title: "Communication",
      description: "Strong mentoring and communication skills"
    }
  ],
  reasonsTitle: "Why Become an Advisor?",
  reasons: [
    {
      title: "Professional Growth",
      description: "Develop leadership and mentoring skills"
    },
    {
      title: "Network Expansion",
      description: "Connect with other industry experts"
    },
    {
      title: "Make an Impact",
      description: "Shape the next generation of tech talent"
    }
  ],
  testimonialsTitle: "Advisor Testimonials",
  testimonials: [
    {
      quote:
        "Being an advisor has been incredibly rewarding. It is amazing to see students grow and succeed in their careers.",
      name: "Sarah Chen",
      role: "Senior Software Engineer at TechCorp"
    },
    {
      quote:
        "The program is well-structured and the students are highly motivated. It is a great way to give back to the community.",
      name: "Michael Rodriguez",
      role: "AI Research Lead at AI Solutions"
    }
  ],
  finalCta: {
    title: "Ready to Make an Impact?",
    description: "Join our network of industry experts and help shape the future of tech education.",
    href: "/company#contact",
    label: "Apply as Advisor"
  }
};

export const careerSupportPage = {
  title: "Career Support",
  subtitle:
    "We are committed to your success beyond graduation. Our comprehensive career support services are designed to help you launch and grow your tech career.",
  metrics: [
    {
      value: "95%",
      label: "Employment Rate",
      note: "Of our graduates secure technical roles within 6 months"
    },
    {
      value: "45+",
      label: "Hiring Partners",
      note: "Active companies hiring from our talent pool"
    },
    {
      value: "$85K",
      label: "Average Starting Salary",
      note: "For our graduates in their first technical role"
    },
    {
      value: "92%",
      label: "Career Satisfaction",
      note: "Of graduates report high job satisfaction"
    }
  ],
  servicesTitle: "Our Career Services",
  services: [
    {
      title: "Career Coaching",
      description: "One-on-one guidance from experienced tech industry professionals to help you navigate your career path."
    },
    {
      title: "Job Search Strategy",
      description: "Personalized job search planning, interview preparation, and salary negotiation support."
    },
    {
      title: "Industry Network",
      description: "Access to our network of hiring partners and alumni working at leading tech companies."
    },
    {
      title: "Career Tracking",
      description: "Ongoing job placement support and progress tracking to ensure you reach your career goals."
    }
  ],
  resourcesTitle: "Career Resources",
  resources: [
    {
      title: "Resume Building",
      items: [
        "Professional resume review and optimization",
        "Portfolio development guidance",
        "LinkedIn profile enhancement",
        "Personal branding workshops"
      ]
    },
    {
      title: "Interview Preparation",
      items: [
        "Technical interview practice",
        "Behavioral interview coaching",
        "Mock interviews with industry professionals",
        "Interview feedback and improvement plans"
      ]
    },
    {
      title: "Job Search Support",
      items: [
        "Access to exclusive job boards",
        "Referrals to partner companies",
        "Application strategy sessions",
        "Salary negotiation coaching"
      ]
    },
    {
      title: "Long-term Success",
      items: [
        "Career development planning",
        "Professional skill workshops",
        "Industry mentorship matching",
        "Networking event access"
      ]
    }
  ],
  partnerCta: {
    title: "Hiring Partners",
    description:
      "We partner with leading tech companies to provide our graduates with exclusive job opportunities and direct access to hiring managers.",
    href: "/company#contact",
    label: "Become a Hiring Partner"
  },
  storiesCta: {
    title: "Alumni Success Stories",
    description:
      "Read about how our graduates have successfully transitioned into rewarding tech careers and the impact of our career support services.",
    href: "/resources/blog",
    label: "Read Success Stories"
  }
};

export const resources = [
  {
    slug: "how-it-works",
    title: "How It Works",
    summary: "Understand the 3-tier pathway from foundational learning to paid project work."
  },
  {
    slug: "student-handbook",
    title: "Student Handbook",
    summary: "Review policies, expectations, schedules, and student success guidelines."
  },
  {
    slug: "blog",
    title: "Blog",
    summary: "Read updates, success stories, and practical insights from the university team."
  },
  {
    slug: "faqs",
    title: "FAQs",
    summary: "Get quick answers about admissions, learning structure, and participation."
  }
];

export const faq = [
  {
    question: "How does the cooperative education model work?",
    answer:
      "Tier 1 focuses on foundation skills. Tier 2 transitions into paid project participation. Tier 3 advances into leadership-level project delivery and higher earnings."
  },
  {
    question: "What are the program prerequisites?",
    answer:
      "No prior tech experience is required. Motivation, consistency, and willingness to collaborate are the main prerequisites."
  },
  {
    question: "Can I participate while working full-time?",
    answer:
      "Yes. Scheduling support and milestone planning are designed for career changers, though time commitment increases by tier."
  }
];

export const howItWorksPage = {
  title: "How It Works",
  subtitle: "Our cooperative education model transitions you from student to paid professional.",
  cta: { href: "/programs", label: "Explore Programs" },
  stages: [
    {
      title: "Foundation Learning",
      description: "Begin with structured learning to build essential technical skills."
    },
    {
      title: "Transition to Earning",
      description: "Apply your skills to real projects and start earning while you continue learning."
    },
    {
      title: "Professional Growth",
      description: "Take on leadership roles in projects and increase your earning potential."
    },
    {
      title: "Career Advancement",
      description: "Graduate with the skills, portfolio, and experience employers are looking for."
    }
  ],
  modelTitle: "Three-Tier Education Model",
  modelTiers: [
    {
      tier: "Tier 1",
      title: "Foundation Builder",
      subtitle: "Learning Phase",
      description:
        "In Tier 1, you pay for education to build a solid foundation in technical skills.",
      duration: "2-3 months",
      earning: "$500/month",
      outcomes: [
        "Structured curriculum in your chosen track",
        "Personalized mentorship and support",
        "Hands-on projects with real-world applications",
        "Community of like-minded learners"
      ]
    },
    {
      tier: "Tier 2",
      title: "Skill Accelerator",
      subtitle: "Start Earning",
      description:
        "In Tier 2, you start earning while you continue to learn more advanced skills.",
      duration: "3-4 months",
      earning: "Start earning income",
      outcomes: [
        "Work on client projects with supervision",
        "Receive compensation for your contributions",
        "Learn advanced topics in your specialty",
        "Build a professional portfolio of work"
      ]
    },
    {
      tier: "Tier 3",
      title: "Professional Developer",
      subtitle: "Earn More",
      description:
        "In Tier 3, you take on leadership roles and increase your earning potential.",
      duration: "4-6 months",
      earning: "Increased earnings",
      outcomes: [
        "Lead project teams and mentor others",
        "Increase your compensation",
        "Develop specialized expertise",
        "Prepare for career advancement or entrepreneurship"
      ]
    }
  ],
  comparisonTitle: "Why Choose Cooperative Education?",
  comparison: {
    traditional: [
      "High upfront costs ($15,000-$50,000+)",
      "Long period before earning income",
      "Often unclear return on investment",
      "Gap between education and employment"
    ],
    cooperative: [
      "Lower initial investment ($500/month)",
      "Start earning in 2-3 months",
      "Work on real client projects from Tier 2",
      "Seamless transition from learning to earning"
    ]
  },
  finalCta: {
    title: "Ready to Get Started?",
    description:
      "Apply today and begin your journey from student to paid professional with our innovative cooperative education model.",
    href: "/company#contact",
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
    href: "/company#contact",
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
    "Find answers to common questions about our programs, application process, and student support services.",
  supportText: "Still have questions? We're here to help.",
  supportLink: { href: "/company#contact", label: "Contact our support team" }
};

export const faqAccordionItems = [
  {
    question: "What makes Innovation Bootcamp University different?",
    answer:
      "Our program combines hands-on learning, industry mentorship, and real-world projects to provide a comprehensive learning experience. We focus on both technical skills and professional development."
  },
  {
    question: "Do I need prior programming experience?",
    answer:
      "No prior programming experience is required for our beginner tracks. We have programs designed for all skill levels, from complete beginners to advanced developers looking to specialize."
  },
  {
    question: "How long are the programs?",
    answer:
      "Program lengths vary depending on the track and intensity level you choose. Our part-time programs typically run for 12-24 weeks, while full-time intensive programs can be completed in 8-16 weeks."
  },
  {
    question: "What kind of support do students receive?",
    answer:
      "Students receive comprehensive support including 1-on-1 mentoring, career coaching, technical assistance, and access to our community of learners and industry professionals."
  },
  {
    question: "Are there job placement services?",
    answer:
      "Yes, we offer career services including resume reviews, interview preparation, networking events, and job placement assistance. We have partnerships with leading tech companies for internship and job opportunities."
  },
  {
    question: "What is the application process like?",
    answer:
      "The application process includes an online application, a brief interview to understand your goals, and for some advanced programs, a technical assessment. We want to ensure the program is the right fit for your needs."
  },
  {
    question: "Is financial aid available?",
    answer:
      "Yes, we offer various financing options including scholarships, income share agreements, and flexible payment plans. We believe everyone should have access to quality tech education."
  },
  {
    question: "What technologies will I learn?",
    answer:
      "Our curriculum covers in-demand technologies including JavaScript, Python, React, Node.js, and more. The specific technologies vary by program and are regularly updated based on industry trends."
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
  { href: "/company/press", label: "Press" },
  { href: "/company/careers-at-ib", label: "Careers at IB" }
];

export const stayUpdatedBlock = {
  title: "Stay Updated",
  body:
    "Get the latest updates about our programs, student success stories, and upcoming events delivered to your inbox.",
  placeholder: "Enter your email",
  buttonLabel: "Subscribe"
};
