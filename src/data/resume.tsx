import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import Image from "next/image";

export const DATA = {
  name: "Nikita Bansal",
  initials: "NB",
  url: "",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  description:
    "Aspiring Software Engineer passionate about building scalable web applications and AI-powered tools. Experienced with full-stack development, cloud infrastructure, and technical problem-solving.",
  summary:
    "B.Tech CSE (AI & DS) student with experience developing documentation AI platforms, microservice-based networking tools, and modern web applications. Strong record in competitive programming and technical leadership.",
  avatarUrl: "/me.png", // Replace with your actual avatar path if available
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Bun",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Prisma",
    "Cloudflare",
    "TailwindCSS",
    "Framer Motion",
    "Redux",
    "TanStack Query",
    "WebSockets",
    "C++",
    "DBMS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
  email: "bansalnikita06@gmail.com",
  tel: "9953942721",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/Nikita06211",
      icon: Icons.github,           // reference key from your Icons registry
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nikita-bansal-66bb33227/",
      icon: Icons.linkedin,
      navbar: true,
    },
    X: {
      name: "X",
      url: "https://x.com/Nikita_6211",
      icon: Icons.x,
      navbar: true,
    },
    Leetcode: {
      name: "Leetcode",
      url: "https://leetcode.com/u/Nikita_06211/",
      icon: "/leetcode.svg",    // use path to public asset
      navbar: false,
    },
    CodeChef: {
      name: "CodeChef",
      url: "https://www.codechef.com/users/worth_fort_72",
      icon: "/codechef.svg",    // use path to public asset
      navbar: false,
    },
    email: {
      name: "Send Email",
      url: "mailto:bansalnikita06@gmail.com",
      icon: Icons.email,
      navbar: false,
    },
  },
},

  work: [
    // None listed formally; use projects/achievements for now
  ],
  education: [
    {
      school: "Maharaja Agrasen Institute of Technology",
      href: "", // Add actual link if desired
      degree: "B.Tech, Computer Science and Engineering (AI & DS)",
      logoUrl: "/mait.png", // Replace with actual logo path if available
      start: "2022",
      end: "2026",
    },
    {
      school: "St. Mark’s Girls Sr. Sec. School",
      href: "",
      degree: "XII CBSE Board",
      logoUrl: "/school.png", // Replace with actual logo path if available
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
  {
    title: "DevTinder",
    href: "", 
    dates: "2024",
    active: true,
    description:
      "Built a full-stack developer networking platform with separate microservices for frontend and backend. Implemented features like authentication, profile management, and real-time connection management.",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "bcrypt",
    ],
    links: [
      {
        type: "Website",
        href: "https://dev-tinder-web-pink.vercel.app/login",
        icon: <Icons.globe/>, 
      },
      // {
      //   type: "GitHub",
      //   href: "https://github.com/Nikita06211/DevTinder",
      //   icon: <Icons.github/>
      // },
    ],
    image: "/devtinder.png",
    video: "",
  },
  {
    title: "Docs AI",
    href: "", 
    dates: "2024",
    active: true,
    description:
      "Documentation assistant platform that crawls documentation sites using sitemap URLs and indexes page content for AI-powered search and queries. Deployed globally with Cloudflare Workers, ensuring high reliability and performance.",
    technologies: [
      "Next.js",
      "Node.js",
      "Bun",
      "TypeScript",
      "Hono",
      "Cloudflare Workers/Pages",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "http://docsai-frontend-ssr.pages.dev/",
         icon: <Icons.globe/>, 
      },
      // {
      //   type: "GitHub",
      //   href: "https://github.com/Nikita06211/docsai-frontend",
      //   icon: <Icons.github/>, 
      // },
    ],
    image: "/docsai.png",
    video: "",
  },
  {
    title: "ADmyBRAND AI Suite",
    href: "", 
    dates: "2024",
    active: true,
    description:
      "Developed a responsive landing page with interactive pricing, testimonials, FAQs, and blog search. Integrated smooth navigation and gradient branding to create an engaging user experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Zod",
    ],
    links: [
      {
        type: "Website",
        href: "https://admybrand-ai-suite-qjjk.vercel.app/",
         icon:  <Icons.globe />, 
      },
      // {
      //   type: "GitHub",
      //   href: "https://github.com/Nikita06211/admybrand-ai-suite",
      //    icon: <Icons.github/>, 
      // },
    ],
    image: "/landingpage.png",
    video: "",
  },
],

hackathons: [
  {
    title: "Myntra HackerRamp 2024",
    dates: "2024",
    location: "India",
    description:
      "Secured a position in the top 1,200 out of 30,000 teams.",
    links: [], // empty array if no links
  },
  {
    title: "Coding Bidding by Codechef MAIT",
    dates: "",
    location: "Delhi, India",
    description:
      "Winner at the competitive programming contest organized by Codechef MAIT.",
    links: [],
  },
],

  achievements: [
    "Completed 500+ LeetCode questions, max rating of 1734 (Top 10%)",
    "Best CodeChef contest rating: 1608",
    "CSI-IW, MAIT — Executive in the DSA Team (Core Member)",
    "Shortlisted as a Mentee at Codess.Cafe",
  ],
};
