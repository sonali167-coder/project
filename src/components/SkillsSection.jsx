import { useState } from "react";
import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "React.js", level: 70, category: "frontend" },

  // Backend
  { name: "Node.js", level: 66, category: "backend" },
  { name: "Express.js", level: 65, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "REST APIs", level: 65, category: "backend" },

  // Tools
  { name: "Git & GitHub", level: 70, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Deployment", level: 65, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },

];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || activeCategory === skill.category )
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <ScrollReveal animation="slideUp" className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    My<span className="text-primary">Skills</span>
                </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeIn" delay={0.2} className="flex flex-wrap justify-center gap-4 mb-12">
                {
                    categories.map((category, key) => (
                        <button key={key} className={cn(
                            "px-5 py-2 rounded transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/80 text-foreground hover:bd-secondaey"
                        )}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))
                }
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <ScrollReveal 
                        key={key} 
                        animation="scale" 
                        delay={0.1 * (key % 6)}
                        className="bg-card p-6 rounded-lg shadow-2xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{ skill.name }</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animation-[grow-1.5s_ease-out" style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level + "%"}</span>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </section>
}