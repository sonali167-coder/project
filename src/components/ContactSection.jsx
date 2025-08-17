import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal animation="slideUp" className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-primary"> Touch</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fadeIn" delay={0.2} className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal animation="slideLeft" delay={0.3}>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6 justify-center">
                <ScrollReveal animation="fadeIn" delay={0.4}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:nayaksonali167@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        nayaksonali167@gmail.com
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal animation="fadeIn" delay={0.5}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a
                        href="tel:+918763871633"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +918763871633
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal animation="fadeIn" delay={0.6}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <a className="text-muted-foreground hover:text-primary transition-colors">
                        Bhubaneswar, Odisha
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fadeIn" delay={0.7}>
                <div className="pt-8">
                  <h4 className="font-medium mb-4">Connect With Me</h4>
                  <div className="flex space-x-4 justify-center">
                    <a
                      href="http://www.linkedin.com/in/sonali-nayak-101240293"
                      target="_blank"
                    >
                      <Linkedin />
                    </a>
                    <a href="https://github.com/sonali167-coder" target="_blank">
                      <Github />
                    </a>
                    <a href="#" target="_blank">
                      <Instagram />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideRight" delay={0.4}>
            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <ScrollReveal animation="fadeIn" delay={0.5}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                      placeholder="Sonali..."
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fadeIn" delay={0.6}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                      placeholder="john@gmail.com"
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fadeIn" delay={0.7}>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Hello, I'd like to talk about..."
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fadeIn" delay={0.8}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "cosmic-button w-full flex items-center justify-center gap-2"
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} />
                  </button>
                </ScrollReveal>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
