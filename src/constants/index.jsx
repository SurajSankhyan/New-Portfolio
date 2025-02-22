import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiJavascript, SiLeetcode, SiMongodb } from "react-icons/si";
import { DiHtml5, DiJavascript, DiMongodb, DiNodejs, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { GiMongolia } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  // { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Suraj Sankhyan",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "Motivated Full-Stack Developer with a strong foundation in frontend and backend development, eager to apply skills in real-world projects through an internship. Passionate about building efficient and scalable web applications, with a commitment to continuous learning and teamwork. Excited to contribute to dynamic environments while gaining hands-on experience in the industry."
];

export const SKILLS = [
  {
    // HTML
    icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML",
    experience: "The backbone of web pages, used to structure content.",
  },
  {
    // CSS
    icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "CSS",
    experience: "Styles the HTML, adding design, layout, and responsiveness.",
  },
  {
    // JavaScript
    icon: <RiJavascriptFill className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "A programming language that adds interactivity and dynamic behavior to web pages.",
  },

  {
    // MongoDB
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: " A NoSQL database that stores data in flexible JSON-like documents.",
  },
  {
    // Express JS
    icon: <SiExpress className="text-4xl text-gray-300 lg:text-5xl" />,
    name: "Express JS",
    experience: "A fast and minimalist Node.js web framework for building APIs and web apps.",
  },
  {
    // React
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "A JavaScript library for building dynamic and reusable user interfaces.",
  },
  {
    // Node JS
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "A runtime that allows JavaScript to execute on the server side.",
  },
  {
    // SQL
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "A powerful open-source relational database that supports SQL queries.",
  },
  {
    // GitHub
    icon: < FaGithub className="text-4xl text-gray-600 lg:text-5xl" />,
    name: "GitHub",
    experience: "A platform to store, share, and collaborate on code projects.",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "10ᵗʰ And  12ᵗʰ Class",
    institution: "DAV Public School",
    duration: "2018 And 2020",
    description:
      "I completed my 10th and 12th grade from DAV Public School in Himachal Pradesh. Throughout my academic journey, I developed a strong foundation in various subjects, honed my problem-solving skills, and actively participated in extracurricular activities. My time at DAV Public School not only strengthened my academic knowledge but also instilled discipline, teamwork, and a passion for continuous learning.",
  },
  {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Chitkara University, Rajpura",
    duration: "2020 - 2024",
    description:
      "Focused on web development, programming languages, data structures & algorithms (DSA), and database management. Actively involved in coding clubs, hackathons, and extracurricular activities, where I developed essential skills such as problem-solving, teamwork, and critical thinking.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.youtube.com/@BunnySank",
    icon: <BsYoutube fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/invite/D9Pp2xZG3k",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com/bunnysank_yt",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/u/SurajSankhyan/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/SurajSankhyan",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/suraj-sankhyan07/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
