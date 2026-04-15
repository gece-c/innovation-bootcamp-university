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

export type Project = {
  slug: string;
  title: string;
  summary: string;
  currentWork?: string;
  focus?: string[];
  externalUrl?: string;
};

export const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
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
  },
  {
    slug: "student-handbook",
    title: "Student Handbook",
    summary:
      "Everything you need to navigate your journey at Innovation Bootcamp University, from your first day to becoming a professional."
  }
];

export const projectsPage = {
  title: "Our Projects",
  subtitle:
    "Explore the innovative AI, robotics, education, and media initiatives being built across the Hephaestus and FloLabs ecosystem."
};

export const projects: Project[] = [
  {
    slug: "moodchanger",
    title: "MoodChanger",
    summary:
      "An AI-powered platform designed to enhance emotional well-being. It leverages advanced AI models to analyze user inputs and generate practical advice to improve happiness and reduce stress.",
    currentWork:
      "Expanding MoodChanger's functionality by integrating interactive AI tools, refining algorithms for better personalization, and designing a user-friendly interface to make emotional health accessible to everyone.",
    focus: [
      "Design excellence and intuitive UX/UI",
      "AI connectivity across multiple innovations",
      "Startup-style innovation and creator enablement"
    ],
    externalUrl: "https://moodchanger.ai"
  },
  {
    slug: "caipo",
    title: "CAIPO",
    summary:
      "CAIPO is Chief Artificial Intelligence Productivity Officer. This is a wearable AI tech that can record audio and video for note taking. The AI can assist you with summarizing or finding sections of your notes.",
    currentWork:
      "Actively developing CAIPO to incorporate state-of-the-art features, including real-time data analytics, industry-specific AI models, and user-friendly interfaces tailored to streamline workflows and enhance decision-making.",
    focus: [
      "Design excellence and practical UX/UI",
      "AI-enabled productivity gains for teams and individuals",
      "Entrepreneurial execution in emerging AI products"
    ],
    externalUrl: "https://www.caipo.ai/"
  },
  {
    slug: "flo-studios",
    title: "FloStudios",
    summary:
      "Flo Studios will serve as a hub for creativity and innovation, bringing together UX/UI designers, multimedia creators, and marketing strategists to work on groundbreaking internal projects. We are currently upgrading and launching several new websites, including Flo Studios and our Robot Dealership site. If you're interested in website development, this could be a great opportunity to get involved. While AI is a core focus of FloLabs, we're excited to announce Flo Studios, a new creative agency within our company.",
    currentWork:
      "Our first production is a film project inspired by the mythological roots of Lemnos, Greece, blending ancient tales with the future of AI and robotics. The story highlights Hephaestus, the legendary blacksmith who built the first robot, Talos, and AI Pandora on the island of Lemnos, where we are launching one of our labs and future campus. This project, along with others, offers an incredible opportunity to contribute to something meaningful while honing your skills.",
    focus: [
      "Design excellence across digital products",
      "Multimedia innovation with AI-first tooling",
      "Startup experimentation in creative production"
    ],
    externalUrl: "https://www.flostudios.ai/"
  },
  {
    slug: "humanoid-robots",
    title: "Humanoid Robots",
    summary:
      "A major milestone in our mission to push the boundaries of intelligent systems and human-robot interaction and include that interns who join our program may have the opportunity to contribute directly to this groundbreaking initiative. We are also launching RoboCollective.ai. Our one stop shop for all our robots and our partners robots and accessories.",
    currentWork:
      "We are communicating with many robot manufacturers to showcase and sell their products. The future of robotics and a dealership come together and we're looking for ways for people to customize their very own robot.",
    externalUrl: "https://robocollective.ai"
  },
  {
    slug: "hephaestus-international",
    title: "Hephaestus International",
    summary: "Hephaestus Labs Institute of Experiential Learning Center of Excellence",
    externalUrl: "https://hephaestus.international/"
  },
  {
    slug: "tarrl",
    title: "TARRL",
    summary: "The official portal for FloLabs' Texas Advanced Robotics Research Lab.",
    currentWork: "Redesigning the site to reflect ongoing changes at FloLabs.",
    externalUrl: "https://www.tarrl.org/"
  },
  {
    slug: "flolabs-innovations-group",
    title: "FloLabs Innovations Group",
    summary:
      "A global platform showcasing FloLabs initiatives, partnerships, and innovation in AI and technology.",
    currentWork:
      "Redesigning the platform to better highlight mission, active projects, and collaboration opportunities.",
    externalUrl: "https://www.flolabsinnovations.com/"
  },
  {
    slug: "flolabs-international",
    title: "FloLabs International",
    summary:
      "A global platform showcasing FloLabs' diverse initiatives, partnerships, and cutting-edge innovations in AI and technology.",
    currentWork:
      "Redesigning the website to better highlight FloLabs' mission, ongoing projects, and opportunities for collaboration and internships.",
    externalUrl: "https://www.flolabs.international/"
  },
  {
    slug: "moodchanger-for-pets",
    title: "MoodChanger for Pets",
    summary:
      "Expanding MoodChanger for pet owners by using data from wearable devices, environmental factors, and AI analysis to provide actionable insights into pets' behaviors, moods, and overall health.",
    currentWork:
      "Developing a seamless platform that integrates with pet wearables, creating AI models for real-time analysis, and designing engaging tools for pet owners to monitor and enhance their pets' quality of life."
  },
  {
    slug: "flo-travel",
    title: "FloTravel",
    summary:
      "AI is taking over in the market for travel. Flo Travel is using AI to help clients plan their trips accordingly. Plan your flight, hotel, trip, activites, etc. all in one place.",
    externalUrl: "https://www.flomadtravel.com"
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
  subtitle: "A seamless path from learning to earning in the real world.",
  cta: { href: "/opportunities/internships", label: "Explore the Journey" },
  journeyTitle: "Three-Tier Learning Experience",
  journeySubtitle: "A smarter path from beginner to paid professional, built for real-world success.",
  journeySteps: [
    {
      title: "Foundation Learning",
      description:
        "Start strong with structured, hands-on learning that builds the core skills companies actually need."
    },
    {
      title: "Start Earning",
      description:
        "Put your skills to work on real projects, collaborate with teams, and begin earning while you continue to grow."
    },
    {
      title: "Professional Growth",
      description:
        "Level up by taking ownership of projects, leading teams, and expanding your expertise."
    },
    {
      title: "Career Launch",
      description:
        "Graduate with real experience, a powerful portfolio, and the confidence to land opportunities or create your own."
    }
  ],
  tiers: [
    {
      title: "Tier 1 | Foundation Builder",
      tagline: "Learn. Build. Prepare.",
      description:
        "Start with a strong foundation through structured learning, hands-on practice, and close mentorship.",
      duration: "500 hours + masterclasses",
      valueLabel: "Investment",
      valueText: "$500 up-front + $50/month",
      gains: [
        "Guided curriculum tailored to your chosen path",
        "Real-world, project-based learning",
        "Mentorship and continuous feedback",
        "Access to a driven, like-minded community"
      ]
    },
    {
      title: "Tier 2 | Skill Accelerator",
      tagline: "Apply. Collaborate. Earn.",
      description:
        "Move beyond learning-start working on real projects, collaborating with teams, and earning income as you grow.",
      duration: "3-4 months",
      valueLabel: "Earnings",
      valueText: "Start getting paid",
      gains: [
        "Hands-on experience with real client projects",
        "Advanced, in-demand technical skills",
        "Paid contributions and real work exposure",
        "A strong, job-ready portfolio"
      ]
    },
    {
      title: "Tier 3 | Professional",
      tagline: "Lead. Scale. Thrive.",
      description:
        "Step into leadership roles, increase your income, and position yourself for long-term career success.",
      duration: "4-6 months",
      valueLabel: "Earnings",
      valueText: "Increased income",
      gains: [
        "Leadership experience on real projects",
        "Mentorship opportunities with newer learners",
        "Specialized, high-value expertise",
        "Pathways to jobs, freelance work, or entrepreneurship"
      ]
    }
  ],
  comparisonTitle: "Why Choose This Model?",
  comparison: {
    traditionalTitle: "Traditional Education",
    cooperativeTitle: "Our Co-op Model",
    traditional: [
      "High upfront costs ($15K-$20K+)",
      "Delayed return on investment",
      "Limited real-world experience",
      "Disconnect between learning and jobs"
    ],
    cooperative: [
      "Low monthly investment ($50/month)",
      "Work on real projects with real impact",
      "Smooth transition from learning -> earning -> career"
    ]
  },
  finalCta: {
    title: "Ready to Get Started?",
    description:
      "Apply today and step into a modern co-op experience: build real skills, collaborate on real projects, and fast-track your journey from learner to paid professional.",
    href: "/opportunities/internships",
    label: "Apply Now"
  }
};

export const studentHandbookPage = {
  title: "Student Handbook",
  subtitle:
    "Everything you need to navigate your journey at Innovation Bootcamp University, from your first day to becoming a professional.",
  cta: { href: "/resources", label: "Explore Resources" },
  sections: [
    {
      title: "Academic Policies",
      items: [
        "Attendance requirements",
        "Academic integrity standards",
        "Project submission guidelines"
      ]
    },
    {
      title: "Student Conduct",
      items: ["Code of conduct", "Online etiquette", "Collaboration guidelines", "Academic honesty"]
    },
    {
      title: "Certification",
      items: [
        "Graduation requirements",
        "Assessment criteria",
        "Portfolio review process",
        "Certificate issuance"
      ]
    },
    {
      title: "Communication",
      items: ["Office hours", "Mentor meetings", "Discussion forums", "Feedback channels"]
    }
  ],
  helpBlock: {
    title: "Need Additional Help?",
    description:
      "If you cannot find what you are looking for, our support team is available to assist you with any questions throughout your journey.",
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
