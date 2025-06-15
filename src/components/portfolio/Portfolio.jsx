import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Portfolio.css";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

const projects = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Pinterest Clone",
    desc: "Built a full-stack Pinterest clone with the MERN stack, Zustand, and TanStack Query, featuring a masonry grid, real-time pin editing, optimized image delivery via ImageKit, custom boards, saved collections, and engagement tools like likes, comments, saves, and an integrated image editor.",
    link: "https://github.com/junaidakram1/pinterest-fullstack",
  },
  {
    id: 2,
    img: "/p4.jpg",
    title: "E-Commerce App",
    desc: "Developed a full-stack MERN E-Commerce platform with MaterialUI, Redux Toolkit, Cloudinary (Media Management) featuring a user-friendly experience with advanced product browsing, cart management, and secure Stripe payments, alongside a comprehensive admin panel with detailed analytics, interactive graphs, and real-time management. ",
    link: "https://github.com/junaidakram1/e-commerce-full-stack",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "MERN Stack Blog Platform",
    desc: "Built a responsive Blog website featuring live search for advanced navigation, category-based browsing, and user authentication. Enabled seamless post interactions including comments and likes, creating a space to learn from others or simply vibe around.",
    link: "https://github.com/junaidakram1/Blog-App",
  },
  {
    id: 4,
    img: "/p2.jpg",
    title: "Shopping App (Headless CMS)",
    desc: "Developed a responsive shopping platform with category-based navigation and filtering, cart management, and secure checkout functionality. Utilized React with RTK for state management, SCSS for styling, Strapi as a headless CMS for dynamic product management, and Stripe for payment processing. Achieved a lightweight, scalable architecture using Strapi for dynamic content delivery.",
    link: "https://github.com/junaidakram1/shopping-app",
  },
];

const imgVariants = {
  enter: { x: -500, y: 500, opacity: 0 },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, delay: 0.1, ease: "easeOut" },
  },
  exit: {
    x: -100,
    y: 100,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const textVariants = {
  enter: { x: 500, y: 500, opacity: 0 },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      delay: 0.1,
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: 100,
    y: 100,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn", staggerChildren: 0.4 },
  },
};

const radius = 24;
const circumference = 2 * Math.PI * radius;

const Portfolio = () => {
  const totalProjects = projects.length;
  const [[page, direction], setPage] = useState([0, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-400px" });

  const projectIndex = ((page % totalProjects) + totalProjects) % totalProjects;
  const progress = ((projectIndex + 1) / totalProjects) * 100;
  const strokeDashoffset = circumference * (1 - progress / 100);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div
      className="portfolio-container"
      ref={ref}
      style={{ minHeight: "80vh" }}
    >
      <div className="progress-circle-wrapper">
        <svg
          className="progress-svg"
          width="60"
          height="60"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            className="progress-bg"
            cx="30"
            cy="30"
            r={radius}
            stroke="rgba(192, 192, 192, 0.3)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            className="progress-indicator"
            cx="30"
            cy="30"
            r={radius}
            stroke="#dd4c62"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
      </div>
      <div className="slider">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={projects[projectIndex].id}
            className="slide"
            custom={direction}
            initial="enter"
            animate={isInView ? "center" : "enter"}
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="slide-content">
              <motion.img
                src={projects[projectIndex].img}
                alt={projects[projectIndex].title}
                variants={imgVariants}
                initial="enter"
                animate={isInView ? "center" : "enter"}
                exit="exit"
                className="slide-image"
              />
              <motion.div
                className="text-content"
                variants={textVariants}
                initial="enter"
                animate={isInView ? "center" : "enter"}
                exit="exit"
              >
                <motion.h2
                  variants={{
                    enter: { opacity: 0, y: 20 },
                    center: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 20 },
                  }}
                >
                  {projects[projectIndex].title}
                </motion.h2>
                <motion.p
                  variants={{
                    enter: { opacity: 0, y: 20 },
                    center: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 20 },
                  }}
                >
                  {projects[projectIndex].desc}
                </motion.p>
                <motion.a
                  href={projects[projectIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    enter: { opacity: 0, y: 20 },
                    center: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 20 },
                  }}
                >
                  <button>View Project</button>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="controls">
        <ArrowDropDownCircleOutlinedIcon
          onClick={() => paginate(-1)}
          className="control"
          sx={{
            transform: "rotate(90deg)",
            fontSize: "50px",
            backgroundColor: "none",
            transition: "transform 0.3s",
            color: "rgba(255, 192, 203, 0.683)",
            cursor: "pointer",
            "&:hover": {
              color: "rgba(255, 192, 203, 0.333)",
              transform: "scale(1.1) rotate(90deg)",
            },
          }}
        />
        <ArrowDropDownCircleOutlinedIcon
          onClick={() => paginate(1)}
          sx={{
            transform: "rotate(-90deg)",
            fontSize: "50px",
            backgroundColor: "none",
            transition: "transform 0.3s",
            color: "rgba(255, 192, 203, 0.683)",
            cursor: "pointer",
            "&:hover": {
              color: "rgba(255, 192, 203, 0.333)",
              transform: "scale(1.1) rotate(-90deg)",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
