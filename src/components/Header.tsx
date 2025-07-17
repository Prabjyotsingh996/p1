import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Github, Database, Monitor } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const links = [
    { label: "Paper", url: "https://arxiv.org/pdf/2504.15404", icon: FileText },
    { label: "Code", url: "https://github.com/Tawheed-tariq/Grounded_Teacher", icon: Github },
    { label: "arXiv", url: "https://arxiv.org/abs/2504.15404", icon: ExternalLink },
   // { label: "Data", url: "#", icon: Database },
    //{ label: "Demo", url: "#", icon: Monitor },
  ];

  return (
    <header className="bg-background border-b border-border transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-8 relative">
      
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground leading-tight animate-fade-in">
          <span className="font-extrabold text-primary">Grounded_Teacher</span>: Context Aware Grounded Teacher for Source Free Object
 Detection
        </h1>

        {/* Conference Badge */}
        <div className="flex justify-center mb-8 animate-scale-in">
          <a 
            href="https://conferences.miccai.org/2024/en/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-all duration-300 hover-scale"
          >
            
          </a>
        </div>

        {/* Authors */}
        <div className="text-center mb-6">
          <div className="text-lg text-muted-foreground space-x-2 flex flex-wrap justify-center items-center gap-1">
            <a href="https://www.tajamulashraf.com/" className="text-primary hover:underline">Tajamul Ashraf</a>
            <span className="text-sm">1,2</span>,
            <a href="linkedin.com/in/rajes-manna-489110212" className="text-primary hover:underline">Rajes Manna</a>
            <span className="text-sm">4</span>,
            <a href="https://psindiap.github.io/" className="text-primary hover:underline"> Partha Sarathi Purkayastha</a>
            <span className="text-sm">3</span>,
             <a href="https://tavaheed.netlify.app/" className="text-primary hover:underline"> Tavaheed Tariq</a>
            <span className="text-sm">4</span>
            <a href="https://www.janibbashir.com/" className="text-primary hover:underline"> Janibul Bashir</a>
            <span className="text-sm">4</span>
          </div>
          <div className="text-sm text-muted-foreground mt-2">
  <div><span className="text-sm">1 </span>Department of Computer Vision, MBZUAI, Masdar City, 11058, Abu Dhabi, UAE.</div>
  <div><span className="text-sm">2 </span>School of Information Technology, IIT Delhi, Hauz Khas, 180037, New Delhi, India.</div>
  <div><span className="text-sm">3 </span>Microsoft Research India, Bengaluru, 560001, Karnataka, India.</div>
  <div><span className="text-sm">4 </span>Department of Information Technology, NIT Srinagar, Hazratbal, 190007, J&K, India.</div>
</div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="academic"
              asChild
              className="shadow-soft hover-scale transition-all duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
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