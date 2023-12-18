import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  next_js,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  ProductFeedbackApp,
  Designo,
  KanbanTaskManagment,
  RockPaperScissors,
  InteractiveCommentsSection,
  Audiophile,
  IssueTracker,
  EntertainmentWebApp,
  MultiStepForm,
  SpaceTravel,
  WhereInTheWorld,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next_js,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const tags = {
  react: {
    name: "react",
    color: "blue-text-gradient",
  },
  next_js: {
    name: "next.js",
    color: "orange-text-gradient",
  },
  tailwind: {
    name: "tailwind",
    color: "green-text-gradient",
  },
  css: {
    name: "css",
    color: "green-text-gradient",
  },
  scss: {
    name: "scss",
    color: "pink-text-gradient",
  },
  api: {
    name: "api",
    color: "pink-text-gradient",
  },
  fullstack: {
    name: "fullstack",
    color: "green-text-gradient",
  },
  localStorage: {
    name: "localStorage",
    color: "green-text-gradient",
  },
};

const projects = [
  {
    name: "Product Feedback App",
    description: `Utilizing Next.js, Prisma & NextAuth, this dynamic platform encourages
      idea submissions akin to GitHub issues. Engage in collaborative problem-solving through
      comments, upvotes, and community-driven interactions, fostering a space for shared
      innovation and solution-building.`,
    tags: [tags.next_js, tags.scss, tags.fullstack],
    image: ProductFeedbackApp,
    source_code_link: "https://github.com/TofikE124/Product-Feedback-App",
    live_link: "https://product-feedback-app-beta-five.vercel.app",
  },
  {
    name: "Designo",
    description: `Explore Our Creative World! Dive into a captivating 
      showcase of web, app, and graphic designs. Discover innovation and inspiration
      through our diverse portfolio.`,
    tags: [tags.react, tags.css],
    image: Designo,
    source_code_link: "https://github.com/TofikE124/Designo",
    live_link: "https://gorgeous-brioche-7c0074.netlify.app",
  },
  {
    name: "Kanban Task Managment App",
    description: `Effortlessly manage tasks across custom boards like 'Project Development'
      or 'Event Planning.' Seamlessly transition tasks between 'To-Do,' 'In Progress,'
      and 'Completed' with this system crafted using React and local storage, enhancing
      productivity and workflow management.`,
    tags: [tags.react, tags.localStorage],
    image: KanbanTaskManagment,
    source_code_link: "https://github.com/TofikE124/Kanban-task-managment",
    live_link: "https://graceful-cupcake-664f77.netlify.app",
  },
  {
    name: "Rock Paper Scissors Lizard Spock",
    description: ` Classic and 'Lizard Spock' Edition! 
      This Next.js and SCSS-built game offers traditional play or the added challenge
      of 'Lizard' and 'Spock.' Engage in strategy, revel in variety, and enjoy the playful
      twists!`,
    tags: [tags.react, tags.scss],
    image: RockPaperScissors,
    source_code_link: "https://github.com/TofikE124/rock-paper-scissors",
    live_link: "https://rock-paper-scissors-eta-sepia.vercel.app",
  },
  {
    name: "Interactive Comments Section",
    description: `Interactive Comments Section: Engage, Vote, Discuss! Powered by Next.js,
     NextAuth, and Prisma, this platform enables commenting, upvoting, and downvoting,
      fostering interactive discussions. Seamlessly contribute, share opinions, and shape 
      conversations in this dynamic community-driven space.`,
    tags: [tags.next_js, tags.fullstack],
    image: InteractiveCommentsSection,
    source_code_link:
      "https://github.com/TofikE124/interactive-comments-section",
    live_link: "https://interactive-comments-section-pxi1.vercel.app",
  },
  {
    name: "Audiophile",
    description: `Explore & Shop Headphones! Browse our latest headphone offers, add favorites
      to your cart, and make purchases hassle-free. Crafted with React and local storage,
      this app ensures seamless browsing and shopping for your audio needs.`,
    tags: [tags.react, tags.css, tags.localStorage],
    image: Audiophile,
    source_code_link:
      "https://github.com/TofikE124/Audiophile-Ecommerce-Website",
    live_link: "https://brilliant-begonia-545122.netlify.app",
  },
  {
    name: "Issue Tracker",
    description: `Next.js, Prisma & NextAuth converge in this issue tracker. Easily 
      add and categorize issues, leveraging a seamless interface for streamlined
       issue management and accessibility.`,
    tags: [tags.next_js, tags.fullstack],
    image: IssueTracker,
    source_code_link: "https://github.com/TofikE124/Designo",
    live_link: "https://issue-tracker-u639.vercel.app",
  },
  {
    name: "Entrtainment Wep App",
    description: `An immersive entertainment web app powered by React. Log in to
       explore movies, TV shows, mark favorites, and easily search by name. Enjoy
        a personalized experience tailored to your preferences.`,
    tags: [tags.react, tags.fullstack],
    image: EntertainmentWebApp,
    source_code_link: "https://github.com/TofikE124/Entertainment-Wep-App",
    live_link: "https://startling-meerkat-af238a.netlify.app",
  },
  {
    name: "Multi Step Form",
    description: `Explore a sleek multi-form web page using React, React Hook
      Form, and Zod. Effortless transitions showcase efficient form features in a
      user-friendly interface.`,
    tags: [tags.react, tags.css],
    image: MultiStepForm,
    source_code_link: "https://github.com/TofikE124/MultiForm",
    live_link: "https://inspiring-truffle-aa8631.netlify.app",
  },
  {
    name: "Space Travel",
    description: `Space Travel: Explore planets, astronauts, and rocket tech! This React-powered website offers
       intriguing insights into space. Dive into captivating details about celestial bodies, astronauts,
        and the fascinating technology behind space exploration.`,
    tags: [tags.react, tags.css],
    image: SpaceTravel,
    source_code_link: "https://github.com/TofikE124/Space-Travel",
    live_link: "https://symphonious-faun-36c411.netlify.app",
  },
  {
    name: "Where in the world?",
    description: `Explore Global Diversity: Find countries by name or region, built using
       React and REST Countries API. Dive into intriguing details for a rich exploration experience.`,
    tags: [tags.react, tags.api],
    image: WhereInTheWorld,
    source_code_link: "https://github.com/TofikE124/where-in-the-world-V2.0",
    live_link: "https://fanciful-crisp-3ecb19.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
