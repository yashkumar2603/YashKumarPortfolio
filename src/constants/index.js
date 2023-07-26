import {
  mobile,
  backend,
  creator,
  web,
  robot,
  telescope,
  threed,
  astrophotographer,
  javascript,
  typescript,
  html,
  css,
  cpp,
  reactjs,
  opencv,
  tailwind,
  nodejs,
  mongodb,
  python,
  photoshop,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "photos",
    title: "Camera Roll",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
  
];

const services = [
  {
    title: "Programming Enthusiast",
    icon: web,
  },
  {
    title: "Photographer",
    icon: mobile,
  },
  {
    title: "Videography and VFX",
    icon: backend,
  },
  {
    title: "Posters, artworks",
    icon: creator,
  },
  {
    title: "3D Art",
    icon: threed,
  },
  {
    title: "Astronomy",
    icon: telescope,
  },
  {
    title: "Robotics and Microcontrollers",
    icon: robot,
  },
  {
    title: "Astro-photography",
    icon: astrophotographer,
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
    name: "Cpp",
    icon: cpp,
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
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
];

const experiences = [
  {
    title: "Schooling",
    company_name: "Hariyana Vidya Mandir",
    icon: starbucks,
    iconBg: "#383E56",
    date: "till April 2022",
    points: [
      "Passed Class-10 with 94% of total marks.",
      "Passed Class-12 with 93% of total marks",
      "Qualified Regional Mathematics, Astronomy Olympiads",
      "Fully explored my interests in Astronomy, programming, 3D design, photography and much more....",
    ],
  },
  {
    title: "Entrance Exams",
    company_name: "JEE, WBJEE etc.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2022 - September 2022",
    points: [
      "Qualified JEE Mains Examination by surpassing >99% of the total candidates.",
      "Under 500 Rank among 1.25lakh+ candidates.",
      "Qualified JEE Advanced Examination securing a seat in the top-5 IITs.",
    ],
  },
  {
    title: "University",
    company_name: "Indian Institute of technology, Kharagpur",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Second Year B.Tech Undergraduate of the Department of Mechanical Engineering",
      "Boarder of Radhakrishnan Hall of Residence.",
      "Photographer and filmmaker at Technology Filmmaking and Photography Society(TFPS).",
      "Subhead at Technology Robotix Society.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Picture-1 Description.",
    name: "Location-1",
    designation: "CFO",
    company: "Acme Co",
    image: "https://thatwildidea.co.uk/wp-content/uploads/2019/09/photographing-mountains-portrait-mode.jpg",
  },
  {
    testimonial:
      "Picture-2 Description.",
    name: "Location-2",
    designation: "COO",
    company: "DEF Corp",
    image: "https://img.freepik.com/premium-photo/beautiful-mountain-landscape-with-river-cloudy-summer-day-kazbegi-georgia_185452-2337.jpg?w=360",
  },
  {
    testimonial:
      "Picture-3 Description",
    name: "Location-3",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://w0.peakpx.com/wallpaper/435/627/HD-wallpaper-landscape-mountains-nature-stars-portrait-display.jpg",
  },
];

const projects = [
  {
    name: "Portfolio  Website",
    description:
      "Step into a mesmerizing world of creativity! This very website, designed and developed by me. It is aimed at showcasing a splendid fusion of art and technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three-js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind-CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Blender",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    deployed: "",
    source_code_link: "https://github.com/yashkumar2603/My_Portofolio_Website.git",
  },
  {
    name: "AI Mask Detection",
    description:
      "Created as a final task for Winter School, a month long workshop on Computer Vision. It uses a deep learning model to detect wether a person is wearing a mask or not.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Deep-Learning",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    deployed: "",
    source_code_link: "https://github.com/yashkumar2603/Winter_School_2023/tree/03b671787ce6311393e785828ca882637feb3f70/Task_2",
  },
  {
    name: "IDK FR",
    description:
      "There Should have been a project here, only if i would have done something in my life T_T",
    tags: [
      {
        name: "nothingg",
        color: "blue-text-gradient",
      },
      {
        name: "timepass",
        color: "green-text-gradient",
      },
      {
        name: "projectt",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    deployed: "",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };