import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "./Portfolio.css";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
const projects = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Blog Application",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sfdsk ksdjf sldfm sdlf ksmdf ;ksmdf sdlkmf sd;kfm lsdjf klsjdf skdjf !dlfkjsd",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    link: "/",
  },
];

const imgVariants = {
  enter: {
    x: -500,
    y: 500,
    opacity: 0,
  },
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
  enter: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      delay: 0.1,
      staggerChildren: 0.4,
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
  const projectIndex = ((page % totalProjects) + totalProjects) % totalProjects;

  const progress = ((projectIndex + 1) / totalProjects) * 100;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <div className="portfolio-container">
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
            r="24"
            stroke="rgba(192, 192, 192, 0.3)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            className="progress-indicator"
            cx="30"
            cy="30"
            r="24"
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
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="slide-content">
              <motion.img
                src={projects[projectIndex].img}
                alt={projects[projectIndex].title}
                variants={imgVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="slide-image"
              />

              <motion.div
                className="text-content"
                variants={textVariants}
                initial="enter"
                animate="center"
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
                  <motion.a
                    href={projects[projectIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{
                      enter: { opacity: 0, y: 20 },
                      center: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.05 },
                      },
                      exit: { opacity: 0, y: 20 },
                    }}
                  >
                    <button>View Project</button>
                  </motion.a>
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
            "&:hover": {
              color: "rgba(255, 192, 203, 0.333)",
              transform: "scale(1.1) rotate(90deg)",
            },
          }}
        />

        <ArrowDropDownCircleOutlinedIcon
          onClick={() => {
            paginate(1);
          }}
          sx={{
            transform: "rotate(-90deg)",
            fontSize: "50px",
            backgroundColor: "none",
            transition: "transform 0.3s",
            color: "rgba(255, 192, 203, 0.683)",
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
