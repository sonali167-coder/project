import { Code, User, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <ScrollReveal animation="slideUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">About </span>
            <span className="text-primary">Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <ScrollReveal animation="slideLeft" delay={0.2}>
            <div className="border border-primary/80 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-background/50 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <User className="h-5 w-5" />
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I am a passionate web developer who loves crafting modern, responsive, and user-friendly digital
                experiences. My journey in tech began with curiosity for how websites work, which quickly turned into
                building full-stack applications. I enjoy solving problems, learning new tools, and turning ideas into
                real, functional products. When I'm not coding, I'm exploring design trends, improving my workflows, and
                finding ways to make the web more beautiful and accessible.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <a
                  href="#contact"
                  className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-300 text-center"
                >
                  Get In Touch
                </a>
                <a
                  href="/Resume.pdf"
                  download
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
                >
                  Download CV
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideRight" delay={0.4}>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Code className="h-6 w-6 text-primary" />,
                  title: "Web Development",
                  description:
                    "Building responsive, fast, and modern web applications using the latest full-stack technologies.",
                },
                {
                  icon: <User className="h-6 w-6 text-primary" />,
                  title: "UI/UX Design",
                  description: "Designing seamless user experiences with clean, interactive, and accessible interfaces.",
                },
                {
                  icon: <Briefcase className="h-6 w-6 text-primary" />,
                  title: "Project Management",
                  description: "Coordinating projects efficiently with agile methodologies to meet deadlines and goals.",
                },
              ].map((service, idx) => (
                <ScrollReveal 
                  key={idx} 
                  animation="scale" 
                  delay={0.1 * (idx + 1)}
                  className="p-6 rounded-xl border border-border shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-background/40 backdrop-blur-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
