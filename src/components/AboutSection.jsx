import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gradient">About </span>
          <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Skills + Buttons */}
          <div className="border border-primary/80 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-background/50 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Code className="h-5 w-5" />
              My Tech Stack
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm sm:text-base">
              <li>
                <strong className="text-primary">Frontend:</strong> HTML, CSS, JavaScript, React.js, Tailwind CSS
              </li>
              <li>
                <strong className="text-primary">Backend:</strong> Node.js, Express.js, REST APIs
              </li>
              <li>
                <strong className="text-primary">Database:</strong> MongoDB, Mongoose
              </li>
              <li>
                <strong className="text-primary">Tools:</strong> Git, GitHub, Postman, Vite, VS Code
              </li>
              <li>
                <strong className="text-primary">Deployment:</strong> Vercel, Render
              </li>
            </ul>

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

          {/* Right: Services Overview */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                description: "Building responsive, fast, and modern web applications using fullstack technologies.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                description: "Crafting seamless user experiences and clean, interactive interfaces.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                description: "Planning, executing, and delivering projects using agile workflows.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-border shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-background/40 backdrop-blur-md"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{service.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
