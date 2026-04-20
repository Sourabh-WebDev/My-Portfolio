export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
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
    linkedin: "https://linkedin.com/in/sourabh-verma",
    github: "https://github.com/sourabh",
    twitter: "https://twitter.com/sourabh",
    portfolio: "https://portfolio-sourabh-webdev.vercel.app/",
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

  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management and payment integration",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates using WebSockets",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard with interactive charts and real-time data updates",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      link: "#",
    },
    {
      title: "AI Chat Application",
      description:
        "Intelligent chatbot with NLP capabilities and conversation history management",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Supabase"],
      link: "#",
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
};
