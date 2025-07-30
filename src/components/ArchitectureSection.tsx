const ArchitectureSection = () => {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          <strong>Grounded_Teacher Architecture </strong>
        </h2>
        
        <div className="mb-8">
          <p className="text-justify leading-relaxed text-foreground mb-6">
          The Grounded Teacher (GT) architecture addresses key challenges in Source-Free Unsupervised Domain Adaptation (SFOD) for object detection, such as noisy pseudo-labels, mode collapse, and class imbalance. Unlike traditional Student-Teacher
       frameworks that suffer from performance degradation due to biased pseudo-labels and EMA updates, GT introduces a Relation-Contextual Module (RCM) to model inter-class dynamics and biases, a semantic augmentation strategy that enhances
        minority class visibility using visually similar majority class samples from a curated Cropbank, and a Semantic-Aware Loss that prioritizes harder, underrepresented classes during training. Additionally, it leverages the strong zero-shot 
        representation capabilities of Vision Foundation Models (VFMs) to guide the student model, improving pseudo-label quality and mitigating domain shift. These innovations enable GT to learn robust, domain-invariant features and achieve 
        state-of-the-art performance (50.8 mAP) on Cityscapes → Foggy Cityscapes, surpassing prior benchmarks by a significant margin.
          </p>
          
          
        </div>

        <div className="text-center animate-fade-in">
          <img 
            src="images/1mg1.png"
            alt="Grounded teacher Architecture" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-medium hover-scale transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;