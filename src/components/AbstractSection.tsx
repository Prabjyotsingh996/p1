const AbstractSection = () => {
  return (
    <section className="bg-muted/30 py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground animate-fade-in">Abstract</h2>
        
        <div className="prose prose-lg max-w-none text-justify leading-relaxed text-foreground animate-fade-in">
          <p className="mb-4">
            In the field of medical imaging, several approaches have leveraged semi-supervised student-teacher
 architectures to bridge domain discrepancy. Context imbalance in labeled training data, coupled with
 significant domain shifts between domains, can lead to biased teacher models that produce inaccurate
 pseudo-labels, degrading the student model’s performance, causing a mode collapse. Class imbalance,
 particularly when one class significantly outnumbers another, leads to contextual bias. To tackle the
 problem of context bias and the significant performance drop of the student model in the <strong>SFOD</strong> setting,
 we introduce<strong>Grounded Teacher (GT)</strong>  as a standard framework. In this study, we model contextual
 relationships using a dedicated relational context module and leverage it to mitigate inherent biases
 in the model. This approach enables us to apply augmentations to closely related classes—across
 and within domains—enhancing the performance of underrepresented classes while keeping the effect
 on dominant classes minimal. We further improve the quality of predictions by implementing an
 expert foundational branch to supervise student model. We validate the effectiveness of our approach
 in mitigating context bias under the <strong>SFOD</strong> setting through experiments on three medical datasets
 supported by comprehensive ablation studies. All relevant resources, including preprocessed data,
 trained model weights, and code, are publicly available  
          </p>
          
        
          
        
        
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;