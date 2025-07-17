import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const CitationSection = () => {
  const [copied, setCopied] = useState(false);

  const bibtex = `@misc{ashraf2025contextawaregroundedteacher,
      title={Context Aware Grounded Teacher for Source Free Object Detection}, 
      author={Tajamul Ashraf and Rajes Manna and Partha Sarathi Purkayastha and Tavaheed Tariq and Janibul Bashir},
      year={2025},
      eprint={2504.15404},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2504.15404}, 
}},
  }`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          BibTeX
        </h2>
        
        <div className="relative">
          <pre className="bg-muted/50 border border-border rounded-lg p-6 text-sm overflow-x-auto">
            <code className="text-foreground">
              {bibtex}
            </code>
          </pre>
          
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="absolute top-4 right-4"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CitationSection;