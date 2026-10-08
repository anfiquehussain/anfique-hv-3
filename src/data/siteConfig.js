export const siteConfig = {
  name: "Anfique Hussain V",
  title: "Full-Stack Developer & Software Engineer",
  tagline: "Building scalable web architectures, fluid experiences, and high-performance products.",
  location: "India",
  status: "Available for new projects & full-time roles",
  education: "Diploma in Computer Engineering, Government Polytechnic College Mananthavady",
  aboutIntro: "Dedicated Software Developer with versatile skills in both frontend and backend development. Specialized in Django and React.js with a proven track record of creating user-friendly applications.",
  aboutBody: "Outside of pure code, I enjoy UI/UX and graphic design, which I continuously incorporate into my projects. Passionate about continuously improving my skills, adopting high-performance architectural patterns, and contributing meaningfully to the tech industry.",
  resumeUrl: "/Resume/resume.pdf",
  skillCategories: [
    {
      category: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS", "jQuery"]
    },
    {
      category: "Backend",
      skills: ["Python", "Django", "REST APIs", "Node.js"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MySQL"]
    },
    {
      category: "Tools & Design",
      skills: ["Git", "GitHub", "UI/UX Design", "Docker"]
    }
  ],
  projects: [
    {
      id: "01",
      title: "ShowLi",
      subtitle: "Movie & TV Planner",
      category: "Full-Stack & Media Discovery",
      filterCategory: "Full-Stack",
      status: "Live Production",
      badgeColor: "emerald",
      isPrivate: true,
      description: "Comprehensive media planning and discovery platform with multi-criteria filtering synced with URL parameters, custom collections with multi-format export, random media picker, and real-time Firestore discussions.",
      highlights: [
        "Advanced multi-criteria filtering & URL state synchronization",
        "Custom collections with JSON, CSV & Plain-Text export",
        "Real-time Firestore discussions, nested replies & rating sync",
        "TMDb integration, random picker & personalized user profiles"
      ],
      tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Redux Toolkit", "RTK Query", "Firebase", "Firestore", "Framer Motion", "TMDb API"],
      githubUrl: null,
      liveUrl: "https://showli.netlify.app/",
      hasLiveDemo: true
    },
    {
      id: "02",
      title: "Freelance Marketplace Django",
      subtitle: "Service Exchange Platform",
      category: "Full-Stack & E-Commerce",
      filterCategory: "Full-Stack",
      status: "Open Source",
      badgeColor: "cyan",
      isPrivate: false,
      description: "Full-featured freelance marketplace enabling client-freelancer service transactions, gig management, tiered pricing, order pipelines, real-time messaging, and secure payment processing.",
      highlights: [
        "Freelancer service catalog & gig pricing tier management",
        "Order processing pipeline with live status tracking",
        "Real-time client-freelancer chat & messaging interface",
        "Razorpay payment gateway integration & admin dashboards"
      ],
      tech: ["Python", "Django", "JavaScript", "Bootstrap 5", "SQLite3", "Razorpay"],
      githubUrl: "https://github.com/anfiquehussain/Freelance-Marketplace-Django",
      liveUrl: null,
      hasLiveDemo: false
    },
    {
      id: "03",
      title: "Todio",
      subtitle: "Task & Workflow Manager",
      category: "Frontend & Productivity",
      filterCategory: "Frontend",
      status: "Live Production",
      badgeColor: "emerald",
      isPrivate: false,
      description: "Lightweight, highly responsive task and productivity management application engineered with modern React and TypeScript for frictionless workflow tracking and fluid user interactions.",
      highlights: [
        "Dynamic task organization with instant status updates",
        "Optimized client state management & responsive UI",
        "Type-safe component architecture with TypeScript",
        "Clean, distraction-free modern interface design"
      ],
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "HTML5"],
      githubUrl: "https://github.com/anfiquehussain/Todio",
      liveUrl: "https://todio.netlify.app/",
      hasLiveDemo: true
    },
    {
      id: "04",
      title: "React-Django JWT Cookie Auth",
      subtitle: "Authentication Architecture",
      category: "Full-Stack & Security",
      filterCategory: "Full-Stack",
      status: "Open Source",
      badgeColor: "cyan",
      isPrivate: false,
      description: "Robust full-stack authentication system using HttpOnly & Secure cookies for token storage, complete CSRF mitigation, automatic token refresh rotation, and token blacklisting on logout.",
      highlights: [
        "HttpOnly & Secure cookie token exchange (XSS resistant)",
        "Automated JWT access token refresh & token blacklisting",
        "CSRF protection, CORS configurations & Axios interceptors",
        "Protected React routing & user analytics endpoints"
      ],
      tech: ["React", "Django 5.x", "Django REST Framework", "SimpleJWT", "Vite", "Axios", "Tailwind CSS"],
      githubUrl: "https://github.com/anfiquehussain/react-django-jwt-cookie-auth",
      liveUrl: null,
      hasLiveDemo: false
    },
    {
      id: "05",
      title: "TimeSip",
      subtitle: "Desktop Reminder Application",
      category: "Desktop & Python",
      filterCategory: "Python & Desktop",
      status: "Desktop Release",
      badgeColor: "amber",
      isPrivate: false,
      description: "Minimalist desktop productivity reminder tool built with PyQt5. Supports custom intervals from seconds to years, full-screen notification prompts, snooze/restart controls, and system tray integration.",
      highlights: [
        "Configurable reminder intervals (seconds to years)",
        "Full-screen focus alerts with intuitive snooze controls",
        "System-tray background daemon integration",
        "Pre-compiled standalone binaries for Windows & macOS"
      ],
      tech: ["Python", "PyQt5", "PyInstaller", "pefile", "pywin32-ctypes"],
      githubUrl: "https://github.com/anfiquehussain/TimeSip",
      liveUrl: null,
      hasLiveDemo: false
    },
    {
      id: "06",
      title: "CineGuessr",
      subtitle: "Movie Guessing Game",
      category: "Interactive & Gaming",
      filterCategory: "Frontend",
      status: "In Development",
      badgeColor: "purple",
      isPrivate: true,
      description: "Interactive browser-based cinematic trivia game where players identify films through progressive image clues, cryptic synopses, and multi-tier contextual hints.",
      highlights: [
        "Progressive clue reveal system with scoring multiplier",
        "Visual image-based clues & cryptic description teasers",
        "Dynamic hint-unlock mechanics and interactive game loop",
        "Responsive, mobile-friendly gaming interface"
      ],
      tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Web APIs"],
      githubUrl: null,
      liveUrl: null,
      hasLiveDemo: false
    },
    {
      id: "07",
      title: "VerbiQ",
      subtitle: "Vocabulary Intelligence Tool",
      category: "Language & NLP Tools",
      filterCategory: "Full-Stack",
      status: "In Development",
      badgeColor: "purple",
      isPrivate: true,
      description: "Language comprehension and vocabulary enhancement application designed to explore lexical nuances, contextual word meanings, and dynamic verbal exercises.",
      highlights: [
        "Interactive vocabulary exploration & lexical search",
        "Contextual definition breakdowns and usage examples",
        "Modular architecture designed for rapid feature scaling",
        "Clean, distraction-free reading typography"
      ],
      tech: ["Python", "JavaScript", "REST APIs", "Modern UI"],
      githubUrl: null,
      liveUrl: null,
      hasLiveDemo: false
    },
    {
      id: "08",
      title: "NovaNest",
      subtitle: "Modern Housing & Real Estate",
      category: "Full-Stack & Web",
      filterCategory: "Full-Stack",
      status: "Open Source",
      badgeColor: "cyan",
      isPrivate: false,
      description: "Contemporary real estate discovery platform concept featuring streamlined property browsing, spatial criteria filtering, and modern architectural aesthetics.",
      highlights: [
        "Spatial property discovery & interactive listing cards",
        "Structured filter workflows for location, price & amenities",
        "Modern component-driven responsive layout",
        "Scalable data model for property catalog management"
      ],
      tech: ["React", "JavaScript", "Modern CSS", "REST APIs"],
      githubUrl: "https://github.com/anfiquehussain/NovaNest",
      liveUrl: null,
      hasLiveDemo: false
    },
    {
      id: "09",
      title: "AnonMate",
      subtitle: "Real-Time Anonymous Chat",
      category: "Real-Time & WebSockets",
      filterCategory: "Full-Stack",
      status: "Open Source",
      badgeColor: "cyan",
      isPrivate: false,
      description: "Privacy-first anonymous messaging application designed for ephemeral real-time communication, instant peer matching, and tracking-free conversation rooms.",
      highlights: [
        "Real-time ephemeral messaging without persistent user tracking",
        "Instant peer connection and room discovery",
        "Low-latency duplex communication architecture",
        "Minimalist privacy-focused UI styling"
      ],
      tech: ["JavaScript", "WebSockets", "Node.js / Python", "Real-Time Engine"],
      githubUrl: "https://github.com/anfiquehussain/AnonMate",
      liveUrl: null,
      hasLiveDemo: false
    },
    {
      id: "10",
      title: "e-store",
      subtitle: "E-Commerce Web Application",
      category: "Frontend & E-Commerce",
      filterCategory: "Frontend",
      status: "Open Source",
      badgeColor: "cyan",
      isPrivate: false,
      description: "Clean, component-driven e-commerce web storefront featuring responsive product catalog showcases, client-side cart state handling, and interactive shopping interactions.",
      highlights: [
        "Product catalog grid with dynamic category navigation",
        "Client-side cart management & checkout flow simulation",
        "Modular React component breakdown",
        "Responsive styling optimized across desktop and mobile"
      ],
      tech: ["React", "Create React App", "Component State", "CSS3"],
      githubUrl: "https://github.com/anfiquehussain/e-store",
      liveUrl: null,
      hasLiveDemo: false
    }
  ],
  socials: {
    github: "https://github.com/anfiquehussain",
    linkedin: "https://www.linkedin.com/in/anfiquehv",
    twitter: "https://twitter.com/anfiquehv",
    stackoverflow: "https://stackoverflow.com/users/16822116/anfique-hussain-v",
    leetcode: "https://leetcode.com/u/Anfiquehussainv/",
    instagram: "https://www.instagram.com/anfique_hv/",
    facebook: "https://m.facebook.com/people/Anfique-Hussain-V/100022489001636/",
    email: "anfiquehussain6@gmail.com",
    secondaryEmail: "adomax2003@gmail.com",
    phone: "+91 9995424875"
  },
  contactInfo: {
    address: {
      line1: "Veyattummal",
      line2: "Vattapparapoyil",
      po: "Narikkuni (PO), 673585",
      city: "Kozhikode, Kerala",
      country: "INDIA"
    },
    phones: ["+91 9995424875"],
    emails: ["anfiquehussain6@gmail.com", "adomax2003@gmail.com"]
  },
  portfolioReleases: {
    current: {
      version: "v3.0",
      releaseDate: "2026-03",
      status: "CURRENT PRODUCTION",
      badgeColor: "emerald",
      tagline: "Neo-Portfolio 2026: Modular CRT 3D Terminal & Full-Stack Showcase",
      githubUrl: "https://github.com/anfiquehussain/anfique-hv-3",
      liveUrl: "https://anfiquehv.netlify.app/",
      highlights: [
        "Rebuilt from scratch with React 19, Vite, and Tailwind CSS",
        "Interactive 3D Linux CRT Terminal Screen with draggable parallax & executable CLI",
        "Full-screen modular single-page layout without window scrollbars",
        "Comprehensive Project Drawer with multi-category filters & live stats"
      ]
    },
    v2: {
      title: "Version 2 Releases",
      category: "v2.x",
      period: "2024 - 2025",
      githubUrl: "https://github.com/anfiquehussain/anfique-hv",
      liveUrl: "https://anfiquehv2.netlify.app/",
      description: "Previous React production portfolio with dynamic page views and full project catalog.",
      items: [
        { version: "v2.6", date: "31-12-2025 : 12:01 AM", note: "Final v2 release & year-end maintenance" },
        { version: "v2.5", date: "30-12-2025 : 11:56 PM", note: "Performance and link optimizations" },
        { version: "v2.4", date: "14-06-2025 : 11:06 AM", note: "Projects showcase updates" },
        { version: "v2.3", date: "12-06-2025 : 03:14 PM", note: "UI polish and responsive layout tweaks" },
        { version: "v2.2", date: "12-06-2025 : 03:06 PM", note: "Bugfixes and state improvements" },
        { version: "v2.1", date: "12-10-2024 : 8:32 PM", note: "Component refactor" },
        { version: "v2.0", date: "12-10-2024 : 8:15 PM", note: "Major v2 launch" }
      ]
    },
    v1: {
      title: "Version 1 Releases",
      category: "v1.x",
      period: "Aug 2024",
      githubUrl: "https://github.com/anfiquehussain/anfique-hv/tree/ec243d3d62c1bcdcd115428646332bfc7468b237",
      liveUrl: "https://anfiquehv1.netlify.app/",
      description: "Initial React single page portfolio with component structure.",
      items: [
        { version: "v1.5", date: "29-08-2024 : 6:05 PM", note: "Contact and footer refinements" },
        { version: "v1.4", date: "13-08-2024 : 8:57 PM", note: "Projects catalog integration" },
        { version: "v1.3", date: "13-08-2024 : 8:37 PM", note: "Theme and styling improvements" },
        { version: "v1.2", date: "10-08-2024 : 12:49 PM", note: "Navigation overhaul" },
        { version: "v1.1", date: "10-08-2024 : 12:41 PM", note: "Initial responsive fixes" },
        { version: "v1.0", date: "08-08-2024 : 08:03 PM", note: "First official v1 launch" }
      ]
    },
    beta: {
      title: "Beta Preview Releases",
      category: "Beta",
      period: "Jul - Aug 2024",
      githubUrl: "https://github.com/anfiquehussain/beta.anfique-hv",
      description: "Experimental prototypes and testing branches before v1 public release.",
      items: [
        { version: "βv1.5", date: "Aug 3, 2024", note: "Pre-launch beta test build 2" },
        { version: "βv1.0", date: "Jul 30, 2024", note: "Initial prototype deployment" }
      ]
    },
    archives: {
      title: "Legacy Archive Releases",
      category: "v8 - v12",
      period: "2022 - 2024",
      githubUrl: "https://github.com/anfiquehussain/anfique-hv1",
      liveUrl: "https://anfiquehv1.netlify.app/",
      description: "Historic early website iterations and unrecorded builds preserved for archival history.",
      items: [
        { version: "v12", date: "10-08-2024 : 12:30 PM", note: "Archive transition release" },
        { version: "v11", date: "03-08-2024 : 06:10 PM", note: "Early portfolio rebuild" },
        { version: "v10", date: "01-07-2024 : 04:40 PM", note: "Mid-year portfolio overhaul" },
        { version: "v9", date: "06-05-2023 : 04:41 PM", note: "Classic 2023 version" },
        { version: "v8", date: "12-11-2022 : 11:30 AM", note: "Earliest recorded 2022 release" },
        { version: "v1-v7", date: "2021 - 2022", note: "Unrecorded historical builds" }
      ]
    }
  }
};

