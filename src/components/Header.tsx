import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const links = [
    { label: "Paper", url: "https://arxiv.org/pdf/2504.15404", icon: FileText },
    { label: "Code", url: "https://github.com/Tawheed-tariq/Grounded_Teacher", icon: Github },
    { label: "arXiv", url: "https://arxiv.org/abs/2504.15404", icon: ExternalLink },
  ];

  return (
    <header className="bg-background border-b border-border transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-12 relative">

        {/* Logo in top-left */}
        <a href="/" className="absolute top-6 left-6 w-12 h-12">
          <img
            src="images/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </a>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground leading-tight animate-fade-in">
          <span className="font-extrabold text-primary">Grounded_Teacher</span>:<br className="md:hidden" />
          Context Aware Grounded Teacher for Source Free Object Detection
        </h1>

        {/* Authors */}
        <div className="text-center mb-10 space-y-2">
          <div className="text-lg text-muted-foreground flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <a href="https://www.tajamulashraf.com/" className="text-primary hover:underline">Tajamul Ashraf</a><span className="text-sm">1,2</span>,
            <a href="https://linkedin.com/in/rajes-manna-489110212" className="text-primary hover:underline">Rajes Manna</a><span className="text-sm">4</span>,
            <a href="https://psindiap.github.io/" className="text-primary hover:underline">Partha Sarathi Purkayastha</a><span className="text-sm">3</span>,
            <a href="https://tavaheed.netlify.app/" className="text-primary hover:underline">Tavaheed Tariq</a><span className="text-sm">4</span>,
            <a href="https://www.janibbashir.com/" className="text-primary hover:underline">Janibul Bashir</a><span className="text-sm">4</span>
          </div>

          <div className="text-sm text-muted-foreground space-y-1">
            <p><span className="text-sm font-semibold">1</span> Department of Computer Vision, MBZUAI, Abu Dhabi, UAE</p>
            <p><span className="text-sm font-semibold">2</span> School of IT, IIT Delhi, New Delhi, India</p>
            <p><span className="text-sm font-semibold">3</span> Microsoft Research India, Bengaluru, Karnataka, India</p>
            <p><span className="text-sm font-semibold">4</span> Department of IT, NIT Srinagar, J&K, India</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-4 animate-fade-in">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="academic"
              asChild
              className="shadow-md hover:scale-105 transition-transform duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2">
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
