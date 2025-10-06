import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
 // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  { 
  id: 1,
  title: "I prioritize client collaboration, fostering open communication",
  description: "",
  className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  imgClassName: "w-full h-full object-contain",
  titleClassName: "text-purple-500 ",   // <-- you added color here
  img: "/card1.webp",
  spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible With Learning New Things",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

 
  {
    id: 6,
    title: "Connect with me",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Figma design implementation",
    des: "A collaborative design with responsive layout and compatibility .",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://rare-animal.surge.sh/",
    sourceCode: "https://github.com/haarshhx/figma-ux-project-",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "",
    sourceCode: "",
  },
 
  
] as const;


export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/haarshhx",
  },
 

  {
    name: "resume",
    img: "email.svg",
    link: "https://drive.google.com/file/d/1oRWoR3MSo6cK8idAuWnBkXs7TY3X6-A-/view?usp=sharing",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://linkedin.com/in/harsh-sharma-390968227",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "tailwind css", "React.js"],
  stack2: ["html", "Javascript", "SQL"],
} as const;
