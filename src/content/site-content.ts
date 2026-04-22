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

// --- Resource routes (grep-friendly) ---
export const RESOURCE_SLUGS = {
  howItWorks: "how-it-works",
  communityPlaybook: "community-playbook"
} as const;

// --- Home hero ---
export const hero = {
  badge: "",
  title: "Earn While You Learn.",
  lead: "Graduate as a Working Professional.",
  body:
    "Innovation Bootcamp University connects structured education directly to real internships across AI, software, robotics, business, and more. You start as a student. You finish with a resume that proves it.",
  highlights: [
    { title: "Global Access", description: "Join from anywhere in the world, fully remote." },
    { title: "Open Entry", description: "No prior experience required. Just ambition and curiosity." }
  ],
  actions: [
    { href: "/opportunities/internships", label: "Pre-Register" },
    { href: "/opportunities/internships", label: "Explore Internships" }
  ],
  stats: [
    { label: "", value: "Global community of learners" },
    { label: "", value: "Remote first" },
    { label: "", value: "Multi-disciplinary work environment" }
  ]
};

export const whyChoose = {
  badge: "What Makes Us Different",
  title: "Why Choose Bootcamp University",
  body:
    "Most programs teach you skills and send you into the job market alone. We place you inside real work from day one, so your education and your career start at the same time.",
  points: [
    {
      title: "Learn with Real Internship",
      description:
        "Work alongside fellow students and seasoned professionals to tackle live assignments. Build your expertise through side-by-side collaboration on projects that actually matter.",
      icon: "💼"
    },
    {
      title: "Cooperative Education Model",
      description:
        "Follow a structured journey from learning to earning. Master professional standards and internal workflows to transition from an intern role to a paid contributor.",
      icon: "🤝"
    },
    {
      title: "Hands-on Projects",
      description:
        "Focus on execution over theory. Build a portfolio of real-world deliverables that provide tangible proof of your capabilities to global employers.",
      icon: "🛠️"
    },
    {
      title: "Global Community",
      description:
        "Join an international network of ambitious peers. Build your professional circle from day one by collaborating with a diverse community from all over the world.",
      icon: "👥"
    },
    {
      title: "Industry-Recognized Skills",
      description:
        "Gain the technical expertise and credentials currently in high demand. Master the tools and workflows that top companies actually use to get results.",
      icon: "🏅"
    },
    {
      title: "Interdisciplinary Collaboration",
      description:
        "Work where different fields meet. Learn to synchronize your skills with students and experts from design, tech, and business teams to solve complex problems together.",
      icon: "🧩"
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
    "Our interdisciplinary curriculum is designed to prepare you for the most in-demand roles across the global tech landscape. Discover the industries where you can build a high-impact professional future.",
  pathsTitle: "39 Internship Paths to Choose From",
  pathsIntro: "We recognize that every professional journey is unique. That is the core of our approach.",
  pathsBody:
    "Whether your passion lies in AI, business strategy, scientific research, or creative design, you can start contributing to your field from day one.",
  tracks: [
    {
      title: "Technology & AI (Build the Future)",
      icon: "💻",
      intro: "Work on cutting-edge systems shaping tomorrow:",
      roles: [
        "AI/AGI Intern",
        "Machine Learning Engineering Intern",
        "Computer Vision Engineering Intern",
        "Prompt Engineer Intern",
        "Software Development Intern",
        "Front-end Developer Intern"
      ],
      fit: "Perfect for builders, coders, and problem-solvers"
    },
    {
      title: "Robotics & Engineering (Hands-On Innovation)",
      icon: "🦾",
      intro: "Design, build, and integrate real-world systems:",
      roles: [
        "Robotics Engineering Intern",
        "Mechatronics Engineering Intern",
        "Embedded Systems Intern",
        "Sensor Integration Intern",
        "Control Systems Engineering Intern",
        "Human-Robot Interaction Intern"
      ],
      fit: "For those who want to create physical + intelligent systems"
    },
    {
      title: "Science, Research & Advanced Fields",
      icon: "🔬",
      intro: "Explore deep tech and scientific innovation:",
      roles: [
        "Biomedical Engineering Intern",
        "Neuroscience Intern",
        "Quantum Engineer Intern",
        "Space Science Intern",
        "Research Associate Intern (Open-Source Projects)",
        "Animal Science and Veterinary Research Intern"
      ],
      fit: "Ideal for analytical thinkers and future researchers"
    },
    {
      title: "Business, Marketing & Growth",
      icon: "💼",
      intro: "Work directly on company growth and strategy:",
      roles: [
        "Business Development and Sales Intern",
        "Business Development (AI & Robotics) Intern",
        "Marketing Intern",
        "Digital Marketing Intern",
        "SEO Specialist Intern",
        "Social Media Intern",
        "GTM Engineer Intern",
        "GTM Influencer Intern"
      ],
      fit: "For communicators, strategists, and growth-driven minds"
    },
    {
      title: "Operations, Product & Management",
      icon: "📋",
      intro: "Help build and run real companies:",
      roles: [
        "Operations Intern",
        "Project Management Intern",
        "Product Development Intern (AI & Robotics)",
        "Quality Assurance Intern",
        "Finance Intern"
      ],
      fit: "For leaders, organizers, and decision-makers"
    },
    {
      title: "Creative, Media & Communication",
      icon: "🎨",
      intro: "Create content that reaches the world:",
      roles: [
        "Content Marketing Intern",
        "Journalism & PR Intern",
        "Podcast Production Intern",
        "Technical Writing Intern",
        "UI/UX Design Intern"
      ],
      fit: "For storytellers, designers, and creatives"
    },
    {
      title: "Emerging & Interdisciplinary Fields",
      icon: "🔀",
      intro: "Where tech meets new industries:",
      roles: [
        "EdTech and Innovation Intern",
        "Ethical and Legal Research Intern",
        "Hospitality and Tourism Intern",
        "Sport Science Intern"
      ],
      fit: "For explorers who want something different"
    }
  ],
  highlights: [
    { label: "Industry Sectors", value: "8+", icon: "🏢", tint: "primary" },
    { label: "Program Completion", value: "500 Hours", icon: "⏱️", tint: "secondary" },
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
      icon: "📊",
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
    slug: RESOURCE_SLUGS.howItWorks,
    title: "How It Works",
    summary: "See the real current flow from enrollment through internship-based learning."
  },
  {
    slug: RESOURCE_SLUGS.communityPlaybook,
    title: "Community Playbook",
    summary:
      "This guide outlines the professional standards, operational workflows, and ethical code required to contribute effectively within our internal project teams."
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

// --- How it works ---
export const howItWorksPage = {
  title: "How It Works",
  subtitle: "A practical roadmap from collaborative learning to professional earning.",
  cta: { href: "/opportunities/internships", label: "Explore the Journey" },
  journeyTitle: "Three-Tier Learning Experience",
  journeySubtitle: "A smarter path from beginner to paid professional, built for real-world success.",
  journeySteps: [
    {
      title: "Active Contribution",
      description:
        "Start by contributing to active project tracks and masterclasses designed to build the specific skills our teams use every day."
    },
    {
      title: "Earn While You Grow",
      description:
        "Transition into active contributor roles on internal projects, collaborating with interdisciplinary teams and receiving a stipend for your work."
    },
    {
      title: "Leadership & Ownership",
      description:
        "Level up by managing project deliverables, leading peer teams, and mentoring incoming interns as they begin their journey."
    },
    {
      title: "Career Launch",
      description:
        "Exit the program with a verified professional track record, a global network, and the confidence to lead in any modern work environment."
    }
  ],
  tiers: [
    {
      title: "Tier 1 | Production Mastery",
      tagline: "Collaborate. Build. Prepare.",
      description:
        "Start your journey by embedding yourself in our development culture. Through a mix of guided tracks and hands-on practice, you'll master the tools and workflows needed to contribute to our upcoming project launches.",
      duration: "500 hours + masterclasses",
      valueLabel: "Investment",
      valueText: "$500 up-front + $50/month",
      gains: [
        "Direct experience with internal project cycles.",
        "Mastery of the tools used by our global team.",
        "Continuous feedback through collaborative learning.",
        "Access to a driven, like-minded community."
      ]
    },
    {
      title: "Tier 2 | Qualified Contributor",
      tagline: "Refine. Deliver. Earn.",
      description:
        "Transition to a compensated role within our project teams. You continue to learn and grow by tackling more complex tasks, but you are now working at a level of proficiency that qualifies you for a regional stipend.",
      duration: "3–4 months (Subject to change)",
      valueLabel: "Earnings",
      valueText: "Region-based monthly stipend starts.",
      gains: [
        "Deepening expertise through higher-stakes project work.",
        "Advanced, in-demand technical and professional skills.",
        "Paid contributions adjusted to your local economy.",
        "A strong, project-backed portfolio that proves your capabilities."
      ]
    },
    {
      title: "Tier 3 | Lead Contributor",
      tagline: "Lead. Own. Earn More.",
      description:
        "Learning takes a new form as you step into leadership. You continue to sharpen your skills by managing project deliverables and guiding Tier 1 and 2 peers, all while unlocking higher earning potential through increased responsibility.",
      duration: "4–6 months (Subject to change)",
      valueLabel: "Earnings",
      valueText: "Increased regional earning potential.",
      gains: [
        "Leadership and management experience on active projects.",
        "Mentorship opportunities to help guide newer learners.",
        "Specialized expertise in project strategy and team operations.",
        "Direct pathways to professional roles, freelance mastery, or entrepreneurship."
      ]
    }
  ],
  comparisonTitle: "Why Choose This Model?",
  comparison: {
    traditionalTitle: "Traditional Education",
    cooperativeTitle: "Our Collaborative Model",
    traditional: [
      "High upfront costs ($15K to $20K+)",
      "Delayed return on investment",
      "Theoretical knowledge only",
      "Disconnect between learning and jobs"
    ],
    cooperative: [
      "Low monthly investment ($50/month)",
      "Performance-based path to earning",
      "Practical experience on live internal projects",
      "Direct transition from learner to contributor"
    ]
  },
  finalCta: {
    title: "Ready to Start Building?",
    description:
      "Apply today and step into a modern collaborative experience. Build real skills, tackle real projects, and turn your ambition into a professional career.",
    href: "/opportunities/internships",
    label: "Apply Now"
  }
};

// --- Community playbook ---
export const communityPlaybookPage = {
  title: "Community Playbook",
  subtitle: "Navigating Our Collaborative Environment",
  intro:
    "This guide outlines the professional standards, operational workflows, and ethical code required to contribute effectively within our internal project teams.",
  cta: { href: "/resources", label: "Explore Resources" },
  sections: [
    {
      title: "Daily Workflow",
      items: [
        'The Project Timer: Guidelines for logging your 500-hour journey. We value transparency; the timer ensures your effort is documented and your milestones are tracked.',
        "Asynchronous Coordination: How we stay in sync across time zones. We prioritize clear, written updates in project channels so the work never stops, even when you do.",
        'Defining "Done": Standards for completing a task. A contribution is considered finished only when it meets the team\'s quality requirements and is documented for the next person.'
      ]
    },
    {
      title: "Professional Ethics & IP",
      items: [
        "Confidentiality (NDA): While we share a collaborative spirit, internal project data and upcoming product launches are strictly confidential until they are made public.",
        "Originality & Attribution: We are a community of builders. Give credit where it's due, respect the work of your peers, and ensure all contributions are your own or properly sourced.",
        "Professional Conduct: We maintain a high standard of mutual respect. Harassment, discrimination, or disruptive behavior are not tolerated in any of our digital spaces."
      ]
    },
    {
      title: "Advancement & Earning",
      items: [
        "Tier 1 to Tier 2 Transition: Advancement is not automatic. It requires the completion of 500 logged hours plus a successful review of your project output to ensure you are ready for the paid contributor tier.",
        "Quality Benchmarks: To qualify for Tiers 2 and 3, your work must consistently meet professional standards. Technical proficiency and leadership ability are the keys to unlocking higher earning potential.",
        "Regional Stipend Eligibility: Guidelines on how your country of residence affects your Tier 2/3 earnings and the documentation required to set up your payments."
      ]
    },
    {
      title: "Learning & Masterclasses",
      items: [
        "Asynchronous Masterclasses: Access a curated library of videos, articles, and podcasts on your own schedule. These resources provide the technical and strategic context required for your specific project track.",
        "The Brainwriting Process: Every masterclass is followed by a brainwriting session. This is your opportunity to provide content-based feedback, suggest practical project implementations, and evaluate if the resource should remain a core part of the curriculum for future interns.",
        "Self-Guided Specialization: Use our internal knowledge base to sharpen your skills at your own pace. Your brainwriting contributions help the community identify which resources are most effective for real-world execution."
      ]
    },
    {
      title: "Community Hierarchy & Leadership",
      items: [
        "Peer-to-Peer Mentorship: We believe in a cycle of growth. Advanced contributors (Tier 3) serve as team leads, helping Tier 1 members navigate the workflow while continuing their own leadership journey.",
        "Professional Guidance: Seasoned industry experts oversee the high-level project strategy, providing technical feedback on your deliverables while letting the community drive the daily execution.",
        "Feedback Loops: From brainwriting insights to technical reviews, our communication is built on constructive loops that help every member of the team improve their output."
      ]
    },
    {
      title: "Verification & Portfolio",
      items: [
        "Experience Certification: Upon reaching specific milestones, we provide official verification of your hours and contributions.",
        "Portfolio Approval: Guidelines on how to showcase your work for Innovation Bootcamp University on your personal site or LinkedIn, ensuring you stay within the bounds of your NDA.",
        "Alumni Network: Access our global network of former contributors to help you land your next role or launch your own venture."
      ]
    }
  ]
};

// --- Home: Career section closing article only ---
export const homeWhyItMatters = {
  title: "Why It Matters",
  headline: "Stop studying the future. Start building it.",
  body: "We bridge the gap between theory and employment. By the time you graduate, you won't just have a certificate; you'll have a resume filled with real-world impact."
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
  title: "FAQs",
  subtitle:
    "Find answers to common questions about internship pathways, application process, financial options, and support.",
  supportText: "Still have questions? We're here to help.",
  supportLink: { href: "/company/contact", label: "Contact our support team" }
};

export const faqAccordionItems = [
  {
    question: "What makes Innovation Bootcamp University different?",
    answer:
      "We replace traditional classes with internship-based execution. You join a professional environment and start contributing to real internal projects from day one, rather than just studying theory."
  },
  {
    question: "Do I need prior experience or coding skills?",
    answer:
      'No prior experience is required. We look for ambition and a "learn by doing" mindset. We offer pathways in engineering, design, marketing, business, and more, where coding is only required if it\'s essential to the role.'
  },
  {
    question: "How does progression through the tiers work?",
    answer:
      "Advancement is based on milestones and performance. Once you fulfill the 500-hour Tier 1 requirement and meet our quality benchmarks, you qualify for Tier 2, where you begin earning a stipend."
  },
  {
    question: "How long are the programs?",
    answer:
      "The duration is flexible and depends on your pace:\nTier 1: 500 hours of project contribution + masterclasses.\nTiers 2 & 3: [Placeholder: 3–6 months each] (subject to change based on project needs)."
  },
  {
    question: "What kind of support will I receive?",
    answer:
      "You work in a collaborative environment with continuous feedback. You'll have access to seasoned professionals for technical reviews and peer team leads who support you through daily project challenges."
  },
  {
    question: "Is the program fully remote?",
    answer:
      "Yes. We are a remote-first community. You can collaborate with our global teams from anywhere in the world as long as you have a stable internet connection. We also have on-site locations in Austin/Texas and Lemnos/Greece."
  },
  {
    question: "How are the earnings/stipends calculated?",
    answer:
      "Earning in Tiers 2 and 3 follows a region-adjusted model. Monthly stipends are calculated according to the local economy of your country to ensure fair and accessible compensation."
  },
  {
    question: "What happens after I complete Tier 3?",
    answer:
      "You graduate with a verified professional track record. You can continue within our network, move into a freelance career, or use your portfolio of live project work to land a role at a top global company."
  },
  {
    question: "Is financial support available?",
    answer:
      "[Placeholder: To be confirmed]. We are currently clarifying options for scholarships and payment plans to keep the program accessible."
  },
  {
    question: "What does the application process look like?",
    answer:
      "The process is simple and focused on fit:\n- Online application\n- Short interview to understand your goals\n- Technical assessment (for advanced tracks)"
  }
];

// --- About page ---
export const aboutPage = {
  title: "About",
  missionLead:
    "Our mission is to replace traditional study with active contribution, giving every ambitious individual the opportunity to build a career through real-world execution.",
  missionBody:
    "Innovation Bootcamp University is where the professional world replaces the classroom. We provide an interdisciplinary environment where learning happens through execution. Our mission is to make high-level professional growth accessible through a model that prioritizes real-world contribution over traditional study.",
  coreValuesHeading: "Our Core Values",
  coreValues: [
    {
      title: "Collaborative Execution",
      body: "We believe the best way to learn is by doing. You don't just study workflows; you participate in them alongside a global community of peers and professionals."
    },
    {
      title: "Action-First Philosophy",
      body: "Our projects are not simulations. You contribute to live initiatives that require real-world problem-solving, ensuring your experience carries actual weight in the global market."
    },
    {
      title: "Global Network",
      body: "We are a remote-first community. You will build lasting connections with ambitious individuals from diverse backgrounds, creating a professional circle that spans every time zone."
    },
    {
      title: "Progressive Growth",
      body: "Our model is built on advancement. As your skills grow, so does your responsibility and earning potential, creating a clear path from contributor to lead."
    }
  ],
  areasHeading: "Areas of Impact",
  areas: [
    {
      title: "Technology & Engineering",
      body: "Build the future of the web and physical world. Contribute to projects in software engineering, AI delivery, and intelligent robotics."
    },
    {
      title: "Creative & Design",
      body: "Bridge the gap between users and technology. Tackle challenges in UX/UI, industrial design, and digital media production."
    },
    {
      title: "Business & Growth",
      body: "Drive the strategy behind our initiatives. Engage in market research, strategic operations, and project management for emerging fields."
    },
    {
      title: "Research & Advanced Sciences",
      body: "Push the boundaries of what is possible. Participate in interdisciplinary work involving neuroscience, QA testing, and data analysis."
    }
  ],
  finalCta: {
    title: "Ready to Build Your Future?",
    body: "Join an interdisciplinary community where your growth is driven by action. Pre-register today and take the first step toward a career defined by real-world impact.",
    href: "/opportunities/internships",
    label: "Pre-register Now"
  }
};

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
