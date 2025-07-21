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
      <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-10 sm:pt-20">

        {/* Logo */}
        <div className="flex justify-center mb-6">
       <a href="https://gaash.nitsri.ac.in/" target="_blank" rel="noopener noreferrer">
    <img
      src="IMAGES/logo.png"
      alt="NIT Logo"
      className="w-20 h-20 sm:w-24 sm:h-24 object-contain hover:scale-105 transition-transform duration-300"
    />
  </a>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight animate-fade-in mb-6">
            <span className="text-primary font-extrabold">Grounded_Teacher</span>: Context Aware<br />
            Grounded Teacher for Source Free Object Detection
          </h1>
        </div>

        {/* Authors */}
        <div className="text-center mb-10 space-y-3">
          <div className="text-lg text-muted-foreground flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <a href="https://www.tajamulashraf.com/" className="text-primary hover:underline">Tajamul Ashraf<sup>1,2*</sup></a>,
            <a href="https://linkedin.com/in/rajes-manna-489110212" className="text-primary hover:underline">Rajes Manna<sup>4†</sup></a>,
            <a href="https://psindiap.github.io/" className="text-primary hover:underline">Partha Sarathi Purkayastha<sup>3†</sup></a>,
            <a href="https://tavaheed.netlify.app/" className="text-primary hover:underline">Tavaheed Tariq<sup>4</sup></a>,
            <a href="https://www.janibbashir.com/" className="text-primary hover:underline">Janibul Bashir<sup>4*</sup></a>
          </div>

          <div className="text-sm text-muted-foreground leading-relaxed space-y-1">
            <p><span className="font-semibold">1</span> Dept. of Computer Vision, MBZUAI, Abu Dhabi, UAE</p>
            <p><span className="font-semibold">2</span> School of IT, IIT Delhi, New Delhi, India</p>
            <p><span className="font-semibold">3</span> Microsoft Research India, Bengaluru, Karnataka, India</p>
            <p><span className="font-semibold">4</span> Dept. of IT, NIT Srinagar, J&K, India</p>
          </div>
          <div className="text-sm text-muted-foreground mt-4 space-y-1">
  <p>
    <strong>*Corresponding author(s):</strong>{" "}
    <a href="mailto:tajamul.ashraf@mbzuai.ac.ae" className="text-primary hover:underline">tajamul.ashraf@mbzuai.ac.ae</a>,{" "}
    <a href="mailto:janibbashir@nitsri.ac.in" className="text-primary hover:underline">janibbashir@nitsri.ac.in</a>
  </p>
  <p>
    <strong>Contributing authors:</strong>{" "}
    <a href="mailto:rajes2021bite063@nitsri.ac.in" className="text-primary hover:underline">rajes2021bite063@nitsri.ac.in</a>,{" "}
    <a href="mailto:t-ppurkayast@microsoft.com" className="text-primary hover:underline">t-ppurkayast@microsoft.com</a>,{" "}
    <a href="mailto:tavaheed2022bite008@nitsri.ac.in" className="text-primary hover:underline">tavaheed2022bite008@nitsri.ac.in</a>
  </p>
  <p><strong>†These authors contributed equally to this work.</strong> </p>
</div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="academic"
              asChild
              className="shadow-md hover:scale-105 transition-transform duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2"
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
