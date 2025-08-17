import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // faster reveal between children
      delayChildren: 0.1,   // shorter wait before starting
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.46, 0.45, 0.94], // custom easing for smoother motion
      type: "spring",
      stiffness: 100,
      damping: 20
    },
  },
};

// New variants for different animation types
export const slideUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
      damping: 25
    },
  },
};

export const slideLeftVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
      damping: 25
    },
  },
};

export const slideRightVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 80,
      damping: 25
    },
  },
};

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 20
    },
  },
};

const Reveal = ({ children, className, variants = childVariants }) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "-50px" }}
    >
      {/* Wrap all children in motion.div so they stagger */}
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={variants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={variants}>{children}</motion.div>}
    </motion.div>
  );
};

export default Reveal;
