import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hello! I'm</span>
                    <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">Sonali</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Nayak</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-delay-3 max-2-2xl opacity-0 mx-auto">
                    I design and build digital experiences that are both functional and beautiful
                    always learning and creating.
                </p>

                <div className="animate-fade-in-delay-4 opacity-0">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col justify-center animate-bounce">
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}