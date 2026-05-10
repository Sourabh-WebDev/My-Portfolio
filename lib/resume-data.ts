export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface Internship {
  title: string;
  type: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  nda?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  category: 'certification' | 'achievement' | 'award';
}

export interface Skill {
  category: string;
  items: string[];
}

export const resumeData = {
  name: "Sourabh Verma",
  title: "Front-End Developer",
  subtitle: "Building responsive, user-focused web applications with React",
  email: "vermaanurag222@gmail.com",
  phone: "+91 8090300447",
  location: "South City, Lucknow",
  social: {
    linkedin: "https://www.linkedin.com/in/sourabh-vermaweb-dev/",
    github: "https://github.com/Sourabh-WebDev",
    twitter: "https://twitter.com/sourabh",
    portfolio: "https://sourabh-webdev-portfolio.vercel.app/",
  },

  about: {
    title: "About Me",
    description:
      "Frontend Developer with four years of experience building responsive, user-focused web applications and seeking a dynamic role where I can contribute to innovative projects, leveraging strong skills in React.js and modern frontend technologies to deliver exceptional user experiences and support team success.",
    highlights: [
      "4+ years of frontend development experience",
      "Expert in React.js, Next.js, and TypeScript",
      "Strong focus on responsive design and user experience",
      "Proficient in Tailwind CSS, Material UI, Ant Design, and Bootstrap",
    ],
  },

  skills: [
    {
      category: "Frontend Frameworks & Libraries",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Vite.js",
        "Redux",
      ],
    },
    {
      category: "Styling & UI",
      items: ["Tailwind CSS", "Material UI", "Ant Design", "Kendo React", "Bootstrap"],
    },
    {
      category: "APIs & State Management",
      items: ["RESTful APIs", "Axios", "Fetch", "React Query", "Context API"],
    },
    {
      category: "Backend & Tools",
      items: ["Node.js", "Git", "Figma / Adobe XD", "Responsive Design"],
    },
  ] as Skill[],

  experience: [
    {
      title: "Front-End Developer",
      company: "Apexpath OPC Pvt. Ltd.",
      period: "05/2024 - Present",
      description: [
        "Developed and enhanced user-facing features using React.js, Next.js, and TypeScript, ensuring high-quality UI and seamless user experiences.",
        "Built modular, reusable, and maintainable components using Tailwind CSS, Material UI, Ant Design, Kendo React, and Bootstrap.",
        "Implemented optimized frontend architectures using Vite.js and Next.js (SSR, SSG, dynamic routing), improving page load times and SEO performance.",
        "Collaborated with UX/UI teams to translate Figma/Adobe XD designs into pixel-perfect, responsive interfaces aligned with design guidelines.",
      ],
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"],
    },
    {
      title: "React Js Developer",
      company: "Trickle Solutions LLP",
      period: "06/2023 - 03/2024",
      description: [
        "Developed React applications using Redux state management and RESTful APIs.",
        "Created custom components, forms, and interfaces for user interactions in React.",
        "Optimized performance of existing React applications by utilizing code splitting and lazy loading.",
        "Worked closely with product owners on requirements gathering and implementation strategies for new features.",
      ],
      skills: ["React.js", "Redux", "RESTful APIs", "Git"],
    },
    {
      title: "React Js Developer",
      company: "G Net Technologies Pvt Ltd",
      period: "04/2022 - 05/2023",
      description: [
        "Made and built reusable components for future use purposes.",
        "Developed React applications using Redux state management and RESTful APIs.",
        "Managed source control systems using Git for collaborative development.",
        "Created custom components, forms, and interfaces for user interactions in React.",
      ],
      skills: ["React.js", "Redux", "JavaScript", "Git"],
    },
    {
      title: "Website Designer",
      company: "OUTREACH FIRST",
      period: "06/2020 - 06/2021",
      description: [
        "Designed and developed corporate website using HTML, CSS, JavaScript.",
        "Maintained existing websites by troubleshooting coding errors and updating content.",
        "Translated concepts into user flows, wireframes, mockups and prototypes to promote positive intuitive designs.",
        "Maintained version control system for tracking changes in source code.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Web Design"],
    },
    {
      title: "Website Designer",
      company: "KARVYDIGIKONNECT",
      period: "01/2020 - 06/2020",
      description: [
        "Developed web page templates based on user interface designs.",
        "Designed and developed corporate website using HTML, CSS, JavaScript and jQuery.",
        "Maintained version control systems and implemented responsive design patterns.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
  ] as Experience[],

  internships: [
    {
      title: "React Js Developer",
      type: "Internship",
      company: "Predulive Edutech Foundation",
      location: "Remote",
      period: "Oct 2021 - Dec 2021",
      description: [
        "Created custom components, forms, and interfaces for user interactions in React.",
        "Developed React applications using Redux state management and RESTful APIs.",
        "Built reusable UI components that can be used across multiple projects with React.",
      ],
    },
    {
      title: "Backend Engineer",
      type: "Internship",
      company: "WASHCO",
      location: "Remote",
      period: "Jun 2018 - Sep 2018",
      description: [
        "Verified customer identity and collected appropriate documentation to comply with Know Your Customer regulations.",
        "Assisted customers with account inquiries, including checking balances and resolving discrepancies.",
      ],
    },
  ] as Internship[],

  projects: [
    {
      title: "Appraiser Tool",
      description:
        "A GIS-based property appraisal platform for managing and editing building and land records — similar to Bhu Lekh. Enables field officers to add, edit, and update cadastral data with map-integrated workflows.",
      technologies: ["React.js", "GIS / Leaflet", "RESTful APIs", "Redux"],
      nda: true,
    },
    {
      title: "SidhaHisab",
      description:
        "The all-in-one GST billing, inventory, and accounting software built for Bharat. Move from manual registers to a smart system in minutes — covering invoicing, stock management, and real-time financial reporting.",
      technologies: ["React.js", "Node.js", "GST APIs", "Tailwind CSS"],
      link: "https://www.sidhahisab.com/",
    },
    {
      title: "CivicVerify",
      description:
        "A secure civic identity verification system that enables authorities to verify citizenship, add new members, update member records, and manage Head-of-Family (HoF) details within a structured digital registry.",
      technologies: ["React.js", "TypeScript", "RESTful APIs", "Redux"],
      nda: true,
    },
    {
      title: "Job Portal",
      description:
        "A full-featured job portal connecting employers and job seekers. Supports job listings, candidate applications, resume uploads, recruiter dashboards, and real-time application status tracking.",
      technologies: ["React.js", "Node.js", "MongoDB", "RESTful APIs"],
      nda: true,
    },
    {
      title: "HR Portal",
      description:
        "An internal HR management platform covering employee onboarding, leave management, department structure, performance reviews, and document handling — designed to streamline HR operations.",
      technologies: ["React.js", "Redux", "Node.js", "Tailwind CSS"],
      nda: true,
    },
    {
      title: "Pay Roll",
      description:
        "An automated payroll processing system handling salary computation, tax deductions, payslip generation, and compliance reporting. Supports multi-department payroll with approval workflows.",
      technologies: ["React.js", "TypeScript", "RESTful APIs", "Ant Design"],
      nda: true,
    },
    {
      title: "Employee Portal",
      description:
        "A self-service employee portal where staff can view payslips, apply for leave, update personal details, access company announcements, and track attendance — reducing HR workload significantly.",
      technologies: ["React.js", "Redux", "Material UI", "RESTful APIs"],
      nda: true,
    },
    {
      title: "Coaching & Library Management",
      description:
        "A comprehensive management system for coaching institutes and libraries — handling student enrollment, batch scheduling, fee collection, book inventory, and issuance tracking.",
      technologies: ["React.js", "Node.js", "MongoDB", "Bootstrap"],
      link: "http://smseducationlko.com/",
    },
    {
      title: "Hotelio — Hotel Management",
      description:
        "A modern hotel management platform for room booking, front-desk operations, housekeeping tracking, billing, and guest management — streamlining end-to-end hotel workflows.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "RESTful APIs"],
      link: "https://hoteliorooms.com/",
    },
    {
      title: "Trickle Solutions — Landing Page",
      description:
        "A professional company landing page for Trickle Solutions LLP showcasing services, team, portfolio, and contact information with smooth animations and responsive design.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      link: "https://trickle-solutions-website.vercel.app/",
    },
    {
      title: "Sociomee",
      description:
        "A comprehensive social media platform blending the best features of Facebook, Instagram, and LinkedIn — supporting posts, stories, connections, groups, professional networking, and real-time messaging in one unified experience.",
      technologies: ["React.js", "Redux", "Node.js", "Socket.io", "RESTful APIs"],
      nda: true,
    },
  ] as Project[],

  education: [
    {
      degree: "Master of Business Administration",
      field: "Information Technology & Software's",
      institution: "Integral University",
      year: "2020 - 2022",
    },
    {
      degree: "MERN Technology",
      field: "MERN Stack Development",
      institution: "Digipodium",
      year: "2022",
    },
    {
      degree: "Bachelor of Commerce",
      field: "Commerce with Project Management",
      institution: "University of Lucknow",
      year: "2015 - 2018",
    },
  ],

  certifications: [
    {
      title: "React – The Complete Guide (incl. Redux)",
      issuer: "Udemy / Academind",
      date: "2023",
      credentialId: "UC-react-complete",
      link: "https://www.udemy.com/",
      category: "certification",
    },
    {
      title: "Next.js & React – The Complete Guide",
      issuer: "Udemy / Academind",
      date: "2023",
      credentialId: "UC-nextjs-complete",
      link: "https://www.udemy.com/",
      category: "certification",
    },
    {
      title: "TypeScript – The Complete Developer's Guide",
      issuer: "Udemy / Stephen Grider",
      date: "2022",
      credentialId: "UC-typescript-guide",
      link: "https://www.udemy.com/",
      category: "certification",
    },
    {
      title: "MERN Stack Development",
      issuer: "Digipodium, Lucknow",
      date: "2022",
      category: "certification",
    },
    {
      title: "Master of Business Administration – IT",
      issuer: "Integral University, Lucknow",
      date: "2022",
      category: "achievement",
    },
    {
      title: "4+ Years of Professional Experience",
      issuer: "Industry Recognition",
      date: "2020 – Present",
      category: "achievement",
    },
    {
      title: "20+ Projects Delivered",
      issuer: "Client Milestones",
      date: "2020 – Present",
      category: "achievement",
    },
    {
      title: "Responsive Design Excellence",
      issuer: "Internal Team Recognition – Apexpath OPC",
      date: "2024",
      category: "award",
    },
  ] as Certification[],
};
