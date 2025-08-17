import React, { useEffect, useState } from 'react'
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export const ProjectSection = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(
      "https://api.github.com/users/sonali167-coder/repos?sort=updated&per_page=6",
      {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      }
    )
        .then((res) => res.json())
        .then((data) => {
            const formatted = data.map(repo => ({
                id: repo.id,
                title: repo.name,
                description: repo.description || "No description provided.",
                tags: repo.topics || ["GitHub"],
                image: "/projects/placeholder.png", 
                demoUrl: repo.homepage || repo.html_url,
                githubUrl: repo.html_url,
            }));
            setProjects(formatted)
        });
    }, []);
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal animation="slideUp" className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fadeIn" delay={0.2} className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects fetched directly from my GitHub
            profile.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              animation="scale" 
              delay={0.1 * (index % 6)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden bg-secondary/20 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="slideUp" delay={0.4} className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sonali167-coder"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>

  )
}
