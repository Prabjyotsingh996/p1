const AblationSection = () => {
 return (
  <section className="hidden">
    {AblationSection.tsx}
  </section>
);

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Ablation Study
        </h2>
        
        <div className="mb-8">
          <p className="text-muted-foreground leading-relaxed text-justify">
            Ablation study to understand impact of each proposed module for 
            In-house to INBreast adaptation. "Source" denotes the source-only trained model, 
            "Baseline" the basic teacher-student architecture, "MA" the proposed mask annealing 
            technique, and "<strong>ACR</strong>" denotes adaptive confidence refinement module. The figures 
            from left to right correspond to qualitative results from row 1 to row 6 respectively. 
            Red boxes denote the ground truth, and blue boxes show the predicted regions.
          </p>
        </div>

        <div className="text-center">
          <img 
            src="https://dmaster-iitd.github.io/webpage/static/images/ablation.png" 
            alt="Ablation Study Results" 
            className="w-full max-w-5xl mx-auto rounded-lg shadow-medium"
          />
        </div>
      </div>
    </section>
  );
};

export default AblationSection;