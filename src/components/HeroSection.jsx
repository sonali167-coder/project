import { ArrowDown } from "lucide-react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import photoPlaceholder from "../assets/profile.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        {/* Staggered reveal */}
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Photo Section - Left Side */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.3 
              }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm photo-hover">
                {/* Placeholder photo - replace src with your actual photo */}
                <img 
                  src={photoPlaceholder} 
                  alt="Sonali Nayak" 
                  className="w-full h-full object-cover"
                />
              </div>
              

            </motion.div>

            {/* Content Section - Right Side */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-4 lg:space-y-6">
              <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight space-y-1">
                <motion.div className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
                  Hello! I'm
                </motion.div>
                {/* <motion.div className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-normal">
                  I'm
                </motion.div> */}
                <motion.div className="space-y-2">
                  <span className="text-primary">Sonali</span>{" "}
                  <span className="text-gradient">Nayak</span>
                </motion.div>
              </motion.h1>

              <motion.p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl lg:max-w-none">
                I design and build digital experiences that are both functional and
                beautiful — always learning and creating.
              </motion.p>

              <motion.div className="pt-2">
                <a href="#projects" className="cosmic-button">
                  View My Work
                </a>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
