import { ArrowDown, ExternalLink, Github, Linkedin, Mail, Download, Moon, Sun, X, Heart, Code, Coffee, Gamepad2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import { CustomCursor } from "@/components/CustomCursor";
import { SnakeGame } from "@/components/SnakeGame";
import { ContactDialog } from "@/components/ContactDialog";
import userImage from '@assets/me.png';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

const JourneyItem = ({ year, title, company, description, align = "left" }: { year: string, title: string, company: string, description: string, align?: "left" | "right" }) => {
  return (
    <div className={`flex flex-col items-center justify-between w-full mb-20 md:mb-32 relative z-10 gap-6 md:gap-0 ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}>
      
      {/* Mobile: Dot comes first (order-1), Card second (order-2) */}
      {/* Desktop: Card is order-1 (or 3), Dot is order-2 */}
      
      {/* Card Container */}
      <div className="w-full md:w-[40%] order-2 md:order-1">
        <div className="animate-fade-in-up">
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 hover:-translate-y-1 group">
            <CardHeader>
              <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-1">{year}</div>
              <CardTitle className="text-xl font-display text-gray-900 dark:text-white">{title}</CardTitle>
              <CardDescription className="font-medium text-gray-600 dark:text-gray-400">{company}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-400 leading-relaxed">{description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Floating Marker with Dialog */}
      <div className="relative flex items-center justify-center w-full md:w-[20%] order-1 md:order-2">
        <Dialog>
          <DialogTrigger asChild>
            <button
                className="cursor-pointer h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 z-20 shadow-[0_0_20px_rgba(147,51,234,0.5)] ring-4 ring-white dark:ring-gray-950 flex items-center justify-center group hover:scale-110 transition-transform duration-200"
            >
              <div className="w-2 h-2 bg-white rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 max-w-md rounded-3xl">
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">{year.split(' ')[0]}</span>
              </div>
              <DialogTitle className="text-2xl font-display font-bold mb-2 text-gray-900 dark:text-white">{title}</DialogTitle>
              <DialogDescription className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-4">{company}</DialogDescription>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 w-full">
                 <p className="text-sm text-muted-foreground italic">"A pivotal moment in my career where I learned to bridge the gap between design and engineering."</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="hidden md:block w-[40%] order-3" />
    </div>
  );
};

const ProjectCard = ({ title, desc, tags }: { title: string, desc: string, tags: string[] }) => (
  <div className="group">
    <Card className="h-full border-none shadow-lg overflow-hidden bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 relative z-10 hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 dark:group-hover:from-indigo-500/20 dark:group-hover:to-purple-500/20 transition-colors relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        <ExternalLink className="w-8 h-8 text-indigo-500/40 dark:text-indigo-400/40 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all group-hover:scale-110 duration-300" />
      </div>
      <CardHeader>
        <CardTitle className="font-display text-xl group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors text-gray-900 dark:text-white">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-transparent transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground dark:text-gray-400 leading-relaxed">{desc}</p>
      </CardContent>
    </Card>
  </div>
);

// Simple text component
const InteractiveText = () => {
  return (
    <h2 className="text-5xl md:text-7xl font-display font-bold text-center mb-6 drop-shadow-lg text-black dark:text-white relative animate-fade-in">
      <span className="relative inline-block">
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-2xl rounded-full scale-110" />
        <span className="relative">
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Mohmed</span>.
        </span>
      </span>
    </h2>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showGame, setShowGame] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'g' && !showGame) {
        setShowGame(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showGame]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-slate-50/50 dark:bg-gray-950 overflow-hidden selection:bg-purple-200 selection:text-purple-900 dark:selection:bg-purple-900 dark:selection:text-white transition-colors duration-500">
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Floating Game Button */}
      <button
        onClick={() => setShowGame(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg hover:shadow-xl flex items-center justify-center group animate-scale-in hover:scale-110 active:scale-95 transition-transform duration-200"
        aria-label="Play Snake Game"
      >
        <Gamepad2 className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-pulse" />
      </button>

      {/* Snake Game */}
      <SnakeGame isOpen={showGame} onClose={() => setShowGame(false)} />
      
      {/* Contact Dialog */}
      <ContactDialog isOpen={showContact} onClose={() => setShowContact(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-white/95 dark:bg-gray-950/95 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">MOHMED VAID</div>
        <div className="flex gap-4 items-center">
           <div className="hidden md:flex gap-2 mr-4">
             <Button 
               variant="ghost" 
               size="icon" 
               className="rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
               onClick={() => window.open('https://github.com/mohmedvaid', '_blank')}
             >
               <Github className="w-5 h-5" />
             </Button>
             <Button 
               variant="ghost" 
               size="icon" 
               className="rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
               onClick={() => window.open('https://linkedin.com/in/mohmedvaid', '_blank')}
             >
               <Linkedin className="w-5 h-5" />
             </Button>
             <ThemeToggle />
           </div>
           <Button 
             className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200 rounded-full px-6 font-medium shadow-lg hover:shadow-xl transition-all"
             onClick={() => setShowContact(true)}
           >
             Let's Talk
           </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[110vh] flex flex-col items-center justify-center pt-8 pb-8 overflow-visible">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-300/20 dark:bg-purple-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center relative">
            
            {/* Text Behind Image */}
            <h1 className="text-[24vw] md:text-[32vw] leading-none font-display font-bold tracking-tighter text-black/5 dark:text-white/5 absolute top-[8%] md:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none pointer-events-none z-0 animate-fade-in">
              AL<span className="inline-block -translate-y-[0.35em]">O</span>HA
            </h1>

            <div className="relative z-10 mt-2">
              {/* Main Image Container */}
              <div className="relative group animate-fade-in-up">
                {/* Glowing backdrop behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 scale-110" />
                
                {/* The Image itself */}
                <img 
                  src={userImage} 
                  alt="Developer" 
                  className="relative w-auto h-[70vh] md:h-[90vh] object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] z-20"
                  style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                />
                
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-3xl z-30">
                <InteractiveText />
                
                <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-xl mx-auto leading-relaxed bg-white/90 dark:bg-gray-900/90 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 animate-fade-in">
                  Software Engineer from <span className="text-black dark:text-white font-bold">Chicago</span>, crafting AI-powered solutions and scalable systems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-32 relative z-10">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-32 animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-widest uppercase mb-4">Timeline</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">My Journey</h2>
          </div>

          <div className="relative">
            <JourneyItem 
              year="06/2022 - Present"
              title="Software Engineer"
              company="Walgreens, Chicago IL"
              description="Engineered enterprise-grade full-stack solutions with MERN stack on Azure. Built AI-powered chatbots using OpenAI GPT-4 and Microsoft Copilot. Developed custom AI/ML workflows with Stable Diffusion and Whisper APIs. Created data engineering pipelines aggregating telemetry into Azure Synapse and Microsoft Fabric for analytics."
              align="left"
            />
            <JourneyItem 
              year="09/2019 - 06/2022"
              title="Automation Engineer"
              company="Americaneagle.com, Des Plaines IL"
              description="Developed Cypress and Selenium automation frameworks integrated with Azure DevOps Pipelines. Built automation scripts using TypeScript, performed multi-browser testing, and wrote unit tests with Jest and Mocha. Collaborated in Agile/Scrum environment to deliver stable releases."
              align="right"
            />
            <JourneyItem 
              year="07/2020 - 06/2022"
              title="Full Stack Developer"
              company="Upwork, Freelance Remote"
              description="Designed full-stack solutions with Node.js, Express, React, and MongoDB. Integrated OpenAI GPT models for AI features. Prototyped with Stable Diffusion and Whisper APIs. Reduced site load times from 7+ seconds to under 2 seconds through optimization. Implemented cybersecurity best practices and OWASP Top 10 protections."
              align="left"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
           <div className="text-center mb-20 animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-bold tracking-widest uppercase mb-4">Skills</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Frontend Architecture", skills: ["React", "Next.js", "TypeScript", "State Management", "Micro-frontends"] },
              { title: "Creative Coding", skills: ["WebGL", "Three.js", "GSAP", "Framer Motion", "Canvas API"] },
              { title: "Backend & Cloud", skills: ["Node.js", "PostgreSQL", "AWS", "Serverless", "Docker"] }
            ].map((category, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group animate-fade-in-up"
              >
                <h3 className="font-display text-xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/30 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-hover:border-purple-100 dark:group-hover:border-purple-800 transition-colors shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-32 bg-white/30 dark:bg-gray-900/30 relative z-10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-bold tracking-widest uppercase mb-4">About</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Beyond the Code</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              When I'm not crafting digital experiences, I'm exploring the intersection of technology, design, and human connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Design Philosophy", text: "I believe great software should feel invisible—intuitive enough that users focus on their goals, not the interface." },
              { icon: Code, title: "Continuous Learning", text: "Currently exploring AI/ML integration in web apps and experimenting with WebGPU for next-gen graphics." },
              { icon: Coffee, title: "Outside Work", text: "Coffee enthusiast, analog photography lover, and weekend hiker. Always looking for the next creative challenge." }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-800 animate-fade-in-up"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Easter Egg Hint */}
          <div className="mt-16 text-center animate-fade-in">
            <p className="text-sm text-gray-400 dark:text-gray-600 flex items-center justify-center gap-2">
              <Gamepad2 className="w-4 h-4" />
              Psst... Press "G" for a fun surprise
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-widest uppercase mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">What People Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Mohmed's ability to blend technical expertise with creative vision is unmatched. He transformed our user experience completely.",
                author: "Sarah Chen",
                role: "Product Director, TechFlow",
                avatar: "SC"
              },
              {
                quote: "Working with Mohmed was a game-changer. His attention to detail and innovative approach delivered results beyond our expectations.",
                author: "Marcus Rodriguez",
                role: "CEO, StartupX",
                avatar: "MR"
              },
              {
                quote: "A rare talent who understands both the artistry of design and the precision of engineering. Highly recommended!",
                author: "Emily Watson",
                role: "Creative Lead, Digital Canvas",
                avatar: "EW"
              }
            ].map((testimonial, i) => (
              <div key={i} className="animate-fade-in-up">
                <Card className="h-full border-none shadow-lg bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
             <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold tracking-widest uppercase mb-4">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">Selected Work</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            <div className="group w-full md:w-[calc(50%-1rem)] max-w-md animate-fade-in-up">
              <Card className="h-full border-none shadow-lg overflow-hidden bg-white dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900 dark:to-purple-800 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 dark:group-hover:from-indigo-500/20 dark:group-hover:to-purple-500/20 transition-colors relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
                  <Code className="w-12 h-12 text-indigo-600/60 dark:text-indigo-400/60 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all scale-90 group-hover:scale-110 duration-500" />
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-xl group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors text-gray-900 dark:text-white">Agentic AI Automation</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["React", "TypeScript", "Node.js", "Drag & Drop"].map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-transparent transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-400 leading-relaxed mb-4">
                    AI-powered workflow builder enabling intelligent automation agents to handle complex tasks through intuitive drag-and-drop interface.
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="gap-2"
                      onClick={() => window.open('https://mohmedvaid.github.io/workflow-builder/', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="gap-2"
                      onClick={() => window.open('https://github.com/Mohmedvaid/workflow-builder', '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group w-full md:w-[calc(50%-1rem)] max-w-md animate-fade-in-up">
              <Card className="h-full border-none shadow-lg overflow-hidden bg-white dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative z-10">
                <div className="h-48 bg-gradient-to-br from-green-100 to-blue-200 dark:from-green-900 dark:to-blue-800 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 dark:group-hover:from-indigo-500/20 dark:group-hover:to-purple-500/20 transition-colors relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
                  <div className="flex gap-2">
                    <div className="w-3 h-12 bg-green-500 rounded animate-pulse" style={{ animationDelay: '0ms' }} />
                    <div className="w-3 h-16 bg-blue-500 rounded animate-pulse" style={{ animationDelay: '100ms' }} />
                    <div className="w-3 h-10 bg-purple-500 rounded animate-pulse" style={{ animationDelay: '200ms' }} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-xl group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors text-gray-900 dark:text-white">Algorithm Visualizer</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["JavaScript", "Canvas API", "Algorithms", "Animation"].map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-transparent transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-400 leading-relaxed mb-4">
                    Interactive visualization of sorting and pathfinding algorithms with step-by-step animation and controls.
                  </p>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="gap-2"
                      onClick={() => window.open('https://mohmedvaid.github.io/algo-visualizer/', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="gap-2"
                      onClick={() => window.open('https://github.com/Mohmedvaid/algo-visualizer', '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Resume Section */}
      <section className="py-32 bg-black dark:bg-black text-white relative z-10 overflow-hidden mt-20 rounded-t-[3rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black opacity-50" />
        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight animate-fade-in">
            Let's build something <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">extraordinary.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-16">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="h-16 px-10 rounded-full text-lg bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 font-bold">
                  View Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[85vh] p-0 flex flex-col bg-white border-none">
                   <div className="flex-1 overflow-y-auto p-8 bg-white min-h-0">
                      <div className="max-w-3xl mx-auto">
                        {/* Preview Notice */}
                        <div className="mb-6 p-4 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg">
                          <p className="text-sm text-indigo-900">
                            <span className="font-semibold">📄 Preview Mode:</span> This is a condensed overview. Download the full resume below for complete details and formatting.
                          </p>
                        </div>

                        {/* Header */}
                        <div className="text-center mb-8 pb-6 border-b-2 border-indigo-600">
                          <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">MOHMED VAID</h1>
                          <p className="text-gray-600">Skokie, IL 60076 | mohmedvaid@gmail.com | (307) 213-9838</p>
                          <p className="text-sm text-indigo-600 mt-1">
                            LinkedIn: linkedin.com/in/mohmedvaid | GitHub: github.com/mohmedvaid | Portfolio: mohmedvaid.github.io
                          </p>
                        </div>

                        {/* Profile Summary */}
                        <section className="mb-6">
                          <h2 className="text-xl font-bold text-indigo-600 mb-2 uppercase tracking-wide">Profile Summary</h2>
                          <p className="text-gray-700 leading-relaxed">
                            Full Stack Engineer skilled in building scalable web apps, automation pipelines, and AI-driven solutions with JavaScript, TypeScript, Python, and Azure. Experienced in integrating OpenAI APIs, modern DevOps, and secure cloud/data workflows to deliver high-impact products.
                          </p>
                        </section>

                        {/* Technical Skills */}
                        <section className="mb-6">
                          <h2 className="text-xl font-bold text-indigo-600 mb-2 uppercase tracking-wide">Technical Skills</h2>
                          <div className="space-y-2 text-sm">
                            <p className="text-gray-700"><span className="font-semibold">Programming Languages:</span> JavaScript (ES6+), TypeScript, Python, HTML5, CSS3</p>
                            <p className="text-gray-700"><span className="font-semibold">Web & App Development:</span> Node.js, Express, React, Redux, Next.js, React Native, RESTful APIs, GraphQL</p>
                            <p className="text-gray-700"><span className="font-semibold">AI & ML Tools:</span> OpenAI API (GPT-4, GPT-4o), GitHub Copilot, Microsoft 365 Copilot, Stable Diffusion, Whisper, LangChain</p>
                            <p className="text-gray-700"><span className="font-semibold">DevOps & Cloud:</span> Azure DevOps, Docker, Kubernetes, Jenkins, GitHub Actions, SonarQube</p>
                            <p className="text-gray-700 italic">...and more (see full resume for complete list)</p>
                          </div>
                        </section>

                        {/* Experience */}
                        <section className="mb-6">
                          <h2 className="text-xl font-bold text-indigo-600 mb-3 uppercase tracking-wide">Experience</h2>
                          
                          <div className="mb-4">
                            <h3 className="font-bold text-gray-900">Software Engineer</h3>
                            <p className="text-sm text-gray-600 italic">Walgreens, Chicago IL (06/2022 - Present)</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                              <li>Engineered enterprise-grade full-stack solutions with MERN stack on Azure, reducing release cycles by 35%</li>
                              <li>Built AI-powered chatbots using OpenAI GPT-4 and Microsoft Copilot integrations</li>
                              <li>Developed data engineering pipelines aggregating telemetry into Azure Synapse and Microsoft Fabric</li>
                              <li>Created full-stack certificate renewal platform reducing manual effort by 90%</li>
                              <li className="italic">...and more (see full resume)</li>
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h3 className="font-bold text-gray-900">Automation Engineer</h3>
                            <p className="text-sm text-gray-600 italic">Americaneagle.com, Des Plaines, IL (09/2019 – 06/2022)</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                              <li>Developed Cypress and Selenium automation frameworks enhancing release quality</li>
                              <li>Built automation scripts with JavaScript/TypeScript integrated with Azure DevOps Pipelines</li>
                              <li>Performed multi-browser testing and RESTful API validation across environments</li>
                              <li>Collaborated in Agile/Scrum environment delivering stable releases</li>
                              <li className="italic">...and more (see full resume)</li>
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h3 className="font-bold text-gray-900">Full Stack Developer</h3>
                            <p className="text-sm text-gray-600 italic">Upwork, Freelance, Remote (07/2020 - 06/2022)</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                              <li>Delivered full-stack solutions with Node.js, Express, React, and MongoDB for global clients</li>
                              <li>Integrated OpenAI GPT models for AI-powered features in client applications</li>
                              <li>Reduced site load times from 7+ seconds to under 2 seconds through optimizations</li>
                              <li>Implemented security best practices including OWASP Top 10 compliance</li>
                              <li className="italic">...and more (see full resume)</li>
                            </ul>
                          </div>
                        </section>

                        {/* Education */}
                        <section>
                          <h2 className="text-xl font-bold text-indigo-600 mb-2 uppercase tracking-wide">Education</h2>
                          <p className="text-gray-700 font-semibold">Certificate in Full Stack Web Development</p>
                          <p className="text-sm text-gray-600">Northwestern University, Evanston, IL (01/2021 – 07/2022)</p>
                          <p className="text-gray-700 font-semibold mt-2">Bachelor of Computer Science</p>
                          <p className="text-sm text-gray-600">Northeastern Illinois University, Chicago, IL (06/2017 – 12/2021)</p>
                        </section>
                      </div>
                   </div>
                   <div className="flex-shrink-0 p-4 bg-gray-50 border-t flex justify-end">
                     <Button 
                       className="gap-2"
                       data-testid="button-download-resume"
                       onClick={() => {
                         const link = document.createElement('a');
                         link.href = '/attached_assets/Mohmed_Vaid_Resume_1764032835208.docx';
                         link.download = 'Mohmed_Vaid_Resume.docx';
                         link.click();
                       }}
                     >
                       <Download className="w-4 h-4" /> Download Resume
                     </Button>
                   </div>
              </DialogContent>
            </Dialog>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="h-16 px-10 rounded-full text-lg border-white/20 hover:bg-white/10 text-white hover:text-white hover:scale-105 transition-all duration-300"
              onClick={() => setShowContact(true)}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
