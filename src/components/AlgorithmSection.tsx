const AlgorithmSection = () => {
 return (
  <section className="hidden">
    {AlgorithmSection.tsx}
  </section>
);

  return (
    <section className="bg-muted/30 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Mask Annealing Algorithm
        </h2>
        
        <div className="mb-8 text-center">
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Mask Annealing Algorithm (left) and Adaptive Confidence Refinement (right) 
            flowchart depicts the gradual transition of confidence threshold from soft to hard.
          </p>
        </div>

        <div className="text-center animate-fade-in">
          <img 
            src="https://dmaster-iitd.github.io/webpage/static/images/algorithm.png" 
            alt="Mask Annealing Algorithm and Adaptive Confidence Refinement" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-medium hover-scale transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AlgorithmSection;8