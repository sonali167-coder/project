import { motion } from "framer-motion";

const ScrollReveal = ({ 
  children, 
  className = "", 
  animation = "slideUp",
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
  margin = "-100px"
}) => {
  const animations = {
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { 
          duration, 
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 80,
          damping: 25
        },
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { 
          duration, 
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 80,
          damping: 25
        },
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { 
          duration, 
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 80,
          damping: 25
        },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { 
          duration, 
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 20
        },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { 
          duration, 
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        },
      },
    }
  };

  return (
    <motion.div
      className={className}
      variants={animations[animation] || animations.slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: threshold,
        margin 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 